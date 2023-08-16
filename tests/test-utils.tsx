import { useHydrateAtoms } from "jotai/utils";
import { Provider as JotaiProvider } from "jotai";
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

import { App } from "../src/App";
import { todosAtom } from "../stores/todos";

afterEach(() => {
  cleanup();
});

export const customRender = (element: React.ReactElement, opts = {}) =>
  render(element, {
    wrapper: ({ children }) => children,
    ...opts,
  });

type TestProviderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: any;
  children: JSX.Element;
};

function HydrateAtoms({ initialValues, children }: TestProviderProps) {
  useHydrateAtoms(initialValues);
  return children;
}

function TestProvider({ initialValues, children }: TestProviderProps) {
  return (
    <JotaiProvider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </JotaiProvider>
  );
}

export function TestApp() {
  return (
    <TestProvider initialValues={[[todosAtom, { data: [] }]]}>
      <App />
    </TestProvider>
  );
}
