import "./style.css";
/* eslint-disable */
function Missions(props) {
  const mission = props;
  const { name, desc, id, join, isReserved } = mission;
  return (
    <li className="listItems">
      <h2 className="heading">{name}</h2>
      <p className="paragraph">{desc}</p>
      {isReserved && (
        <div>
          <button type="button" onClick={join}>
            {"Not A Member "}
            leave mission
          </button>
        </div>
      )}
      {!isReserved && (
        <div>
          <button
            type="button"
            onClick={join}
          >
            {"Active Member "}
            Join Mission
          </button>
        </div>
      )}
      <button type="button" id={id} onClick={join}>
        {isReserved ? "Leave Mission" : "Join Mission"}
      </button>
    </li>
  );
}

export default Missions;
