import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-1 h-20 boxShadow sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold ">
            {" "}
            <span className="text-red-500">Av</span>es
          </div>
          <div>
            <ul className="flex xs:gap-4 sm:gap-10">
              <li className="xs:text-lg md:text-2xl ">
                <NavLink  
                className={({ isActive }) =>
                  isActive ? "text-red-500 font-bold" : "text-black"
                }
                 to="/">
                  Home
                </NavLink>
              </li>
              <li className="txs:text-lg md:text-2xl">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-black"
                  }
                  to="/addpost"
                >
                  Add Post
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
