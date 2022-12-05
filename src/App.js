import {ColorModeContext, useMode} from '../theme'
import { CssBaseline, ThemeProvider } from "@mui/material";//сбросит и проведёт
import Topbar from './scenes/dashboard/global/Topbar';


function App() {
  const [theme, colorMode]= useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>{/*способ настроить наш цвет */}
    <ThemeProvider theme={theme}>{/*поставщик чтобы пользовательский интерфейс имел к нему доступ */}
    <CssBaseline />{/*сбросит css по умолчанию */}
    <div className="App">
    <main className="content">{/*основной раздел */}
    <Topbar/>{/*верхняя панель */}
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
