import React from "react";
import { render } from "@testing-library/react";
import { createStore, RootState } from "./state/store";
import { Provider } from "react-redux";

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

export * from "@testing-library/react";
