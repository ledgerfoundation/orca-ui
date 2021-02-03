import { computed, observable } from 'mobx';
import userSchema from '../schema/user';
import { parseError } from '../utils/error-utils';
// import { abi, address } from '../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json';
// import CreatePod from '../artifacts/contracts/OrcaProtocol.sol/OrcaProtocol.json';

export class UserPageStore {
  @observable authStore = null;

  @observable isLoading = false;

  @observable user = userSchema.default();

  @observable userMemberPods = null;

  @observable userHostPods = null;

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
      this.userMemberPods = this.contractStore.memberToken.balanceOf(userAddress, 2);
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  };

  createPod = async pod => {
    this.isLoading = true;
    try {
      // const newPod = CreatePod(
      //   podId,
      //   totalSupply,
      //   orcaToken.address,
      //   functionSignature,
      //   params,
      //   comparisonLogic,
      //   comparisonValue,
      //   votingPeriod,
      //   minQuorum,
      // );
      this.notificationsStore.showSuccessMessage(`${pod.title} was successfully created`);
    } catch (error) {
      const err = parseError(error, 'POD_ERROR');
      this.notificationsStore.showErrorMessage(err.message);
    }
    this.isLoading = false;
  };
}
