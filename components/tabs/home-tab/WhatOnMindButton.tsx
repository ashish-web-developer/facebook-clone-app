import type {FC} from "react";
import {
    Box,
    Stack,
    Divider,
    Avatar,
    Button
} from "@mui/material"
import {makeStyles} from "@mui/styles";
import {usePostContext} from "../../../pages/_app";


const useStyle = makeStyles({
    buttonStyle:{
        backgroundColor:"#242526",
        color:"white"
    },
    whatMindButton:{
        backgroundColor:"#3a3b3c",
        borderRadius:"30px",
        width:"80%"
    },
    iconButton:{
        color:"gray",
        textTransform:"capitalize",
        fontWeight:"bold"
    }
});


const LiveVideo:FC = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#f4556f"><path d="M11.46667,137.6h97.46667c6.30667,0 11.46667,-5.16 11.46667,-11.46667v-80.26667c0,-6.30667 -5.16,-11.46667 -11.46667,-11.46667h-97.46667c-6.30667,0 -11.46667,5.16 -11.46667,11.46667v80.26667c0,6.30667 5.16,11.46667 11.46667,11.46667zM60.2,68.8c9.51733,0 17.2,7.68267 17.2,17.2c0,9.51733 -7.68267,17.2 -17.2,17.2c-9.51733,0 -17.2,-7.68267 -17.2,-17.2c0,-9.51733 7.68267,-17.2 17.2,-17.2zM166.26667,45.86667c-1.4448,0 -2.72333,0.57907 -3.7324,1.462l-0.05733,-0.02867l-30.61027,27.23333v11.46667v11.46667l30.61027,27.23333l0.06307,-0.02867c1.00333,0.88293 2.28187,1.462 3.72667,1.462c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-34.4v-34.4c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z" /></g></g></svg>
    )
}

const PhotoOrVideo:FC = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#45bd62"><path d="M3.44,0c-1.89469,0 -3.44,1.53188 -3.44,3.44v116.96c0,1.90813 1.54531,3.44 3.44,3.44h116.96c1.89469,0 3.44,-1.53187 3.44,-3.44v-116.96c0,-1.90812 -1.54531,-3.44 -3.44,-3.44zM20.64,20.64h82.56v72.24h-6.9875c0.01344,-0.14781 0.12094,-0.28219 0.1075,-0.43c-0.65844,-10.91125 -9.55406,-14.36469 -16.0175,-16.8775c-2.99656,-1.16906 -6.08719,-2.31125 -6.9875,-3.7625c-0.12094,-1.55875 -0.12094,-2.94281 -0.1075,-4.4075c1.45125,-1.76031 2.71438,-4.50156 3.3325,-6.9875c1.37063,-0.98094 2.78156,-2.82187 3.225,-6.45c0.22844,-1.84094 -0.18812,-3.34594 -0.86,-4.515c1.04813,-3.84312 2.53969,-11.825 -0.86,-17.3075c-1.54531,-2.49937 -3.88344,-4.20594 -6.88,-4.945c-1.96187,-2.02906 -5.25406,-3.1175 -9.46,-3.1175c-6.62469,0.12094 -11.51594,2.15 -14.5125,6.1275c-3.3325,4.4075 -4.03125,10.88438 -2.15,19.135c-0.69875,1.1825 -1.19594,2.72781 -0.9675,4.6225c0.44344,3.62813 1.85438,5.46906 3.225,6.45c0.63156,2.48594 1.84094,5.22719 3.3325,6.9875c0.01344,1.47813 0.12094,2.83531 0,4.4075c-0.90031,1.45125 -4.085,2.59344 -7.095,3.7625c-6.49031,2.51281 -15.35906,5.96625 -16.0175,16.8775c-0.01344,0.14781 0.09406,0.28219 0.1075,0.43h-6.9875zM130.72,24.4025v20.9625l1.505,0.215l-1.505,8.815v66.005c0,5.68406 -4.63594,10.32 -10.32,10.32h-103.415l114.9175,19.565c0.20156,0.02688 0.34938,0 0.5375,0c1.65281,0 3.15781,-1.22281 3.44,-2.9025l19.565,-115.24c0.3225,-1.86781 -0.91375,-3.655 -2.795,-3.9775zM159.53,49.02l-16.8775,99.545c-0.84656,4.97188 -5.16,8.6 -10.2125,8.6c-0.5375,0 -1.075,-0.01344 -1.72,-0.1075l-105.135,-17.845l-0.5375,2.365c-0.20156,0.88688 -0.05375,1.80063 0.43,2.58c0.48375,0.77938 1.26313,1.41094 2.15,1.6125l113.95,26.1225c0.25531,0.05375 0.49719,0.1075 0.7525,0.1075c0.645,0 1.27656,-0.18812 1.8275,-0.5375c0.77938,-0.48375 1.41094,-1.26312 1.6125,-2.15l26.1225,-113.95c0.20156,-0.88687 0.05375,-1.80062 -0.43,-2.58c-0.48375,-0.77937 -1.26312,-1.41094 -2.15,-1.6125z" /></g></g></svg>
    )
}

