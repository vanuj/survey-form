import Table from "./Table";
import { getColumns } from "../../utils/tableUtils";
import * as S from "./TableReport.style";
import { Link } from "react-router-dom";

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
      <S.HeaderContainer className="table-report-header">
        Report Table
      </S.HeaderContainer>
      <S.TableContainer>
        <Table columns={getColumns(surveyTotalJson)} data={surveyDataJson} />
      </S.TableContainer>
      <div>
        <Link to="/chart">See your Result Chart</Link>
      </div>
    </div>
  );
};

export default TableReport;
