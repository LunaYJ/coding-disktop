interface State {
  currAccount: CurrAccountObj | null;
  isLoginFormShow: boolean;
  allAccounts: any;
}
interface CurrAccountObj {
  [key: string]: any;
}

interface Mutations {
  [key: string]: any;
}
export {
  State,
  CurrAccountObj,
  Mutations,
};
