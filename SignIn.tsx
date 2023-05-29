import "./SignIn.css";
const SignIn = class {
    register() {
        let data= {
            name: document.querySelector("input.name"), 
            email: document.querySelector("input.email"),
            password: document.querySelector("input.password")
        };
    }
    render() {
        return (
        <div className='SignIn'>
            <label htmlFor="name">Name</label>
            <input type="text" className="name" />
            <label htmlFor="email"></label>
            <input type="email" className="email" />
            <label htmlFor="password"></label>
            <input type="password" className="password" />
            <button className="signInBtn" onClick={register}>SignIn</button>
        </div>
        );
    }
}
export default SignIn;
