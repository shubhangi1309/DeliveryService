import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Namaste React using JSX</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//React Element small letter
const heading = (
    <h1 className="head">Namaste</h1>
)

//React functional component capital letter
const HeadingComponent = () => {
    return <h1 className="head">Namaste</h1>
}

//React functional component short hand way capital letter
const HeadingComponentShortWay = () => (
    <div>
    <Title/>
    <h1>Namaste</h1>
    </div>
)
const Title = () => (
    <h2>Hello</h2>
)

root.render(<HeadingComponentShortWay/>);
const elem = <span>React Element</span>
const Heading1 = () => (
    <h2>modi</h2>
    )
const title2 = (<h2>
    {elem}
    Namaste anothe React elem title2
    <Heading1/>
</h2>)







