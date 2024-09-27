import { Component } from "react";

class VisitorClass extends Component {
    constructor(props) {
        super(props);
        console.log("VisitorClass constructor");
    }

    componentDidMount() {
        console.log("VisitorClass componentDidMount");
    }

    render(){
        console.log("VisitorClass render");
        return (
            <div>
                <h1>Visitor Class</h1>
            </div>
        )
    }
}

export default VisitorClass;