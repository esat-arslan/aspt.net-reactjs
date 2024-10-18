import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const [target, setTarget] = useState("");
  const { deleteActivity, activitiesByDate, loading } = activityStore;
  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activitiy) => (
          <Item key={activitiy.id}>
            <Item.Content>
              <Item.Header as="a">{activitiy.title}</Item.Header>
              <Item.Description>
                <Item.Meta>{activitiy.date}</Item.Meta>
                <div>{activitiy.description}</div>
                <div>{activitiy.city}</div>
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to={`/activities/${activitiy.id}`} floated="right" content="View" color="blue" />
                <Button
                  name={activitiy.id}
                  loading={loading && target == activitiy.id}
                  onClick={(e) => handleActivityDelete(e, activitiy.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activitiy.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});
