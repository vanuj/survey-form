import React from 'react';
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from './json';

const SurveyComponent = () => {
    const survey = new Model(json);
    survey.startSurveyText = "Start Quiz";
    survey.showQuestionNumbers = "off";
    survey.showCompletedPage = false;

    survey.onComplete.add((sender, options) => {
        console.log(sender.data );
        window.location.href="/report"
    });

    return <Survey model={survey} />
}

export default SurveyComponent;