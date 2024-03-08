import { PropsWithChildren } from 'react';

import IdeaProvider from './IdeaProvider';
export * from './IdeaProvider';

import RouterProvider from './RouterProvider';
export * from './RouterProvider';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <IdeaProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </IdeaProvider>
  );
}