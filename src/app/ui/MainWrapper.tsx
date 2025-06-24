import { type PropsWithChildren } from 'react';

export default function MainWrapper(props: PropsWithChildren) {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
      {props.children}
    </div>
  );
}
