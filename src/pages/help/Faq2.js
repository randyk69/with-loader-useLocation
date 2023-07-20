import { Link } from "react-router-dom"

export default function Faq2() {
  return (
    <div className="faq">
      <h3>FAQ Page 2</h3>
      <div className="question">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui.</p>
      </div>
      <Link to={"faq3"}>FAQ 3</Link>
    </div>
  )
}
