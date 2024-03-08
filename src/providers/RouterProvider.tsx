import { useState, PropsWithChildren, createContext, useContext, Dispatch, SetStateAction } from 'react';

type Routes = 'generate' | 'customize';
const RouterContext = createContext<[Routes, Dispatch<SetStateAction<Routes>>]>(['generate', () => {}]);

export default function RouterProvider({ children }: PropsWithChildren) {
  const context = useState<Routes>('generate')
  
  return (
    <RouterContext.Provider value={context}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within a RouterProvider');
  return context;
}

export function useNavigate() {
  const [_, setRoute] = useRouter();
  return setRoute;
}