import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    const checkOnlineStatus = () => {
        window.addEventListener("offline",() => {
            setOnlineStatus(false);
        })
        window.addEventListener("online",() => {
            setOnlineStatus(true);
        })
    }
    useEffect(checkOnlineStatus,[]);

    return onlineStatus;
}

export default useOnlineStatus;