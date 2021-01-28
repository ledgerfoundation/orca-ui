import { computed, observable } from 'mobx';
import podSchema from '../schema/pod';
import { parseError } from '../utils/error-utils';

export class PodPageStore {
  @observable authStore = null;

  @observable _isLoading = false;

  @observable _pod = podSchema.default();

  @observable _paymentIntentSecret = null;

  constructor(authStore, notificationsStore) {
    this.authStore = authStore;
    this.notificationsStore = notificationsStore;
  }

  @computed
  get isLoading() {
    return this._isLoading;
  }

  @computed
  get canInstructorView() {
    return this._pod?.hostId === this.authStore?.user?._id;
  }

  @computed
  get isBooked() {
    return this._pod?.memberIds?.includes(this.authStore?.user?._id);
  }

  @computed
  get isPodFull() {
    return this._pod?.memberIds?.length >= 10;
  }

  @computed
  get pod() {
    const user = this.authStore.user || { _id: '' };
    if (this._pod) {
      const pod = this._pod;
      const updatedPod = {
        ...pod,
        booked: pod.memberIds
          ? !!pod.memberIds.find(participant => (participant?._id || participant) === user._id)
          : false,
      };
      return updatedPod;
    }
    return {};
  }

  @computed
  get paymentIntentSecret() {
    return this._paymentIntentSecret;
  }

  setPod = pod => {
    this._pod = pod;
  };

  loadPod = async podId => {
    this._isLoading = true;
    this._pod = await API.get(`/api/pods/${podId}`);
    this._isLoading = false;
  };

  bookPod = async pod => {
    this._isLoading = true;
    try {
      this._pod = await API.post('/api/pods/book-pod', pod);
      this.authStore.user.pods
        ? this.authStore.user.pods.push(pod)
        : (this.authStore.user.pods = [pod]);
      this._pod = await API.get(`/api/pods/${pod._id}`);
      this.notificationsStore.showSuccessMessage(`${pod.title} was successfully booked`);
    } catch (error) {
      const err = parseError(error, 'POD_ERROR');
      this.notificationsStore.showErrorMessage(err.message);
    }
    this._isLoading = false;
  };

  editPod = async (pod, podImg) => {
    this._isLoading = true;
    try {
      this._pod = await editPod(pod, podImg);
      this.notificationsStore.showSuccessMessage(`${pod.title} was successfully edited`);
    } catch (error) {
      const err = parseError(error, 'POD_ERROR');
      this.notificationsStore.showErrorMessage(err.message);
    }
    this._isLoading = false;
  };

  // createPaymentIntent = async podId => {
  //   this._isLoading = true;
  //   try {
  //     this._paymentIntentSecret = await API.post('/api/payment', podId);
  //   } catch (error) {
  //     const err = parseError(error, 'STRIPE_ERROR');
  //     this.notificationsStore.showErrorMessage(err.message);
  //   }
  //   this._isLoading = false;
  // };
}

export default PodPageStore;
