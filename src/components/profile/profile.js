import { useSelector } from "react-redux";



const Profile = (props) => {

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true)
  return (
    <div className="profile">
      <div>
        <h2>my mission</h2>
        <ul>
          <li>My missions</li>
          <li>My missions</li>
          <li>My missions</li>
        </ul>
      </div>
      <div>
        <h2>My rockets</h2>
        <ul>
          {
            reservedRockets.map((rocket) => {
              return <li id={rocket.id}>{rocket.rocket_name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Profile;