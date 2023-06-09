import React, { useContext, useState } from "react";
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import useAssessments from '../../hooks/useAssessments';
import AssessmentRow from '../assessment-row/assessment-row';
import classes from './Assessments.module.scss';

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
            {title}
          </Alert.Heading>
        </Alert>
      }
      <Container className={classes.assessmentContainer}>
        <h1>AVAILABLE</h1>
        {assessments && assessments.map((assessment) =>
          <AssessmentRow key={assessment.id} assessment={assessment} displayAlert={displayAlert}/>
        )}

      </Container>
    </>
  )
};

export default Assessments;