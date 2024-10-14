import React from "react";
import { Activity } from "../../../App/Modules/Activity";
import { Button, Item, Label, Segment } from "semantic-ui-react";

interface Props{
    activities: Activity[];
    selectActivity: (id:string)=>void;
    deleteActivity:(id:string)=>void;

}
export default function ActivityList({activities, selectActivity, deleteActivity}:Props){
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activitiy =>(
                    <Item key={activitiy.id}>
                        <Item.Content>
                            <Item.Header as='a'>
                                {activitiy.title}
                            </Item.Header>
                            <Item.Description>
                            <Item.Meta>{activitiy.date}</Item.Meta>
                            <div>{activitiy.description}</div>
                            <div>{activitiy.city}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=>selectActivity(activitiy.id)} floated="right" content='View' color="blue"/>
                                <Button onClick={()=>deleteActivity(activitiy.id)} floated="right" content='Delete' color="red"/>
                                <Label basic content={activitiy.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}