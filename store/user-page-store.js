import { computed, observable } from 'mobx';
import userSchema from '../schema/user';
import { parseError } from '../utils/error-utils';

export class UserPageStore {
  @observable authStore = null;

  @observable isLoading = false;

  @observable user = userSchema.default();

  constructor(authStore, notificationsStore) {
    this.authStore = authStore;
    this.notificationsStore = notificationsStore;
  }

  @computed
  get matchesUser() {
    return this.user?._id === this.authStore?.user?._id;
  }

  loadUser = async userId => {
    this.isLoading = true;
    this.isLoading = false;
  };

  createPod = async pod => {
    this.isLoading = true;
    try {
      this.notificationsStore.showSuccessMessage(`${pod.title} was successfully created`);
    } catch (error) {
      const err = parseError(error, 'POD_ERROR');
      this.notificationsStore.showErrorMessage(err.message);
    }
    this.isLoading = false;
  };
}
