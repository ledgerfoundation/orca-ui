import { computed, observable } from 'mobx';
import userSchema from '../schema/user';
import { parseError } from '../utils/error-utils';
import { abi, address } from '../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json';

export class UserPageStore {
  @observable authStore = null;

  @observable isLoading = false;

  @observable user = userSchema.default();

  constructor(authStore, notificationsStore, contractStore) {
    this.authStore = authStore;
    this.notificationsStore = notificationsStore;
    this.contractStore = contractStore;
  }

  @computed
  get matchesUser() {
    return this.user?._id === this.authStore?.user?._id;
  }

  loadUser = async userAddress => {
    this.isLoading = true;
    const userPods = this.contractStore.memberToken.balanceOfBatch(this.user, 1);
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
