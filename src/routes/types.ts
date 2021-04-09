import { FC } from 'react';

export interface IRoute {
  url?: string;
  exact?: boolean;
  path: string;
  component: FC;
}

export interface RouterProps {
  isAuth?: boolean | string;
  lang?: string;
}
