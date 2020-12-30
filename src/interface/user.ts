export interface AccountItemData {
  url: string;
  email: string;
  password: string;
  eid?: string;
  label?: string;
  teamAvatar?: string;
}
export interface AccountItem {
  // label: AccountLabel;
  [propName: string]: AccountItemData;
}
