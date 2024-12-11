import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css"
import Interface from "./components/Interface";


// responsive breakpoint
const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
function App() {
  
  return (
    <>
      <MantineProvider theme={theme}>
        <Canvas camera={{position:[2, 1, 9], fov:50}} shadows>
          <Model />
        </Canvas>
        <Interface/>
      </MantineProvider>
    </>
  );
}

export default App
