import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import React from 'react'
import {ColorModeContext, tokens} from '../../theme';//цветовой режим
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";//светлый режим
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

//верхняя панель
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)//прохожу в цвета во все и в палитру и в режим
  const colorMode =useContext(ColorModeContext)//цветовой режим будет сп-ть контекст чтобы позволять переключать различные состояния для цветого режима
  
  return (<Box display="flex" justifyContent="space-between" p={2}> {/*как див могу css внутрь ставить  */}
{/* ПАНЕЛЬ ПОИСКА */}
<Box
 display="flex"
backgroundColor={colors.primary[400]}
borderRadius="3px">
<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"/>
<IconButton type="button" sx={{ p: 1 }}>
</IconButton>
</Box>


{/*иконки*/ }
<Box  display="flex">
{/*4кнопки */}
<IconButton onClick={colorMode.toggleColorMode}>{/*функция позволяющая перейти от тёмного   */}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton> {/*уведомлений */}
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>{/*для настроек */}
          <SettingsOutlinedIcon />{/*световой режим */}
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
</Box>

    </Box>
   
  )
}

export default Topbar;




