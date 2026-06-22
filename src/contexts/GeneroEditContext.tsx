import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";

type GeneroArteEditContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  alert: boolean;
  setAlert: (value: boolean) => void;

  generoArteId: RefObject<number>;
};

const GeneroArteEditContext = createContext<GeneroArteEditContextType>(
  {} as GeneroArteEditContextType,
);

type GeneroArteEditProviderProps = {
  children: ReactNode;
};

export function GeneroArteEditProvider({
  children,
}: GeneroArteEditProviderProps) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const generoArteId = useRef(0);
  return (
    <GeneroArteEditContext.Provider
      value={{ generoArteId, alert, setAlert, open, setOpen }}
    >
      {children}
    </GeneroArteEditContext.Provider>
  );
}

export function useGeneroArteEdit() {
  const context = useContext(GeneroArteEditContext);
  if (context === undefined)
    throw new Error("O contexto deve ser usado em um UsuarioEditProvider");

  return context;
}
