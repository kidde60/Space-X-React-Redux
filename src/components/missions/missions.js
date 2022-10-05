import React from 'react';
import { useSelector } from 'react-redux';
import MissionCard from './missionCard';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  const { name, description, status } = missions
  return (
    <MissionCard
      name={name}
      description={description}
      status={status}
    />


  );
};

export default Mission;