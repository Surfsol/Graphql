import React from "react";

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => {
  return (
    <>
      <h3>{mission_name}</h3>
      <h3>{flight_number}</h3>
      <h3>{launch_date_local}</h3>
      <h3>{launch_success}</h3>
    </>
  );
};
export default LaunchItem;
