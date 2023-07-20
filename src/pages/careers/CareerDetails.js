import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  console.log('# id ', id);
  console.log('# career ', career);

  return (
    <div className="career-details">
      <h2>Staff Details for {career.name}</h2>
      <p>Phone: {career.phone}</p>
      <p>Website: {career.website}</p>
      <div className="details">
        <p>Address: {career.address.city} / {career.address.street} / {career.address.suite} / {career.address.zipcode}</p>
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}