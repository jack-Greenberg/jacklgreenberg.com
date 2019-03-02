import * as d3 from 'd3';
import textures from 'textures';

var svg = d3.select('.js-texture-break')
    .append('svg')
    .attr('viewBox', '0 0 100 50')
    .style('display', 'block');

var t = textures.lines()
  .thicker()
  .lighter()
  .stroke('#dacaee');

svg.call(t);

svg.append('rect')
	.style('fill', t.url())
    .style('width', '100%')
    .style('height', '100%');
