var minYear = birthData[0].year;
var maxYear = birthData[birthData.length -1].year;

var width = 600;
var height = 600;
var numBars = 12;
var barPadding = 10;
var barWidth = (width / numBars) - barPadding;

d3.select('input')
  .property('min', minYear)
  .property('max', maxYear)
  .property('value', minYear)

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('rect')
    .data(birthData.filter((d) => d.year === minYear))
    .enter()
    .append('rect')
      .attr('height', (d, i) => d.births / 2.5e6 * height)
      .attr('width', barWidth)
      .attr('y', (d) => 600 - d.births / 2.5e6 * height)
      .attr('x', (d, i) => (barPadding + barWidth) * i)
      .attr('fill', 'purple');

d3.select('input')
  .on('input', () => {
    var year = +d3.event.target.value;

    d3.selectAll('rect')
      .data(birthData.filter((d) => d.year === year))
      .attr('height', (d, i) => d.births / 2.5e6 * height)
      .attr('y', (d) => 600 - d.births / 2.5e6 * height)
  })



