// import PropTypes from 'prop-types';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { JoinMission, LeaveMission } from '../../redux/Mission/mission'
import Missions from './missions'
// import { fetchMission } from "../../redux/Mission/mission";

const MissionCard = () => {
    const missionList = useSelector((state) => state.missions.missions)
    const dispatch = useDispatch();
    const reserve = (id) => {
        dispatch(JoinMission(id));
    }
    const cancel = (id) => {
        dispatch(LeaveMission(id));
    }

    return (
        <div>
            {
                missionList.map((mission) => {

                    const { id, mission_name, description, reserved } = mission;
                    return (
                        <Missions
                            key={id}
                            id={id}
                            mission_name={mission_name}
                            description={description}
                            reserve={reserve}
                            cancel={cancel}
                            isReserved={reserved}
                        />
                    )
                })
            }
        </div>
    )
};

export default MissionCard;
