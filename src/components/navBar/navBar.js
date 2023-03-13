import { Link } from 'react-router-dom';

function NavBar() {
  return (
<nav>
    <div className="nav-wrapper blue">
      <a className="brand-logo right">Logo</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/">Todo List</Link></li>
        <li><Link to="/addNew">add New</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;