import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="w-100 mt-5" >
            <div className="row row-cols-1  md:row-cols-3 gap-5 p-5 w-100 ">
            
            <Card border="primary" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold">Difference between authorization and authentication?</Card.Header>
              <Card.Body>
                <Card.Title> </Card.Title>
                <Card.Text>
                Authentication, in the form of a key.It works Through passwords, biometrics, one-time pins, or apps.Is it visible to the user.
                Authorization, in the form of permissions.It works Through settings maintained by security teams.Is it no visible to the user.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          
            <Card border="secondary" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold">Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                Firebase Authentication service helps to us login process. Firebase Authentication’s login process is easier.authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          
            <Card border="success" style={{ width: '25rem' }}>
              <Card.Header className="fw-bold"> What other services does firebase provide other than authentication</Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                There are many services which Firebase provides, Most useful of them are:
                  Cloud Functions, Authentication,  Hosting, Cloud Storage,
                Google Analytics,Predictions, Cloud Messaging.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
                  </div>
        </div>
    );
};

export default Blog;