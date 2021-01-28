import { observable } from 'mobx';

export class NotificationsStore {
  @observable successMessage = null;

  @observable errorMessage = null;

  showSuccessMessage = message => {
    this.successMessage = message;
  };

  showErrorMessage = message => {
    this.errorMessage = message;
  };

  clearSuccessMessage = () => {
    this.successMessage = null;
  };

  clearErrorMessage = () => {
    this.errorMessage = null;
  };
}
