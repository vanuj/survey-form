import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const MagicQuadrantChart = () => {
    const data = [
        { x: -3, y: 7 },
        { x: 1, y: -5 },
        { x: 6, y: 2 },
        { x: -4, y: -3 },
        // Add more data points as needed
      ];
  const chartRef = useRef(null);

  useEffect(() => {
    const chartContainer = d3.select(chartRef.current);
    if (!chartContainer.select('svg').empty()) {
      // If chart already exists, remove it
      chartContainer.select('svg').remove();
    }
    
    // Chart dimensions
    const width = 600;
    const height = 400;

    // Create SVG container using D3
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Define scales for x and y axes
    const xScale = d3.scaleLinear()
      .domain([-10, 10])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([-10, 10])
      .range([height, 0]);

    // Add x and y axes
    svg.append('g')
      .attr('transform', `translate(0, ${height / 2})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${width / 2}, 0)`)
      .call(d3.axisLeft(yScale));

    // Add data points
    svg.selectAll('.data-point')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', (d:any) => xScale(d.x))
      .attr('cy', (d:any) => yScale(d.y))
      .attr('r', 5)
      .style('fill', 'steelblue');
  }, [data]);

  return (
    <div ref={chartRef}></div>
  );
};

export default MagicQuadrantChart;
