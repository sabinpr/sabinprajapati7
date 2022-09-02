import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <NavLink exact={true} activeClassName="active" to="/">
    </NavLink>
    <Outlet />
    </>
  )
}
