
import { HeaderContainer } from "../../libs/Header";
import { ContentContainer } from "../../libs/ContentContainer";
import ChartView from "./ChartView";
import { convertResultToCoordinate } from "../../utils/chartUtils";

const MagicQuadrantChart = () => {
  const surveyTotals = localStorage.getItem("surveyTotals")

  if (!surveyTotals) {
    return <div>No Data found!</div>;
  }

  const surveyTotalJson = JSON.parse(surveyTotals);

  const resultCoordinate = convertResultToCoordinate(surveyTotalJson);

  
  return (
    <div>
      <HeaderContainer className="chart-report-header">
        Report Table
      </HeaderContainer>
      <ContentContainer>
        <ChartView resultCoordinate={[resultCoordinate]} />
      </ContentContainer>
    </div>
  );
};

export default MagicQuadrantChart;
