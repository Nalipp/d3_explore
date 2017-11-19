d3.select('.container')
    .selectAll('span')
  .data(countryTemp)
  .enter()
  .append('span')
    .classed('rating', true)
    .text((d) => d.name + '\n' + d.monthAvg['JAN'].avg)
    .style('left', (d, i) => (i + 1) * 25)
    .style('top', (d) => (d.monthAvg['JAN'].avg) * 5);
