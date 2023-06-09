import { TbMessageCircle2 } from "react-icons/tb";
import classes from "./assessment-icon.module.scss";

const AssessmentIcon = ({assessment}) => (
    <div className={`${classes.assessmentIcon} ${classes[assessment.tag.toLowerCase()]}`}><TbMessageCircle2 /></div>
  );
  
  export default AssessmentIcon;