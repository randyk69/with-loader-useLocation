import { useLocation, Link } from "react-router-dom"
import './Style.css';

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  console.log('# crumbs ', crumbs);

  const isMobile = window.innerWidth <= 768;

  const classNames = isMobile ? "mobile-view breadcrumbs" : "breadcrumbs"

  return (
    <div className={classNames}>
      {crumbs}
    </div>
  )
}