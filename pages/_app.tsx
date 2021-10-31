import "../styles/globals.css";
import {createContext,useContext,useState} from "react";
import type { AppProps } from 'next/app'

// post interface
interface postInterface{
    postState:boolean;
    setPostState:(arg:boolean)=>void;
}

interface createRoomInterface{
    roomState:boolean;
    setRoomState:(arg:boolean)=>void;
}


// post context
const postContext = createContext({} as postInterface);
const createRoomContext = createContext({} as createRoomInterface)

function MyApp({ Component, pageProps }: AppProps) {
    const [postState,setPostState] = useState<boolean>(false);
    const [roomState,setRoomState] = useState<boolean>(false);



    return(
        <postContext.Provider value = {{postState,setPostState}}>
            <createRoomContext.Provider value = {{roomState,setRoomState}}>
                <Component {...pageProps} />
            </createRoomContext.Provider>
        </postContext.Provider>
    )
}

// use post context hook
export const usePostContext = ()=>{
    const {postState,setPostState} = useContext(postContext);
    return {postState,setPostState};
}
// usecreateRoomContext hook
export const useCreateRoomContext = ()=>{
    const {roomState,setRoomState} = useContext(createRoomContext);
    return {roomState,setRoomState};
}


export default MyApp
