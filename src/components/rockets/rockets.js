/* eslint-disable */
import propTypes from 'prop-types';
import './style.css';

function Rockets({
  id,
  rocket_name,
  description,
  image,
  reserve,
  cancel,
  isReserved,
}) {
  return (
    <div className="card">
      <img className="hub-image" src={image} alt={rocket_name} />
      <div className="rocket_information">
        <h2>{rocket_name}</h2>
        <p className="rocket-description">
          <span className="reserve-text">{isReserved ? "Reserved" : " "} </span>
          {description}
        </p>
        {isReserved && (
          <button
            className="cancel-btn"
            type="button"
            onClick={() => cancel(id)}
          >
            {" "}
            Cancel Reservation
          </button>
        )}{" "}
        {!isReserved && (
          <button
            className="reserve-btn"
            type="button"
            onClick={() => reserve(id)}
          >
            {" "}
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rockets.prototype = {
  id: propTypes.number.isRequired,
  rocket_name: propTypes.string.isRequired,
  describe: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserve: propTypes.func.isRequired,
  cancel: propTypes.func.isRequired,
  isRequired: propTypes.bool.isRequired,
};

export default Rockets;
