import type {FC} from "react";
import {makeStyles} from "@mui/styles";
import {
    Box,
    Stack,
    Button,
    Fab,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const useStyle = makeStyles({
    floatingButtonStyle:{
        backgroundColor:"#263951"
    },
    createStoryButtonStyle:{
        backgroundColor:"#242526",
        color:"white"
    }
});
const CreateStory:FC = ()=>{
    const classes = useStyle();
    return(
            <Box
            className = {classes.createStoryButtonStyle}
            sx = {{
                width:{xs:"100%",md:"85%"},
                height:"75px",
                boxShadow:3,
                display:"flex",
                alignItems:"center",
                borderRadius:{xs:"0px",md:"10px"}
            }}
            px={{xs:2,md:5}}
            >
                <Fab size = "small" className = {classes.floatingButtonStyle} aria-label="add">
                    <AddIcon />
                </Fab>
                {/* button text goes here */}
                <Box pl={2}>
                    <Stack direction = "column">
                        <Typography variant = "h6">Create story</Typography>
                        <Typography variant = "subtitle3">Share a photo or write something</Typography>
                    </Stack>
                </Box>
            </Box>
    )
}

export default CreateStory;
