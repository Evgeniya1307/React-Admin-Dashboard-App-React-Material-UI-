import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import React from 'react'
import {ColorModeContext, tokens} from '../../../../theme';//цветовой режим
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
  return (
    <div>
      
    </div>
  )
}

export default Topbar;
