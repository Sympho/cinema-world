import { FC } from 'react';

export interface IRoute {
  exact?: boolean;
  path: string;
  component: FC;
}

export interface RouterProps {
  isAuth?: boolean;
  lang?: string;
}
