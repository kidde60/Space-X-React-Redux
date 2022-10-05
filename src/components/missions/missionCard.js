// import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JoinMission, LeaveMission } from '../../redux/Mission/mission'
import Missions from './missions'
import { fetchMission } from "../../redux/Mission/mission";

const MissionCard = () => {
    const missionList = useSelector((state) => state.missions.missions)
    const dispatch = useDispatch();
    const join = (id) => {
        dispatch(JoinMission(id))
    }
    const leave = (id) => {
        dispatch(LeaveMission(id))
    }

    useEffect(() => {
        dispatch(fetchMission());
    }, [dispatch]);

    return (
        <div>
            {
                missionList.map((mission) => {
                    const { id, mission_name, description, status } = mission;
                    return (
                        <Missions
                            key={id}
                            id={id}
                            rocket_name={mission_name}
                            description={description}
                            status={status}
                        />
                    )
                })
            }
        </div>
    )
};

export default MissionCard;


