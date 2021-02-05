import { computed, observable } from 'mobx';
import { parseError } from '../utils/error-utils';

export class UserPageStore {
  @observable authStore = null;

  @observable isLoading = false;

  @observable user = null;

  @observable userMemberPods = [];

  @observable userHostPods = [];

  constructor(authStore, notificationsStore, contractStore) {
    this.authStore = authStore;
    this.notificationsStore = notificationsStore;
    this.contractStore = contractStore;
  }

  @computed
  get isAuthUser() {
    return this.user === this.authStore?.user;
  }

  setUser = user => {
    this.user = user;
  };

  loadUser = async userAddress => {
    this.isLoading = true;
    try {
      // console.log(this.contractStore.createPod, 'create pod contract');
      // console.log(this.contractStore.podManager, 'create rule');
      // console.log(this.contractStore.voteManager, 'vote on rule');
      // console.log(this.contractStore.memberToken, 'MEMBER');
      // this.userMemberPods = this.contractStore.memberToken.balanceOf(userAddress, 2) || [];
      // console.log(this.userMemberPods);
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  };

  createPod = async pod => {
    this.isLoading = true;
    try {
      // const newPod = await this.contractStore.createPod.createPod(pod);
      this.notificationsStore.showSuccessMessage(`${pod.title} was successfully created`);
    } catch (error) {
      const err = parseError(error, 'POD_ERROR');
      this.notificationsStore.showErrorMessage(err.message);
    }
    this.isLoading = false;
  };
}
