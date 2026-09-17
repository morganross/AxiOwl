import React, {useContext, useMemo} from 'react';

const LIGHT = 'light';
const Context = React.createContext(undefined);

function createValue() {
  const setColorMode = () => {};
  return {
    colorMode: LIGHT,
    colorModeChoice: LIGHT,
    setColorMode,
    get isDarkTheme() {
      return false;
    },
    setLightTheme() {},
    setDarkTheme() {},
  };
}

const DEFAULT_VALUE = createValue();

export function ColorModeProvider({children}) {
  const value = useMemo(() => createValue(), []);
  return React.createElement(Context.Provider, {value}, children);
}

export function useColorMode() {
  return useContext(Context) ?? DEFAULT_VALUE;
}
