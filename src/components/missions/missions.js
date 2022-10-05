import React, { useEffect } from 'react';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MissionCard from './missionCard';
import { getMissions } from '../../redux/Mission/mission'

const Mission = () => {
  const Missions = useSelector((state) => state.missions);
  const dispatch = useDispatch

  const fetchMisssions = createAsyncThunk(
    "missions/fetch/missions",
    async () => {
      const missions = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await missions.json();
      console.log(data)
      return data;
    },
  );
  fetchMisssions()

  // const missionUrl = 'https://api.spacexdata.com/v3/missions'
  // const fetchMission = async () => {
  //   const response = await axios.get(missionUrl).catch((error) => {
  //     console.log('error', error)
  //   })
  //   console.log(response.data)
  //   dispatch(getMissions(response.data))

  // }
  // useEffect(() => {
  //   fetchMission();
  // }, []);
  // console.log(Missions);
  // return (
  //   <MissionCard />

  // );
};

export default Mission;