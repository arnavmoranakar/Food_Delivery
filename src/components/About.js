import User from "./User";
import UserClass from "./UserClass";
import User from "./User";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div className="about">
                <h1> About</h1>
                <h3> This is Namaste React Web Series </h3>
                {/* <User name = {"Arnav (function)"} location = {"Dhule (function)"} contact = {"+91 7972981095"}  /> */}
    
                <UserClass name ={"first" } location = {"Dhule "} contact = {"+91 7972981095"}  />
                <User  />
               
            </div>
        );
    }

}
export default About;

// const About = () => {
//     return (
//         <div className="about">
//             <h1> About</h1>
//             <h3> This is Namaste React Web Series </h3>
//             {/* <User name = {"Arnav (function)"} location = {"Dhule (function)"} contact = {"+91 7972981095"}  /> */}

//             <UserClass name ={"Arnav (class)" } location = {"Dhule (class)"} contact = {"+91 7972981095"}  />
//         </div>
//     );
// }


/*
 - parent constructor
 - parent render

    - first child constructor
    - first child render
        
    - second child constructor
    - second child render

    - first child componentDidMount
    - second child componentDidMount

 - Parent componentDidMount

*/
