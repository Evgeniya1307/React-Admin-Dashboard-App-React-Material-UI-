import {ColorModeContext, useMode} from '../theme'
import { CssBaseline, ThemeProvider } from "@mui/material";//сбросит и проведёт

function App() {
  const [theme, colorMode]= useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>{/*способ настроить наш цвет */}
    <ThemeProvider theme={theme}>{/*поставщик чтобы пользовательский интерфейс имел к нему доступ */}
    <div className="App">
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
