import React from "react";
import CardTrack from "../../Components/Card/CardTrack";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className='dashboard__container'>
        <CardTrack />
        <CardTrack />
        <CardTrack />
      </div>
    </>
  );
};

export default Dashboard;
