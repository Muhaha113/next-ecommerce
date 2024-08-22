'use client'

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import Link from "next/link";
import NextLink from 'next/link';
import { BorderBottom } from "@mui/icons-material";
import theme from "@/app/theme";

export default function AppHeader() {
  return (
    <main>
      <AppBar position="static" color="default" elevation={0} sx={{borderBottom: (theme)=> `1px ${theme.palette.divider}` }}>
        
      </AppBar>
    </main>
  );
}