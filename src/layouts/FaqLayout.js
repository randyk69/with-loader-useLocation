import { NavLink, Outlet, Link } from "react-router-dom"

export default function FaqLayout() {
  return (
    <div className="help-layout">
      <h2>FAQ Pages</h2>
      <Outlet />
    </div>
  )
}