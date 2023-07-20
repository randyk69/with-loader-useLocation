import { NavLink, Outlet, Link } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <Link to={"faq"}>FAQ</Link>&nbsp;&nbsp;
      <Link to={"contact"}>Contact Us</Link><br /><br />
      <Outlet />
    </div>
  )
}