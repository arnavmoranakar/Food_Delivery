import {useState,useEffect} from 'react';
const User = (props)=>{
    const [count] = useState(0);
    const {name,location,contact} = props;
    useEffect (()=>{
        const timmer = setInterval(()=>{
            console.log('Namaste react ');
        },1000);
        return ()=>{
            clearInterval(timmer);
        };
    },[]); 
    
    return(
        <div className="user-card">
        <h1>Count = {count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
        </div>
    )
}

export default User;