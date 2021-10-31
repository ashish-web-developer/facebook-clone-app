
import * as React from 'react';
import {
    Box,
    Backdrop,
    Modal,
    Fade,
    Button,
    Typography,
    Stack,
    Divider,
    Avatar,
    TextareaAutosize,
    IconButton,

} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    VideoIcon

} from "../../CustomIcons";


import {useCreateRoomContext} from "../../../pages/_app";
import {makeStyles} from "@mui/styles";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:"100%",md:500},
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    backgroundColor:"#242525",
    borderRadius:"10px"
};


const useStyles = makeStyles({
    typeStyle:{
        color:"#ffffff",
    },
    textAreaStyle:{
        backgroundColor:"#242525",
        borderWidth:"0px",
        color:"gray",
        fontSize:"20px",
        fontWeight:"bold"
    },
    buttonStyle:{
        backgroundColor:"#242525",
        boxShadow:"none",
        textTransform:"capitalize"
    },
    buttonSubtitle:{
        color:"gray",
        fontSize:"0.9rem"
    },
    createRoomButton:{
        fontWeight:"bold",
        textTransform:"capitalize"
    }
})
export default function TransitionsModal() {
    const {roomState, setRoomState} = useCreateRoomContext();
    const classes = useStyles();

    return (
    <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={roomState}
        onClose={()=>setRoomState(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
        >
            <Fade in={roomState}>
                <Box
                sx = {style}
                >
                <Stack mb={1} spacing = {1} direction = "column">
                    <Box
                    sx = {{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                    >
                        <Box
                        sx ={{
                            borderRadius:"50%",
                            borderColor:"#ffffff",
                            border:1,
                            display:"inline-block"
                        }}
                        p={3} >
                            <VideoIcon width = {30} height = {30}/>
                        </Box>
                        <Typography 
                        mt={2}
                        sx = {{
                            fontWeight:"bold",
                                fontSize:"20px" 
                        }}
                        className = {classes.typeStyle}
                        >
                        Create your room
                        </Typography>
                    </Box>
                    <Box>
                        <Stack spacing = {2} direction = "column">
                            <Button 
                            className = {classes.buttonStyle}
                            size = "large"
                            variant = "contained"
                            >
                            <Box
                            
                            sx = {{
                                display:"flex",
                                justifyContent:"space-between", alignItems:"center",
                                width:"100%"
                            }}
                            >
                                        <Stack direction = "column">
                                            &#U+1F44B;
                                            <Typography>
                                                Room name
                                            </Typography>
                                            <Typography 
                                            className = {classes.buttonSubtitle}>
                                                Ashish room 
                                            </Typography>
                                        </Stack>
                                        <ArrowForwardIosIcon/>
                                </Box>
                           </Button>

                            <Button 
                            className = {classes.buttonStyle}
                            size = "large"
                            endIcon = {<ArrowForwardIosIcon/>}
                            variant = "contained"
                            >
                                <Stack direction = "column">
                                    <Typography>
                                        Start Time
                                    </Typography>
                                    <Typography 
                                    className = {classes.buttonSubtitle}>
                                        Now
                                    </Typography>
                                </Stack>
                            </Button>
                        </Stack>
                    </Box>
                    <Typography className = {classes.buttonSubtitle}> The room is not visible until you invite people after you have created it.
                    </Typography>
                </Stack>
                <Button className = {classes.createRoomButton} fullWidth variant = "contained">Create Room </Button>
                
                </Box>
            </Fade>
        </Modal>
    </div>
    );
}

