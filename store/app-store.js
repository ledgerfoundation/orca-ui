import { observable } from 'mobx';
import { useStaticRendering } from 'mobx-react-lite';
import { AuthStore } from './auth-store';
import { PodPageStore } from './pod-page-store';
import { NotificationsStore } from './notifications-store';
import { UserPageStore } from './user-page-store';
import { ContractStore } from './contract-store';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

export class AppStore {
  @observable authStore;

  @observable notificationsStore = new NotificationsStore();

  @observable podPage = new PodPageStore(this.authStore);

  constructor() {
    this.notificationsStore = new NotificationsStore();
    this.authStore = new AuthStore(this.notificationsStore);
    this.contractStore = new ContractStore(this.authStore, this.notificationsStore);
    this.podPage = new PodPageStore(this.authStore, this.notificationsStore, this.contractStore);
    this.userPageStore = new UserPageStore(
      this.authStore,
      this.notificationsStore,
      this.contractStore,
    );
  }
}
