import React from "react";
import CardTrack from "../../Components/Card/CardTrack";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="main__title">
        <h1>Add new Tracks/Sessions</h1>
      </div>

      <div className='dashboard__container'>
        <CardTrack />
        <CardTrack />
        <CardTrack />
      </div>
    </>
  );
};

export default Dashboard;
