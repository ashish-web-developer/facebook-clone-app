import type {FC} from "react";
import CreateStoryButton from "./CreateStoryButton";
import WhatsOnMind from "./WhatOnMindButton";
import CreateRoom from "./CreateRoom";
import Post from "./Post";
import WhatsOnMindModal from "./WhatOnMindModal";
import CreateRoomModal from "./CreateRoomModal";
import {
    Box,
    Stack,
    TextField,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    boxStyle:{
        backgroundColor:"#242526"
    },
    pageStyle:{
        backgroundColor:"#18191a"
    },
});

const HomeTab:FC = ()=>{
    const classes = useStyle();
    return(
        <>
        <Stack 
        direction={{xs:"column",md:"row"}}
        sx = {{
            width:"100%",
            height:"100vh"
        }}
        className = {classes.pageStyle}
        >
            {/* left section */}
            <Box
            sx = {{
                width:{xs:"100%",md:"65%"},
                height:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
            pt={4}
            >
            {/* Create story button goes here */}
            <CreateStoryButton/>
            {/* what's on your mind button*/}
            <WhatsOnMind/>

            {/* Create room button */}
            <CreateRoom/>

            {/* post */}
            <Post/>
            
            <Box>
            </Box>

            </Box>




            {/* right section */}
            <Box
            sx = {{
                width:{xs:"100%",md:"35%"},
                height:"100%"
            }}
            >
            </Box>

        </Stack>
        {/* Modal goes here */}
        <WhatsOnMindModal/>
        <CreateRoomModal/>
        </>
    )
}

export default HomeTab;
