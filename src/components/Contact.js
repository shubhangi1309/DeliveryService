import ImagePractice from "./ImagePractice";

const Contact = () => {
    return (<div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
        <h2>Hello, please contact us on below mentioned email or phone number</h2>
        <ImagePractice/>
    </div>)
}

export default Contact;