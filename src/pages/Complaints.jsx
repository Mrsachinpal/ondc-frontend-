import React from "react";
import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
export default function Complaints() {
  return (
    <div>
    <Box height={80} />
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <div>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
    <h1>this is complaints page</h1>
      </Box>
    </div>
    </Box>
        
    </div>
  )
}

