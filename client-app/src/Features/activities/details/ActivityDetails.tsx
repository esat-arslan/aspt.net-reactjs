import React, { useEffect } from "react";
import {
  Image,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Button,
} from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import LoadingComponent from "../../../App/Layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);
  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Card fluid>
      <Image src={`/Assets/Images/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </CardContent>
    </Card>
  );
});
