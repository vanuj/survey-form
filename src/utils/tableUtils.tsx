export const getColumns = (totals: any) => [
  {
    Header: "Open",
    accessor: (row: any) => {
      if (row.colGroup1.isReverse) {
        return (
          <div>
            {row.colGroup1.id}B - {row.colGroup1.value[1]}
          </div>
        );
      }
      return (
        <div>
          {row.colGroup1.id}A - {row.colGroup1.value[0]}
        </div>
      );
    },
    Footer: () => {
      return <div>Total: {totals.open}</div>
    }
  },
  {
    Header: "Guarded",
    accessor: (row: any) => {
      if (row.colGroup1.isReverse) {
        return (
          <div>
            {row.colGroup1.id}A - {row.colGroup1.value[0]}
          </div>
        );
      }
      return (
        <div>
          {row.colGroup1.id}B - {row.colGroup1.value[1]}
        </div>
      );
    },
    Footer: () => {
      return <div>Total: {totals.guarded}</div>
    }
  },
  {
    Header: "Tell",
    accessor: (row: any) => {
      if (row.colGroup2.isReverse) {
        return (
          <div>
            {row.colGroup2.id}B - {row.colGroup2.value[1]}
          </div>
        );
      }
      return (
        <div>
          {row.colGroup2.id}A - {row.colGroup2.value[0]}
        </div>
      );
    },
    Footer: () => {
      return <div>Total: {totals.tell}</div>
    }
  },
  {
    Header: "Ask",
    accessor: (row: any) => {
      if (row.colGroup2.isReverse) {
        return (
          <div>
            {row.colGroup2.id}A - {row.colGroup2.value[0]}
          </div>
        );
      }
      return (
        <div>
          {row.colGroup2.id}B - {row.colGroup2.value[1]}
        </div>
      );
    },
    Footer: () => {
      return <div>Total: {totals.ask}</div>
    }
  },
];
