import React, { Fragment } from "react";
//used to make queries
import gql from "graphql-tag";
//query component
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const Launches = () => {
  //create query
  //use same query as in graphql
  const LAUNCHES_QUERY = gql`
    query LauchesQuery {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `;
  return (
    <>
      <Fragment>
        Launches
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);

            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    </>
  );
};
export default Launches;
