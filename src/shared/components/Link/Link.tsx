import { FC } from 'react';
import { Link as RouterLink, LinkProps, useParams } from 'react-router-dom';

import { DEFAULT_LANG } from 'shared/constants/locales';

const Link: FC<LinkProps> = ({ to, children, ...props }) => {
  const { lang = DEFAULT_LANG } = useParams<{ lang: string }>();

  return (
    <RouterLink to={`/${lang}${to}`} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
