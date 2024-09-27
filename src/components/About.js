import User from "./User";
import UserClass from "./UserClass";
import { Component } from 'react';
import VisitorClass from "./VisitorClass";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent About's Constructor");
    }

    componentDidMount() {
        // API calls made here
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>This is learning React in depth</h1>
                <h1><UserContext.Consumer>{(data) => <span>{"=="+data.loggedInUser}</span>}</UserContext.Consumer></h1>
                <User name={"User Shubhangi Modi (functional Component)"} profession={"React Developer"} />
                <UserClass name={"UserClass Shubhangi Modi (class Component)"} profession={"React Developer"} />
                <VisitorClass/>
                <UserClass name={"UserClass Martin garrix (class Component)"} profession={"React Developer"} />
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {

        console.log(this.props.name, "parent About componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.props.name, "parent About componentWillUnmount");
    }
}

export default About;