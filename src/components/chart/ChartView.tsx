import React, { useRef, useEffect, FC } from "react";
import * as d3 from "d3";
import { arrayRange, magicQuadrantTickFormat } from "../../utils/chartUtils";

const ChartView:FC<{resultCoordinate: any}> = ({resultCoordinate}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartContainer = d3.select(chartRef.current);
    if (!chartContainer.select("svg").empty()) {
      // If chart already exists, remove it
      chartContainer.select("svg").remove();
    }

    // Chart dimensions
    const width = 600;
    const height = 600;

    // Create SVG container using D3
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Define scales for x and y axes
    const axesDomain = d3.scaleLinear().domain([-12, 12]);

    const xScale = axesDomain.range([0, width]);

    const yScale = axesDomain.range([height, 0]);

    //create ticks array for axes
    const ticks = arrayRange(-12, 12, 2);

    //adjust ticks

    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(ticks) // Specify the tick values
      .tickFormat(magicQuadrantTickFormat);

    const yAxis = d3
      .axisLeft(yScale)
      .tickValues(ticks)
      .tickFormat(magicQuadrantTickFormat);

    // Add x and y axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height / 2})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${width / 2}, 0)`)
      .call(yAxis);

    // Add data points
    svg
      .selectAll(".data-point")
      .data(resultCoordinate)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", (d: any) => xScale(d.x))
      .attr("cy", (d: any) => yScale(d.y))
      .attr("r", 5)
      .style("fill", "steelblue");
  }, [resultCoordinate]);

  return <div ref={chartRef} />;
};

export default ChartView;
