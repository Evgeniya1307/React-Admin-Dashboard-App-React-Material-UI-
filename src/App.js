import {ColorModeContext, useMode} from '../theme'
import { CssBaseline, ThemeProvider } from "@mui/material";//сбросит и проведёт

function App() {
  const [theme, colorMode]= useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>{/*способ настроить наш цвет */}
    <div className="App">
    </div>
    </ColorModeContext.Provider>
  );
}

export default App;
