import { computed, observable } from 'mobx';
import { ethers } from 'ethers';
import MemberToken from '../artifacts/contracts/OrcaMemberToken.sol/OrcaMemberToken.json';
import OrcaProtocol from '../artifacts/contracts/OrcaProtocol.sol/OrcaProtocol.json';
import PodManager from '../artifacts/contracts/OrcaPodManager.sol/OrcaPodManager.json';
import VoteManager from '../artifacts/contracts/OrcaVoteManager.sol/OrcaVoteManager.json';

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
    const provider = new ethers.providers.Web3Provider(this.authStore.provider);
    return this.authStore.provider
      ? new ethers.Contract(MemberToken.address, MemberToken.abi, provider)
      : null;
  }

  @computed
  get createPod() {
    const provider = new ethers.providers.Web3Provider(this.authStore.provider);
    return this.authStore.provider
      ? new ethers.Contract(OrcaProtocol.address, OrcaProtocol.abi, provider)
      : null;
  }

  @computed
  get podManager() {
    const provider = new ethers.providers.Web3Provider(this.authStore.provider);
    return this.authStore.provider
      ? new ethers.Contract(PodManager.address, PodManager.abi, provider)
      : null;
  }

  @computed
  get voteManager() {
    const provider = new ethers.providers.Web3Provider(this.authStore.provider);
    return this.authStore.provider
      ? new ethers.Contract(VoteManager.address, VoteManager.abi, provider)
      : null;
  }
}
