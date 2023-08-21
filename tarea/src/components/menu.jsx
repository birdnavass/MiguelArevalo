import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Menu = () =>{
    return(
        <div>

            <div className="navbar">
            <ul className="menu">
                        <li><Link  to="/uno">EJERCICIO #1</Link></li>
                        <li><Link  to="/dos">EJERCICIO #2</Link></li>
                        <li><Link  to="/tres">EJERCICIO #3</Link></li>
                    </ul>
            </div>

        </div>
    )
};
export default Menu;