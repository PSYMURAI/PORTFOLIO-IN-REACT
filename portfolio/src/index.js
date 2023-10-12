import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeSwitcher from "./ThemeSwitcher";
import ToggleColorMode from "./components/togglecolormode/ToggleColorMode";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeSwitcher}>
      <ColorModeScript initialColorMode={ThemeSwitcher.config.initialColorMode} />
      <App />
      <ToggleColorMode  />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


