export interface UserInfoType extends UserLoginType {
  email: string;
  preferred1st: string;
  preferred2nd: string;
  preferred3rd: string;
}

export interface UserLoginType {
  username: string;
  password: string;
}

export interface PreferSelectedDataType {
  assetName: string;
  assetCode: string;
}