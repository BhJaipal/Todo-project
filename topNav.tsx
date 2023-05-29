import "./TopNav.css";

function TopNav() {
    return (
        <div className="TopNav">
            <b>UI</b>
            <div className="navbar">
                <a className="navbar-nav" href="./home">Home</a>
                <a className="navbar-nav" href="./about">About</a>
                <a className="navbar-nav" href="./SignIn">Sign In</a>
            </div>
        </div>
    );
}

export default TopNav;
