import type { NextPage } from 'next'
import {useState} from "react";
import Head from 'next/head'
import Navbar from "../components/nav-components/Navbar";
import HomeTab from "../components/tabs/home-tab/HomeTab";
import GroupTab from "../components/tabs/GroupTab";
import MarketplaceTab from "../components/tabs/MarketplaceTab";
import WatchTab from "../components/tabs/WatchTab";
import MoreTab from "../components/tabs/MoreTab";
import {
    Box,
    Typography
}from "@mui/material";
import Modal from "../components/tabs/home-tab/WhatOnMindModal";


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Home: NextPage = () => {
    const [tabValue,setTabValue] = useState(0);
    return (
        <>
        <Navbar tabValue = {tabValue} setTabValue = {setTabValue}/>
        <Box
        sx = {{
            width:"100%",
            height:"100vh"
        }}
        >
        <TabPanel value = {tabValue} index = {0}>
            <HomeTab/>
        </TabPanel>
        <TabPanel value = {tabValue} index = {1}>
            <GroupTab/>
        </TabPanel>
        <TabPanel value = {tabValue} index = {2}>
            <WatchTab/>
        </TabPanel>
        <TabPanel value = {tabValue} index = {3}>
            <MarketplaceTab/>
        </TabPanel>
        <TabPanel value = {tabValue} index = {4}>
            <MoreTab/>
        </TabPanel>
        </Box>
        <Modal/>

        </>
    )
}

export default Home
