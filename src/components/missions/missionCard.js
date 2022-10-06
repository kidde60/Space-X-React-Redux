import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Missions from './missions'
import { joinMission } from '../../redux/Mission/mission'
import './style.css';

const MissionCard = () => {
    const missionList = useSelector((state) => state.missions)
    const dispatch = useDispatch();
    const join = (e) => {
        e.preventDefault()
        dispatch(joinMission(e.target.id));
    }

    return (
        <section >
            <ul className="list">
                <li className="listItem">
                    <h2 className="heading">Mission</h2>
                    <h2 className="paragraph">Description</h2>
                    <h2>Status</h2>
                </li>
                {
                    missionList.map((mission) => {
                        const {
                            mission_id, mission_name, description, reserved,
                        } = mission;
                        return (
                            <Missions
                                key={mission_id}
                                id={mission_id}
                                name={mission_name}
                                desc={description}
                                join={join}
                                isReserved={reserved}
                            />
                        );
                    })
                }
            </ul>
        </section>
    );
};

export default MissionCard;
