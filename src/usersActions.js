export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const GET_ACCOUNTS_SUCCESS = 'GET_ACCOUNTS_SUCCESS';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const getAccounts = () => ({
  type: GET_ACCOUNTS,
});

export const getAccountsSuccess = (data) => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: data,
});

export const showNotification = (error) => ({
  type: SHOW_NOTIFICATION,
  payload: error,
});
