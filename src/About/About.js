import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import MyName from "./MyName.jpg"

const About = () => {
    return (
       
       <div style={{marginTop:"20px",marginLeft:"50px"}}>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={MyName} />
        <Card.Body>
          <Card.Title>Name:Mafujul Haque Plabon</Card.Title>
          <Card.Text>
          At a time, I was lazy and didn't follow my daily routine before
          starting Jhanker Mahbub Complete Web Development Course. Now I am
          doing in addition to academic studies at the university his course and
          giving my best effort to be a junior web developer.I will not stop
          until I become the Web Development Hero.
          </Card.Text>
       
        </Card.Body>
      </Card>
       </div>
    );
};

export default About;