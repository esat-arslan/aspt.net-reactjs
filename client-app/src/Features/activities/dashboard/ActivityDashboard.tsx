import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../App/Layout/LoadingComponent";

export default observer(function ActivitiyDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegister } = activityStore;

  useEffect(() => {
    if (activityRegister.size <= 0) loadActivities();
  }, [loadActivities, activityRegister.size]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
});
