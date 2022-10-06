import './style.css';

function Missions(props) {
  const mission = props;
  const {
    name, desc, id, join, isReserved,
  } = mission;
  return (
    <li className="listItems">
      <h2 className="heading">{name}</h2>
      <p className="paragraph">{desc}</p>
      <div>
        <a rel="noreferrer" href="##">
          {
            isReserved ? 'Active Member' : 'Not A Member'
          }
        </a>
      </div>
      <button type="button" id={id} onClick={join} >
        {
          isReserved ? 'Leave Mission' : 'Join Mission'
        }
      </button>
    </li>
  );
}

export default Missions;
