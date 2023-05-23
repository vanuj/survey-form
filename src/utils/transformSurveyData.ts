interface SurveyResultOptionData {
  v: Array<number>;
  isRev: boolean;
}

export const transformSurveyData = (
  data: Record<string, SurveyResultOptionData>
) => {
  const x = Object.values(data).map((surveyOption, index) => {
    const { v, isRev } = surveyOption;
    return {
      id: index + 1,
      value: v,
      isReverse: isRev,
    };
  });

  const transformedDataForTable = [];
  let totals = { open: 0, guarded: 0, tell: 0, ask: 0 };

  for (var i = 0; i < x.length; i += 2) {
    transformedDataForTable.push({
      colGroup1: x[i],
      colGroup2: x[i + 1],
    });

    if (x[i].isReverse) {
      totals.open += x[i].value[1];
      totals.guarded += x[i].value[0];
    }else{
      totals.open += x[i].value[0];
      totals.guarded += x[i].value[1];
  
    }
    
    if (x[i+1].isReverse) {
      totals.tell += x[i+1].value[1];
      totals.ask += x[i+1].value[0];
    }else{
      totals.tell += x[i+1].value[0];
      totals.ask += x[i+1].value[1];
    }
    
  }

  return {transformedDataForTable, totals};
};
