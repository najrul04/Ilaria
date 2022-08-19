import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>

        <i className="topIcon fa-brands fa-twitter-square"></i>

        <i className="topIcon fa-brands fa-pinterest-square"></i>

        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'><Link className='link' to="/">Home</Link></li>
          <li className='topListItem'><Link className='link' to="/">About</Link></li>
          <li className='topListItem'><Link className='link' to="/">Contact</Link></li>
          <li className='topListItem'><Link className='link' to="/write">Write</Link></li>

          <li className='topListItem'>
            {user && "LogOut"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            
            <img className='topImage' src="https://wallpapercave.com/dwp1x/wp9731329.jpg" alt="" />

          ) : (

              <ul className='topList'>
                <li className='topListItem'>
            <Link className='link' to="/login">Login</Link>
            </li>
            
            <li>
            <Link className='link' to="/register">Register</Link>
            </li>
              </ul>
          )
              
        }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
