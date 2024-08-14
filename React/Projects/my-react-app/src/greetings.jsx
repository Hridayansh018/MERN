function UserGreetings(props){
    // if (props.isloggedin){
    //     return(
    //         <h1>Hello {props.name}</h1>
    //     )
    // }
    // else{
    //     return(
    //         <h1>{props.name} :- Please Login</h1>
    //     )
    // }

    const welcome = <h1 className="welcome">Hello:- {props.name}</h1>
    
    const login = <h1 className="login">Please login:- {props.name}</h1>

    return(
        props.isloggedin ? welcome : login
    )
}

export default UserGreetings