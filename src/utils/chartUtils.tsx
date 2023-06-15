export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const magicQuadrantTickFormat = (d: d3.NumberValue) => {
  // Custom tick label formatting
  if (d === 0) return "0"; // Change the label for 0 to "0"
  if (Number(d) < 0) return (-d).toString(); // Label negative values as positive
  return d.toString();
};

export const convertResultToCoordinate = (resultJSON:any) => {
    /**
     * we use the following convention for plotting:
     * 1. Open is +ve x-axis
     * 2. Guarded is -ve x-axis
     * 3. Ask is +ve y-axis
     * 4. Tell is -ve y-axis
     */
    const xAxis = resultJSON.open - resultJSON.guarded;
    const yAxis = resultJSON.ask - resultJSON.tell;
    return {x: xAxis, y: yAxis};
}
