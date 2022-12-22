/* eslint-disable import/prefer-default-export */
import * as d3 from 'd3';

export function drawChart(element, data) {
  const colors = ['#369e16', '#011d3b'];
  const boxSize = 500;

  d3.select(element).select('svg').remove();

  const svg = d3
    .select(element)
    .append('svg')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('height', '256px')
    .attr('width', '256px')
    .attr('viewBox', `0 0 ${boxSize} ${boxSize}`)
    .append('g')
    .attr('transform', `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().innerRadius(0).outerRadius(250);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append('path')
    .attr('d', arcGenerator)
    .style('fill', (d, i) => colors[i % data.length]);
}
