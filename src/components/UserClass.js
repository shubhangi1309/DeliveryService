import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 1,
            month: "January"
        }
        console.log(this.props.name, " Constructor");
    }

    render() {
        const { name, profession } = this.props;
        const { day, month } = this.state;
        console.log(this.props.name, " render");
        // this.updateMonth();
        return (
            <div className="user-card">
                <h5>Date: {day + " " + month}</h5>
                <button onClick={() => {
                    //  NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        day: this.state.day + 1
                    })
                }}>Change Day</button>
                <h2>{name}</h2>
                <h3>{profession}</h3>
                <h4>Contact: 7726855665</h4>
            </div>
        )
    }

    async componentDidMount() {
        this.timer = setInterval(()=> {
            console.log("Shubhangi Modi is a React Developer, Javascript Developer");
        },1000);
        // const data = await fetch("www.siwggy.com");
        // const json = await data.json();
        this.setState({
            month: "FEBRUARY"
        })
        console.log(this.props.name, " componentDidMount");
    }

    // useEffect(callbackFn1, [month])
    // useEffect(callbackFn2, [day])
    componentDidUpdate(prevProps, prevState) {
        if (this.state.month !== prevState.month) {

        }
        if (this.state.day !== prevState.day) {

        }
        console.log(this.props.name, " componentDidUpdate ",this.state.day);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.props.name, " componentWillUnmount");
    }
}

export default UserClass;