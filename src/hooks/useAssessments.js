import React, { useState, useEffect } from 'react';
import ODAS from '../api/odas';

export const useAssessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [userAssessments, setUserAssessments] = useState([]);

  // TODO - fetch the data from API
  useEffect(() => {
    ODAS.get({ public: true }).then((data) => {
      const assessmentData = data.assessments
      setAssessments(assessmentData);
    });
  }, []);

  return {
    assessments: assessments,
    userAssessments: userAssessments
  };
}

export default useAssessments;