import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type PublicacaoContextType = {
  idPublicacao: RefObject<number>;
};

const PublicacaoContext = createContext<PublicacaoContextType>(
  {} as PublicacaoContextType,
);

type PublicacaoProviderProps = {
  children: ReactNode;
  idPublicacao: number;
};

export function PublicacaoProvider({
  idPublicacao,
  children,
}: PublicacaoProviderProps) {
  const id = useRef<number>(idPublicacao);

  return (
    <PublicacaoContext.Provider value={{ idPublicacao: id }}>
      {children}
    </PublicacaoContext.Provider>
  );
}

export function usePublicacaoContext() {
  const context = useContext(PublicacaoContext);

  return context;
}
