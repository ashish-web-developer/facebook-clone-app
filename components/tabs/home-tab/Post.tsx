import type {FC} from "react";
import {
    Box,
    Typography,
    Button
} from "@mui/material"
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
    },
    textStyle:{
        color:"gray"
    }
});



const Post:FC = ()=>{
    const classes = useStyle();
    return(
         <Box
        className = {classes.buttonStyle}
        sx = {{
            width:{xs:"100%",md:"70%"},
            height:"140px",
            boxShadow:3,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:{xs:"0px",md:"10px"}
        }}
        mt={3}
        pl={2}
        >
         <Typography 
            className = {classes.textStyle} 
            variant = "h6"
            sx = {{
                fontWeight:"bold"
            }}
         >
         No more Posts
         </Typography>

         <Typography 
            className = {classes.textStyle}
            variant = "subtitle3"
            mb = {2} 
         >
         Add more friends to see more posts in your News Feed.
        </Typography>
        <Button size = "small" variant = "contained">Find Friends</Button>

            
        </Box>

    )
}


export default Post;
