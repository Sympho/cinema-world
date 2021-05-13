export interface IRoute {
  url?: string;
  exact?: boolean;
  path: string;
  componentPath: string;
}

export interface RouterProps {
  isAuth?: boolean | string;
  lang?: string;
}
