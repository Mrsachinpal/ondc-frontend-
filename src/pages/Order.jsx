import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
import React from "react";

export default function  Order() {
  return (
    <div>
    <Box height={80} />
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <div>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
    <h1>This is Order page</h1>

      </Box>
    </div>
    </Box>
        
    </div>
  )
}
