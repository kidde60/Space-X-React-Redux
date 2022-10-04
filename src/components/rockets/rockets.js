import propTypes from 'prop-types';

function Rockets({id, rocket_name, description, image, reserve, cancel, isReserved}) {
  return (
    <div className="card">
      <img src={image} alt={rocket_name} />
      <div className="rocket_information">
        <h2>{rocket_name}</h2>
        <p className="reserve-text">{isReserved ? 'Reserved' : 'Not Reserved'}</p>
        <p className="rocket-description">{description}</p>
        <div className="buttons">
          {
            isReserved ? (
              <button type="button" className="cancel-btn" onClick={() => cancel(id)}>Cancel Reserve</button>
            ) : (
              <button type="button" className="reserve-btn" onClick={() => reserve(id)}>Reserve Racket</button>
            )
          }
        </div>

      </div>
      
    </div>
  )
}

Rockets.prototype = {
  id: propTypes.number.isRequired,
  rocket_name: propTypes.string.isRequired,
  describe: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserve: propTypes.func.isRequired,
  cancel: propTypes.func.isRequired,
  isRequired: propTypes.bool.isRequired
}

export default Rockets;