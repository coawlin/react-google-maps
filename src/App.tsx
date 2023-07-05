import "./App.css";
import Map from "./components/Map";
import Autocomplete from "./components/Autocomplete";
import LoadScript from "./components/LoadScript";
import ThemeSwitch from "./components/ThemeSwitch";
import { ConfigProvider, theme as antTheme } from "antd";
import { useState } from "react";
import { ThemeContext } from "./context/context";

function App() {
    const [theme, setTheme] = useState("light");
    const algorithm = theme === "light" ? antTheme.defaultAlgorithm : antTheme.darkAlgorithm;
    const backgroundColor = theme === "light" ? "#FFF" : "#000";
  
    return (
        <ThemeContext.Provider value={theme}>
            <ConfigProvider theme={{ algorithm }}>
                <div style={{ height: "inherit", width: "inherit", backgroundColor  }}>
                    <LoadScript>
                        <ThemeSwitch setTheme={setTheme}/>
                        <Autocomplete />
                        <Map />
                    </LoadScript>
                </div>
            </ConfigProvider>
        </ThemeContext.Provider>
    );
}

export default App;
