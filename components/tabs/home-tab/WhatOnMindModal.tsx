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
import {
    TagIcon,
    FeelingIcon,
    MapIcon,
    MikeIcon,
    PhotoIcon
} from "../../CustomIcons";


import {usePostContext} from "../../../pages/_app";
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
    }
})
export default function TransitionsModal() {
    const {postState, setPostState} = usePostContext();
    const classes = useStyles();

    return (
    <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={postState}
        onClose={()=>setPostState(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
        >
            <Fade in={postState}>
                <Box sx={style}>
                    <Stack
                    sx  ={{
                        width:"100%",
                        height:"100%",
                    }}
                    divider = {<Divider orientation = "horizontal" flexItem />}
                    >
                        {/* Create post text*/}
                        <Typography 
                        className = {classes.typeStyle} 
                        align = "center"
                        variant = "h5"
                        sx = {{
                            fontWeight:"bold"
                        }}
                        >
                            Create Post
                        </Typography>


                        {/*Whats on  your mind */}
                        <Box
                        sx = {{
                            width:"100%",
                            height:"100%"

                        }}
                        >
                        <Stack
                        sx = {{
                            width:"100%",
                        }}
                        direction = "column"
                        spacing = {3}
                        >
                                {/* User avatar goes here */}
                                <Box
                                sx = {{
                                    display:"flex",
                                    alignItems:"center"
                                }}
                                >
                                    <Avatar 
                                    alt = "user"
                                    src = "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                                    />
                                        <Typography
                                        sx = {{
                                            fontWeight:"bold"
                                        }}
                                        ml={2}
                                        className = {classes.typeStyle}
                                        >
                                        Ashish Prajapati
                                        </Typography>
                                </Box>
                                <TextareaAutosize
                                className = {classes.textAreaStyle}
                                aria-label = "textArea"
                                placeholder = "What's on your mind"
                                minRows={6}/>
                                <Box
                                sx = {{
                                    width:"100%",
                                    height:"60px",
                                    borderRadius:"10px",
                                    borderColor:"gray",
                                    display:"flex",
                                    alignItems:"center"
                                }}
                                px={2}
                                border={1}

                                >
                                    <Typography
                                    sx = {{
                                        color:"#ffffff",
                                        fontWeight:"bold"

                                    }}
                                    >
                                        Add to your post
                                    </Typography>
                                    <Stack ml = {5} direction = "row">
                                        <IconButton>
                                        <TagIcon 
                                        width = {30}
                                        height = {30}/>
                                        </IconButton>



                                        <IconButton>
                                            <FeelingIcon 
                                            height={30}
                                            width={30}/>
                                        </IconButton>
                                        <IconButton>
                                            <MapIcon 
                                            width = {30}
                                            height = {30}/>
                                        </IconButton>
                                        <IconButton>
                                            <MikeIcon 
                                            width = {30} 
                                            height = {30}/>
                                        </IconButton>
                                        <IconButton
                                        >
                                        <PhotoIcon 
                                        width = {30}
                                        height = {30}/>
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Button 
                                    variant = "contained"
                                    fullWidth
                                > 
                                Post 
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>

                </Box>
            </Fade>
        </Modal>
    </div>
    );
}

