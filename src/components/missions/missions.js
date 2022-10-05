import propTypes from 'prop-types';

function Missions({ id, mission_name, description, status, isJoined, leave, join }) {
  return (
    <div className="card">

      <div className="mission">
        <h2>{mission_name}</h2>
        <p className="reserve-text">{isJoined ? 'Active Member' : 'Not A Member'}</p>
        <p className="rocket-description">{description}</p>
        <div className="buttons">
          {
            isJoined ? (
              <button type="button" className="cancel-btn" onClick={() => leave(id)}>Leave Mission</button>
            ) : (
              <button type="button" className="reserve-btn" onClick={() => join(id)}>Join Mission</button>
            )
          }
        </div>

      </div>

    </div>
  )
}

Missions.prototype = {
  id: propTypes.number.isRequired,
  mission_name: propTypes.string.isRequired,
  describe: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  join: propTypes.func.isRequired,
  leave: propTypes.func.isRequired,
  isJoined: propTypes.bool.isRequired
}

export default Missions;