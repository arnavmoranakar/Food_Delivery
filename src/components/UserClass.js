import React from 'react';

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        //console.log(props.name);

        this.state = {
            // count : 0,
            // count2 : 2,

            userInfo : {
                name : "Dummy Name",
                location : "Dummy Location",
                
            }
        };

        //console.log(this.props.name + "Children Constructor");
    }

    async componentDidMount(){
       // console.log(this.props.name + "Children Component Did Mount");

       // Api Call
       const data= await fetch("https://github.com/arnavmoranakar");
       const json = await data.json();

        this.setState({
            userInfo : json,
        })

       console.log(json);

    }

    componentDidUpdate(){
        console.log("component Did Update");
    }

    componentWillUnmounting(){
        console.log("Component Will Unmount");
    }
    render() {
        // const {name,location,contact} = this.props;
        // const {count,count2} = this.state;
        const {name , location, avatar_url} = this.state.userInfo;
        // console.log(this.props.name + "Children Render");
        //debugger;
        return (

            <div className="user-card">
            {/* <h2>Count : {count}</h2>
            <button onClick = {() =>{
                //Never Update state variable directly
                this.setState({
                    count : this.state.count+1,
                
                });
            }}
            >Count Increase </button>

            <button onClick = {() => {
                this.setState({
                    count: this.state.count -1,
                })
            }}>Count Decrease</button>

       */}
            
           
            <img src= {avatar_url} alt="avatar"/>
            <h2>Name : {name} </h2>
            <h3>Location : {location}</h3>
            {/* <h3>Contact : {contact}</h3> */}
        </div>
        );
    }
  
}

export default UserClass;

/****
 * ---Mounting----
 * 
 * constructor(dummy)
 * render(dummy)
 *      <html dummy>
 * componentDidMount(dummy)
 *      <api call>
 *      this.setState -> state varaible is updated
 * 
 * ----Update ----
 * 
 *        render(api data)
 *        <HTML> (new api data)
 * componentDidUpdate
 */