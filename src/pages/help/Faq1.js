import { Link } from "react-router-dom"

export default function Faq1() {
  return (
    <div className="faq">
      <h3>FAQ Page 1</h3>
      <div className="question">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui.</p>
      </div>
      <Link to={"faq2"}>FAQ 2</Link>
    </div>
  )
}
