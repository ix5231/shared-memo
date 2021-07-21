import React from "react";
import { render } from "@testing-library/react";
import { createStore, RootState } from "./state/store";
import { Provider } from "react-redux";
import { User } from "./models";
import { ConfigureStoreOptions } from "@reduxjs/toolkit";

type PartialConfig = Partial<ConfigureStoreOptions>;
type PartialState = Partial<RootState>;

export const renderWithStore = (
  ui: React.ReactElement,
  {
    preloadedState = undefined as PartialState | undefined,
    store = createStore({ preloadedState }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }: { children?: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export const renderWithAuth = (
  ui: React.ReactElement,
  userData: User,
  renderOptions?: PartialConfig
) =>
  renderWithStore(ui, {
    preloadedState: {
      auth: {
        userLoginStatus: "active",
        userData,
      },
    },
    ...renderOptions,
  });

export * from "@testing-library/react";
