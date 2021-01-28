import * as React from 'react';
import PropTypes from 'prop-types';
import { useLocalStore } from 'mobx-react-lite';

const storeContext = React.createContext(null);

export const AppStoreProvider = props => {
  const { children, createAppStore } = props;
  const store = useLocalStore(createAppStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

AppStoreProvider.propTypes = {
  createAppStore: PropTypes.func.isRequired,
};

export const useAppStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('Store provider is not set.');
  }
  return store;
};
