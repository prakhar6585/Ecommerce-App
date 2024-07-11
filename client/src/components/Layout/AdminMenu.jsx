import React from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className=" text-center">
        <div className="list-group">
          <NavLink className="list-group text-decoration-none text-black">
            Admin Panel
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/dashboard/admin/create-category"
          >
            Create Category
          </NavLink>
          <NavLink
            className="list-group-item"
            to="/dashboard/admin/create-product"
          >
            Create Product
          </NavLink>
          <NavLink className="list-group-item" to="/dashboard/admin/products">
            Products
          </NavLink>
          <NavLink className="list-group-item" to="/dashboard/admin/orders">
            Orders
          </NavLink>
          <NavLink className="list-group-item" to="/dashboard/admin/users">
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
