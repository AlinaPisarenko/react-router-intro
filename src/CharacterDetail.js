import { useLocation, useParams } from "react-router-dom"


export default function UserDetail() {

  const params = useParams()
  console.log(params)

  const location = useLocation()
  const state = location.state
  console.log(state)

  return (
    <div>
      <h4>{state.name}</h4>
      <img
        height="500px"
        src={state.image}
      ></img>
      <p>{state.house}</p>
    </div>
  )
}
