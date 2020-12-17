import React from "react";

const NavLink = (props) => {
  return (
    <a
      className="text-sm my-2 lg:text-md lg:my-0
      font-semibold tracking-wide transition duration-200
      py-2 border-b-2 border-transparent hover:border-black dark:hover:border-gray-300"
      href="/"
    >
      {props.children}
    </a>
  );
};

export default NavLink;
