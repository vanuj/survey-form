import Table from "./Table";
import { getColumns } from "../../utils/tableUtils";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../../libs/Header";
import { ContentContainer } from "../../libs/ContentContainer";

const TableReport = () => {
  const surveyData = localStorage.getItem("surveyData");
  const surveyTotals = localStorage.getItem("surveyTotals")

  if (!surveyData || !surveyTotals) {
    return <div>No Data found!</div>;
  }

  const surveyDataJson = JSON.parse(surveyData);
  const surveyTotalJson = JSON.parse(surveyTotals);

  return (
    <div>
      <HeaderContainer className="table-report-header">
        Report Table
      </HeaderContainer>
      <ContentContainer>
        <Table columns={getColumns(surveyTotalJson)} data={surveyDataJson} />
      </ContentContainer>
      <div>
        <Link to="/chart">See your Result Chart</Link>
      </div>
    </div>
  );
};

export default TableReport;
