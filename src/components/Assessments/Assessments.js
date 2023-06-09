import React, { useContext, useState } from "react";
import { TbMessageCircle2 } from "react-icons/tb";
import classes from './Assessments.module.scss';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useAssessments from '../../hooks/useAssessments';
import Button from "../Button/Button";
import Alert from 'react-bootstrap/Alert';

const Assessments = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState('');

  const { assessments } = useAssessments();

  const displayAlert = (title) => {    
    setTitle(title);
    setShowAlert(true);
  }

  return (
    <>
      {showAlert &&
        <Alert variant="info" className={classes.customAlert} onClose={() => setShowAlert(false)} dismissible >
          <Alert.Heading className={classes.customAlertHeading}>
            { title }
          </Alert.Heading>
        </Alert>
      }
      <Container className={classes.assessmentContainer}>
        <h1>AVAILABLE</h1>
        {assessments && assessments.map((assessment) =>
          <Row key={assessment.id} className={classes.assessmentRow}>
            <Col sm={8} md={8}>
              <Row>
                <Col sm={1} className={`${classes.assessmentIcon} ${classes[assessment.tag.toLowerCase()]}`}><TbMessageCircle2 /></Col>
                <Col className={classes.assessmentContent}>
                  <h3>{assessment.title}</h3>
                  <div>{assessment.author}</div>
                </Col>
              </Row>
            </Col>
            <Col sm={4} md={4}>
              <Button text="Get Started " icon="fa fa-angle-right" styles={{ type: 'primary', rounded: true, width: 'full', selected: true }} onButtonClick={() => displayAlert(assessment.title)} />
            </Col>
          </Row>
        )}

      </Container>
    </>
  )
};

export default Assessments;