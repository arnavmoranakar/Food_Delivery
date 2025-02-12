import {useState , useEffect} from 'react';

const useOnlineStatus = () => {

    const [onlineStatus , setOnlineStatus] = useState(true);
    // Check if online
    useEffect(() => {

        window.addEventListener( "offline",() => {
            setOnlineStatus(false);
        });

        window.addEventListener("online",() => {
            setOnlineStatus(true);
        })

    },[]);
    // boolean values
    return onlineStatus;
}

export default useOnlineStatus;