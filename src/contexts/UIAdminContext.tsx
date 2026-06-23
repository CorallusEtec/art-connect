"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type UIAdminContextType = {
  drawer: boolean;
  toggleDrawer: () => void;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseMenu: () => void;
  menu: boolean;
  anchor: null | HTMLElement;
};

const UIAdminContext = createContext<UIAdminContextType>(
  {} as UIAdminContextType,
);

type UIAdminProviderProps = {
  children: ReactNode;
};

export function UIAdminProvider({ children }: UIAdminProviderProps) {
  const [drawer, setDrawer] = useState(false);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const menu = Boolean(anchor);

  function toggleDrawer() {
    setDrawer((prev) => !prev);
  }

  function handleOpenMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchor(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchor(null);
  }

  return (
    <UIAdminContext.Provider
      value={{
        anchor,
        drawer,
        toggleDrawer,
        menu,
        handleCloseMenu,
        handleOpenMenu,
      }}
    >
      {children}
    </UIAdminContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(UIAdminContext);

  if (context === undefined)
    throw new Error("O context deve ser usado em um UIAdminProvider");

  return {
    handleOpenMenu: context.handleOpenMenu,
    toggleDrawer: context.toggleDrawer,
  };
}

export function useDrawer() {
  const context = useContext(UIAdminContext);

  if (context === undefined)
    throw new Error("O context deve ser usado em um UIAdminProvider");

  return {
    drawer: context.drawer,
    toggleDrawer: context.toggleDrawer,
  };
}

export function useMenu() {
  const context = useContext(UIAdminContext);

  if (context === undefined)
    throw new Error("O context deve ser usado em um UIAdminProvider");

  return {
    menu: context.menu,
    anchor: context.anchor,
    handleCloseMenu: context.handleCloseMenu,
  };
}
