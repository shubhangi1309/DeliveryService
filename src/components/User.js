import { useEffect } from "react";

const User = ({name, profession}) => {
    // console.log("usestate----------",useState());
    useEffect(()=> {
        // const timer = setInterval(() => {
        //     console.log("SHUBHANGI MODI is a  REACT DEVELOPER")
        // },9000)
        
        return () => {
            console.log("UNMOUNT")
            // clearInterval(timer);
        }
    },[]);
   
    return (
        <div className="user-card">
            {console.log("User comp------")}
            <h2>{name}</h2>
            <h3>{profession}</h3>
            <h4>Contact: 7726855665</h4>
        </div>
    )
}

export default User;