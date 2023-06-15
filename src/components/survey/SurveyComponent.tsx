import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { transformSurveyData } from "../../utils/transformSurveyData";

const SurveyComponent = () => {
  const survey = new Model(json);
  survey.startSurveyText = "Start Quiz";
  survey.showQuestionNumbers = "off";
  survey.showCompletedPage = false;

  survey.onComplete.add((sender, options) => {
    const { totals, transformedDataForTable } = transformSurveyData(
      sender.data
    );
    localStorage.setItem("surveyData", JSON.stringify(transformedDataForTable));
    localStorage.setItem("surveyTotals", JSON.stringify(totals));
    window.location.href = "/report";
  });

  return <Survey model={survey} />;
};

export default SurveyComponent;
