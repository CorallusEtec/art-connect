import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";

type UsuarioEditContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  alert: boolean;
  setAlert: (value: boolean) => void;

  usuarioId: RefObject<number>;
};

const UsuarioEditContext = createContext<UsuarioEditContextType>(
  {} as UsuarioEditContextType,
);

type UsuarioEditProviderProps = {
  children: ReactNode;
};

export function UsuarioEditProvider({ children }: UsuarioEditProviderProps) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const usuarioId = useRef(0);
  return (
    <UsuarioEditContext.Provider
      value={{ alert, setAlert, open, setOpen, usuarioId }}
    >
      {children}
    </UsuarioEditContext.Provider>
  );
}

export function useUsuarioEdit() {
  const context = useContext(UsuarioEditContext);
  if (context === undefined)
    throw new Error("O contexto deve ser usado em um UsuarioEditProvider");

  return context;
}
