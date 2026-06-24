import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";

type ArteEditContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  alert: boolean;
  setAlert: (value: boolean) => void;

  arteId: RefObject<number>;
  generoArteId: RefObject<number>;
};

const ArteEditContext = createContext<ArteEditContextType>(
  {} as ArteEditContextType,
);

type ArteEditProviderProps = {
  children: ReactNode;
};

export function ArteEditProvider({ children }: ArteEditProviderProps) {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const arteId = useRef(0);
  const generoArteId = useRef(0);
  return (
    <ArteEditContext.Provider
      value={{ generoArteId, alert, setAlert, open, setOpen, arteId }}
    >
      {children}
    </ArteEditContext.Provider>
  );
}

export function useArteEdit() {
  const context = useContext(ArteEditContext);
  if (context === undefined)
    throw new Error("O contexto deve ser usado em um UsuarioEditProvider");

  return context;
}
