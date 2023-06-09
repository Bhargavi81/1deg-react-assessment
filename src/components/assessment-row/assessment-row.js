import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AssessmentIcon from '../assessment-icon/assessment-icon';
import AssessmentContent from '../assessment-content/assessment-content';
import classes from "./assessment-row.module.scss";
import Button from "../Button/Button";

const AssessmentRow = ({ assessment, displayAlert }) => (
    <Row className={classes.assessmentRow}>
        <Col sm={12} md={8}>
            <AssessmentIcon assessment={assessment} />
            <AssessmentContent assessment={assessment} />
        </Col>
        <Col sm={12} md={4} className={classes.assessmentColButton}>
            <Button text="Get Started " icon="fa fa-angle-right" styles={{ type: 'primary', rounded: true, width: 'auto', selected: true }} onButtonClick={() => displayAlert(assessment.title)} />
        </Col>
    </Row>
);

export default AssessmentRow;