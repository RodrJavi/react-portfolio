import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/Resume">Resume</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  );
}
