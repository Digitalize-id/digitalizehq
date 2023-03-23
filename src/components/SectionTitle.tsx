import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import Container from './Container';

type Props = {
  title?: string;
  align?: string;
  pretitle?: string;
};

export default function SectionTitle(props: PropsWithChildren<Props>) {
  return (
    <Container
      className={clsx('flex w-full flex-col mt-4', {
        'items-center justify-center text-center': props.align !== 'left',
      })}
    >
      {props.pretitle && (
        <div className="text-lg font-bold tracking-wider text-gradient uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
