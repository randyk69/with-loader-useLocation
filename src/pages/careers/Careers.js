import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  console.log('# careers ', careers);


  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.name}</p>
          <p>{career.email}</p>
          <p>{career.phone}</p>
          <p>Based in {career.address.city}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    throw Error('Could not fetch the list of careers')
  }
  return res.json()
}