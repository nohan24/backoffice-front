import {NavLink} from "react-router-dom";
import './link.css';
export default function MyLink({to, link}){
    return(
        <NavLink to={to} className="custom-link">
            {link}
        </NavLink>
    )
}