const Feeling:FC = ()=>{
    return(
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#f1c40f"><path d="M86,0c-47.49649,0 -86,38.50351 -86,86c0,47.49649 38.50351,86 86,86c47.49649,0 86,-38.50351 86,-86c-0.0543,-47.47398 -38.52602,-85.9457 -86,-86zM82.72461,7.23665c21.45728,-0.89228 42.34983,7.00808 57.84797,21.87477c15.49814,14.86669 24.26023,35.41275 24.26075,56.88857c-0.04915,43.51807 -35.31526,78.78418 -78.83333,78.83333c-42.8824,-0.0247 -77.87987,-34.3221 -78.77091,-77.19525c-0.89105,-42.87315 32.65118,-78.59504 75.49553,-80.40143zM121.83333,46.58333c-9.89029,0.01161 -17.90506,8.02638 -17.91667,17.91667c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0,-5.93706 4.81294,-10.75 10.75,-10.75c5.93706,0 10.75,4.81294 10.75,10.75c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c-0.01161,-9.89029 -8.02638,-17.90506 -17.91667,-17.91667zM49.64177,46.59033c-9.68681,0.28391 -17.39214,8.2187 -17.39177,17.90967c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0,-5.93706 4.81294,-10.75 10.75,-10.75c5.93706,0 10.75,4.81294 10.75,10.75c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0.00019,-4.84294 -1.96017,-9.47968 -5.43438,-12.85369c-3.47421,-3.37401 -8.16632,-5.19786 -13.00719,-5.05598zM39.41667,96.75c-0.95043,-0.00025 -1.86201,0.3772 -2.53407,1.04926c-0.67206,0.67206 -1.04951,1.58364 -1.04926,2.53407c0,26.55655 21.56647,46.58333 50.16667,46.58333c28.6002,0 50.16667,-20.02678 50.16667,-46.58333c0.00025,-0.95043 -0.3772,-1.86201 -1.04926,-2.53407c-0.67206,-0.67206 -1.58364,-1.04951 -2.53407,-1.04926zM43.15397,103.91667h85.69206c-0.83995,10.90391 -6.41932,20.891 -15.26416,27.32292c-3.35042,-7.57187 -14.25789,-12.98958 -27.58187,-12.98958c-13.32398,0 -24.23145,5.41771 -27.58187,12.98958c-8.84484,-6.43191 -14.42421,-16.41901 -15.26416,-27.32292zM86,125.41667c11.71392,0 20.12499,4.83962 21.33203,9.58822c-6.65463,3.19109 -13.95217,4.81436 -21.33203,4.74512c-7.37986,0.06924 -14.6774,-1.55403 -21.33203,-4.74512c1.20705,-4.7486 9.61811,-9.58822 21.33203,-9.58822z" /></g></g></svg>
    )
}

const WhatsOnMind:FC = ()=>{
    const {postState,setPostState} = usePostContext();
    const classes = useStyle();
    return(
        <Box
        className = {classes.buttonStyle}
        sx = {{
            width:{xs:"100%",md:"70%"},
            height:"120px",
            boxShadow:3,
            display:"flex",
            justifyContent:"center",
            borderRadius:{xs:"0px",md:"10px"}
        }}
        mt={3}
        >
            <Stack
            sx = {{
                width:"95%",
                height:"100%"
            }}
            divider = {<Divider orientation="horizontal" flexItem/>}
            >
                {/* top section goes here */}
                <Box
                sx = {{
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    alignItems:"center"
                }}
                >   <Stack sx = {{width:"100%"}} spacing = {2} direction = "row">
                    <Avatar alt = "avatar" src = "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>


                    {/* whats on your mind button */}
                    <Button 
                    onClick={()=>setPostState(true)}
                    className = {classes.whatMindButton}
                    size = "large"
                    variant = "contained"
                    >
                        What on Your mind
                    </Button>

                    </Stack>
                </Box>
                <Box
                sx = {{
                    height:"50%"
                }}
                >
                <Box
                sx = {{
                    display:"flex",
                    justifyContent:"space-around",
                    alignItems:"center"
                }}
                >
                    <Button className = {classes.iconButton} startIcon = {<LiveVideo/>}>Live Video </Button>
                    <Button className = {classes.iconButton} startIcon = {<PhotoOrVideo/>}>Photo/Video </Button>
                    <Button sx ={{display:{xs:"none",md:"flex"}}} className = {classes.iconButton} startIcon = {<Feeling/>}>Feeling/Activity  </Button>
                </Box>
                </Box>
            </Stack>
        </Box>
    )
}


export default WhatsOnMind;
