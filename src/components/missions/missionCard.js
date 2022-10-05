// import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";

const MissionCard = () => {
    const Missions = useSelector((state) => state.missions)
    // const { name, description, status } = missions
    return (
        <>
            <div>
                {/* <p>{name}</p> */}
            </div>
            {/* <p>{description}</p> */}
            <div>
                {/* {status */}
                {/* ? (
                        <p
                            style={{ minWidth: '120px' }}
                        >
                            ACTIVE MEMBER
                        </p>
                    ) : (
                        <p
                            style={{ minWidth: '120px' }}
                        >
                            NOT A MEMBER
                        </p>
                    )} */}
            </div>
            <div>
                {/* {!status */}
                {/* ? (
                <button
                    // onClick={() => dispatch(joiningMissionAction(mission.id))}
                    type="button"
                    style={{ minWidth: '100px' }}
                >
                    Join Mission
                </button>
                ) : (
                <button
                    // onClick={() => dispatch(leavingMissionAction(mission.id))}
                    type="button"
                    style={{ minWidth: '100px' }}
                >
                    Leave Mission
                </button>
                    )} */}
            </div>
        </>
    )
};

export default MissionCard;

// MissionCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     status: PropTypes.bool.isRequired,
// };

