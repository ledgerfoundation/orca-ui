import { computed, observable } from 'mobx';
import { ethers } from 'ethers';

import MemberToken from '../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json';

export class ContractStore {
  @observable authStore = null;

  @observable notificationsStore = null;

  @observable isLoading = false;

  constructor(authStore, notificationsStore) {
    this.authStore = authStore;
    this.notificationsStore = notificationsStore;
  }

  @computed
  get memberToken() {
    return this.authStore.provider
      ? new ethers.Contract(MemberToken.address, MemberToken.abi, this.authStore.provider)
      : null;
  }
}
