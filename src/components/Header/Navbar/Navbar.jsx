import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }>Home</NavLink>
          </li>
          <li>
            <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }>Donation</NavLink>
          </li>
          <li>
            <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }>Statistics</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
