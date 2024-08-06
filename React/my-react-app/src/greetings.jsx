function UserGreetings(props){
    if (props.isloggedin){
        return(
            <h1>Hello {props.name}</h1>
        )
    }
    else{
        return(
            <h1>{props.name} :- Please Login</h1>
        )
    }
}

export default UserGreetings