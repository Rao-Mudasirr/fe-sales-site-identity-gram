import Link from 'next/link';
import React from 'react';
import { LinkProps } from './custom-link.types';

export const CustomLink = ({
  title,
  link,
  bgColor = '#645CAA',
  color = '#ffffff',
}: LinkProps): JSX.Element => {
  return (
    <React.Fragment>
      <Link
        href={link}
        passHref
        style={{
          textDecoration: 'none',
          color: color,
          backgroundColor: bgColor,
          borderRadius: '5px',
          padding: '12px 20px',
          fontSize: '1rem',
          fontWeight: '500',
        }}
      >
        {title}
      </Link>
    </React.Fragment>
  );
};
