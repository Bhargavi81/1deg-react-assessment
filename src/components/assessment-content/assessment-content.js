import classes from "./assessment-content.module.scss";

const AssessmentContent = ({ assessment }) => (
    <div className={classes.assessmentContentText}>
        <h3>{assessment.title}</h3>
        <div>{assessment.author}</div>
    </div>
);

export default AssessmentContent;