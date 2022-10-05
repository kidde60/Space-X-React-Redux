import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Missions({ id, reserve, cancel, isReserved }) {
  const missionList = useSelector((state) => state.missions.missions);

  let render = missionList.map((item) => (
    <div className="mission">
      <h2>{item.mission_name}</h2>
      <p className="rocket-description">{item.description}</p>
      <div className="buttons">
        <p className="reserve-text">{isReserved ? 'Active Member' : 'Not A Member'}</p>
        {
          isReserved ? (
            <button type="button" className="cancel-btn" onClick={() => cancel(id)}>Leave Mission</button>
          ) : (
            <button type="button" className="reserve-btn" onClick={() => reserve(id)}>Join Mission</button>
          )
        }
      </div>

    </div>
  ));
  return (

    <div className="tableContainer">
      <table className="table">
        <tr className="tableRow">
          <th className="tableHeader flex1">Missions</th>
          <th className="tableHeader flex5">Description</th>
          <th className="tableHeader flex1">Status</th>
        </tr>
        {render}
      </table>

    </div>

  )

}

Missions.prototype = {
  id: propTypes.number.isRequired,
  mission_name: propTypes.string.isRequired,
  describe: propTypes.string.isRequired,
  reserve: propTypes.func.isRequired,
  cancel: propTypes.func.isRequired,
  isRequired: propTypes.bool.isRequired
}

export default Missions;