import history from "../history";
import store from "../config/store";

export const checkIsAuthNav = () => {
  let isAuthenticatedCustomer = store.getState().customerAuth.authenticated;

  let isAuthenticatedBusinessOwner = store.getState().businessOwnerAuth
    .authenticated;

  if (isAuthenticatedBusinessOwner) {
    history.push("/dashboard");
    return;
  }

  if (isAuthenticatedCustomer) {
    history.push("/businessunites");
    return;
  }
};
