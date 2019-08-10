export interface ImplicitAccountLinkConfigOAuth {
  serviceEndPoint: string;
  requestMethod: string;
  requestOptions: any;
  token: string;
}
export interface ExplicitAccountLinkConfigOAuth {
}
export interface ImplicitAccountLinkConfigNonOAuth {
}
export interface ExplicitAccountLinkConfigNonOAuth {
}

export interface IAccountLink {
  actionType: string;
  configFilePath: string;
  authenticationConfig: ImplicitAccountLinkConfigOAuth | ExplicitAccountLinkConfigOAuth | ImplicitAccountLinkConfigNonOAuth | ExplicitAccountLinkConfigNonOAuth;

}
