import { FC } from 'react';
import { Link as RouterLink, LinkProps, useParams } from 'react-router-dom';

import { defaultLang } from 'shared/constants/locales';

const Link: FC<LinkProps> = ({ to, children, ...props }) => {
  const { lang = defaultLang } = useParams<{ lang: string }>();

  return (
    <RouterLink to={`/${lang}${to}`} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
