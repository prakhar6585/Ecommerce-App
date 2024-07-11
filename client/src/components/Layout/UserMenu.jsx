import React from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className=" text-center">
        <div className="list-group">
          <NavLink className="list-group text-decoration-none text-black">
            Dashboard
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/dashboard/user/profile"
          >
            Profile
          </NavLink>
          <NavLink className="list-group-item" to="/dashboard/user/orders">
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
