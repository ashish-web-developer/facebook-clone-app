import type {FC} from "react";
import {
    Box,
    Stack,
    Divider,
    Avatar,
    Button
} from "@mui/material"
import {VideoIcon} from "../../CustomIcons";
import {useCreateRoomContext} from "../../../pages/_app";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    buttonStyle:{
        backgroundColor:"#242526",
        color:"white"
    },
    CreateRoomButton:{
        borderRadius:"30px",
        fontWeight:"bold",
        textTransform:"capitalize",
        height:"60%"
    }
});




const CreateRoom:FC = ()=>{
    const {setRoomState} = useCreateRoomContext();
    const classes = useStyle();
    return(
         <Box
        className = {classes.buttonStyle}
        sx = {{
            width:{xs:"100%",md:"70%"},
            height:"70px",
            boxShadow:3,
            display:"flex",
            alignItems:"center",
            borderRadius:{xs:"0px",md:"10px"}
        }}
        mt={3}
        pl={2}
        >
         <Button 
         onClick = {()=>setRoomState(true)}
         className = {classes.CreateRoomButton} 
         startIcon = {<VideoIcon width = {25} height ={25}/>} 
         variant = "outlined"
         >Create Room </Button>
            
        </Box>

    )
}


export default CreateRoom;
