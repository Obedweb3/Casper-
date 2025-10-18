import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/webhosting">Web Hosting Solutions</Link></li>
        <li><Link to="/youtube">Social Media Downloaders</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
