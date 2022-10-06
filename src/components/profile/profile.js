import { useSelector } from "react-redux"
const Profile = () => {
  const missionList = useSelector((state) => state.missions)
  const joinMission = missionList.filter((mission) => mission.reserved === true)

  return (
    <div className="profile">
      <div>
        <h2>my mission</h2>
        <ul>
          {
            joinMission.map((mission) => {
              return <li>{mission.mission_name}</li>
            })
          }
        </ul>
      </div>
      <div>
        <h2>My rockets</h2>
        <ul>
          <li>my rocket</li>
          <li>my rocket</li>
          <li>my rocket</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;