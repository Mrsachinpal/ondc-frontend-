
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BarChart from "../components/Chart/BarChart";
import 'react-circular-progressbar/dist/styles.css';
import Navbar from "../components/Navbar";
import ReactCircular from "../components/Chart/ReactCircular";
import Cards from "../components/Cards/Cards";
import React from "react";
export default function Dashboard() {

  return (
    <>
         <Navbar/>
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Cards Icon={<CreditCardIcon/>} text={"$500.00"} text2={ "Total Earning"} />
                <Cards Icon={<LocalMallIcon/>} text={"$900.00"} text2={ "Total Order"} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
                <Cards Icon={<EditNoteIcon/>} text={"$500.00"} text2={ "Total Complaints "} />
            </Grid>
          </Grid>          
          {/* Second Grid container */}
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ minHeight: 45 + "vh" }}>
                <BarChart/>
              </Card>
            </Grid>
            <Grid item xs={6}>
            <Stack spacing={2} direction="row" >
                <ReactCircular value={60} text={"60"}/>
                <ReactCircular value={50} text={"50"}/> 
             </Stack>
          <Box height={44} />
          <Stack spacing={2} direction="row" >
          <ReactCircular value={80} text={"80"}/> 
          <ReactCircular value={100} text={"100"}/> 
             </Stack>         
            </Grid>       
          </Grid>    
        </Box>
      </Box>
    </>
  );
}
