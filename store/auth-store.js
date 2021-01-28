import { observable } from 'mobx';

export class AuthStore {
  @observable _mounted = false;

  @observable notificationsStore;

  @observable isLoading = false;

  @observable user = null;

  @observable provider = null;

  constructor(notificationsStore) {
    this.notificationsStore = notificationsStore;
  }

  authenticate = async () => {
    this._isLoading = true;

    if (typeof window.ethereum !== 'undefined') {
      this.provider = window.ethereum;
    }

    this._isLoading = false;
    this._mounted = true;
  };

  login = async () => {
    this._isLoading = true;
    if (this.provider) {
      const [account] = await this.provider.request({ method: 'eth_requestAccounts' });
      this.user = account;
    }
    this._isLoading = false;
  };

  logout = () => {
    this.user = null;
  };
}
