import { useSelector } from 'react-redux';
import './style.css';

const Profile = () => {
  const missionList = useSelector((state) => state.missions);
  const joinMission = missionList.filter(
    (mission) => mission.reserved === true
  );
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile">
      <div data-testId="joined-missions">
        <h2>my mission</h2>
        <ul>
          {joinMission.map((mission) => {
            return <li className='reserved-rockets'>{mission.mission_name}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>My rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => {
            return <li className='reserved-rockets' id={rocket.id}>{rocket.rocket_name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
