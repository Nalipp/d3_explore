d3.selectAll('.monthBtn')
  .on('click', function() {
    d3.event.preventDefault();
    var val = d3.select(d3.event.target);
    month = val.property('value');
    updateMonth(month);
  });

d3.select('.container')
    .selectAll('span')
  .data(countryTemp)
  .enter()
  .append('span')
    .classed('rating', true)
    .text((d) => d.name + '\n' + d.monthAvg['DEC'].avg)
    .style('left', (d, i) => (i + 1) * 25)
    .style('top', (d) => (d.monthAvg['DEC'].avg) * 5);

function updateMonth(month) {
  console.log(month);
  d3.selectAll('span')
    .text((d) => d.name + '\n' + d.monthAvg[month].avg)
    .style('top', (d) => (d.monthAvg[month].avg) * 5);
}
