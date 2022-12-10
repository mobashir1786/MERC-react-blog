import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    // const [state, setState] = React.useState(true);
    return (
        <div className='navbar'>
            <div className="navLeft">
                <ul className="navLeft">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bollywood">Bollywood</Link></li>
                    <li><Link to="/hollywood">Hollywood</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/fitness">Fitness</Link></li>
                    <li><Link to="/food">Food</Link></li>
                </ul>
            </div>
            <div className="navRight">
                <ul className="navRight">
                    {/* state ? <li><Link to="/loginsignup" onClick={()=>{setState(false)}}>login/Signup</Link></li> : 
                        <li><Link to="/logout" >logout</Link></li> */}
                    <li><Link to={document.cookie ? "/logout" : "/loginsignup"}  >{document.cookie ? "Logout" : "Login/Signup"}</Link></li>
                    <li><Link to={document.cookie ? "/createCard" : "/loginsignup"}  >{document.cookie ? "Create Card" : "Create Card"}</Link></li>
                    {/* <li><Link to="/logout" >logout</Link></li>
                    <li><Link to={state ? "/loginsignup" : "/createCard"}  >Create Card</Link></li> */}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
