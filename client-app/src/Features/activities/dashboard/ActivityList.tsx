import React, { Fragment, SyntheticEvent, useState } from "react";
import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;
  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color='teal'>
            {group}
          </Header>

              {activities && activities.map(activity => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}

        </Fragment>
      ))}
    </>
  );
});
