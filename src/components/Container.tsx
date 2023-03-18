import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export default function Container(props: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...props} className={clsx(`container p-8 mx-auto xl:px-0`, props.className)}>
      {props.children}
    </div>
  );
}
