import type {FC} from "react";
import {useState} from "react";
import {
    Box,
    Stack,
    Autocomplete,
    TextField,
    Tab,
    Tabs,
    Fab,
    IconButton
} from "@mui/material";
import {makeStyles} from "@mui/styles"
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from "./Menu";


interface Props{
    tabValue:number;
    setTabValue:(arg:number)=>void;
}

const useStyles = makeStyles({
    fabstyle:{
        boxShadow:"1px 1px 1px black"
    },
    navbarStyle:{
        backgroundColor:"#242526"
    }
});

const Navbar:FC<Props> = ({tabValue,setTabValue}:Props)=>{
    const [userList,setUserList] = useState(["Ashish","Vishal","Kiran","Tarun"]);
    const [searchState,setSearchState] = useState(false);
    const classes = useStyles();

    const tabChangeHandler = (event:any,newValue:number)=>{
        setTabValue(newValue);
    }
    return(
        <Box
        className = {classes.navbarStyle}
        sx={{
            width:"100%",
            height:"60px",
            border:1,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"flex-end"
        }}
        >
            <Stack spacing = {4} direction = "row">
                {/* --logo goes here --*/}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 172 172" style={{fill: '#000000'}}><defs><linearGradient x1="35.80825" y1="35.80825" x2="145.53708" y2="145.53708" gradientUnits="userSpaceOnUse" id="color-1_uLWV5A9vXIPu_gr1"><stop offset={0} stopColor="#2aa4f4" /><stop offset={1} stopColor="#007ad9" /></linearGradient></defs><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667z" fill="url(#color-1_uLWV5A9vXIPu_gr1)" /><path d="M95.70008,104.99525h18.54733l2.91325,-18.84117h-21.46058v-10.2985c0,-7.826 2.5585,-14.76692 9.87925,-14.76692h11.76408v-16.44033c-2.06758,-0.2795 -6.43925,-0.88867 -14.69883,-0.88867c-17.25017,0 -27.36233,9.10883 -27.36233,29.8635v12.5345h-17.73392v18.84117h17.73033v51.78633c3.51167,0.52317 7.06992,0.8815 10.72133,0.8815c3.30025,0 6.52167,-0.301 9.70008,-0.731z" fill="#ffffff" /></g></g></svg>
                {/* Search button goes here --*/}
                {searchState?
                    <Autocomplete
                    options={userList}
                    id = "search-bar"
                    sx={{
                        width:"200px",
                        display:{xs:"none",sm:"block"}
                    }}
                    renderInput = {(params)=><TextField {...params} label = "Search"/>}
                    />:
                    <Fab className = {classes.fabstyle} size = "small" onClick = {()=>setSearchState(true)}>
                        <SearchIcon/>
                    </Fab>
                }
            </Stack>
            {/* tabs goes here */}
            <Box
            sx = {{
                borderBottom:1,
                borderColor:"divider",
                display:{xs:"none",sm:"block"}
            }}
            >
                <Tabs value = {tabValue} onChange = {tabChangeHandler} aria-label = "tab">
                        <Tab icon= {<HomeIcon color = {(tabValue==0)?"primary":"secondary"}/>} aria-label = "home"/>
                        <Tab icon = {<GroupIcon color = {(tabValue==1)?"primary":"secondary"}/>} aria-label = "friends" />
                        <Tab icon = {<OndemandVideoIcon color = {(tabValue==2)?"primary":"secondary"}/>} aria-label = "watch" />
                        <Tab icon = {<AppsIcon color = {(tabValue==3)?"primary":"secondary"} />} aria-label = "apps icon"/>
                        <Tab icon = {<MenuIcon color = {(tabValue==4)?"primary":"secondary"} />} aria-label ="hamburger"/>
                </Tabs>
            </Box>
            {/* Floating action button */}
            <Stack direction = "row" spacing = {2} mb={1}>
                <IconButton
                sx = {{
                    display:{xs:"block",sm:"none",md:"none",lg:"none"}
                }}
                >
                    <MenuIcon color = "secondary"/>
                </IconButton>
                <Fab className = {classes.fabstyle} size = "small" aria-label = "add">
                    <AddIcon/>
                </Fab>
                <Fab className = {classes.fabstyle} size = "small" aria-label="notification">
                    <NotificationsActiveIcon/>
                </Fab>
                <Box>
                    <Fab onClick = {()=>console.log("hello world")} className = {classes.fabstyle} size = "small" aria-label = "down">
                        <ArrowDropDownIcon/>
                    </Fab>
                </Box>
            </Stack>
        </Box>
    )
}

export default Navbar;
