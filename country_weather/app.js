d3.selectAll('.monthBtn')
  .on('click', function() {
    d3.event.preventDefault();
    var month = d3.select(d3.event.target).text()
    updateMonth(month);
  });

d3.select('#container')
    .selectAll('p')
  .data(countryTemp)
  .enter()
  .append('p')
    .classed('rating', true)

d3.selectAll('.rating')
  .on('mouseover', () => {
    d3.select(d3.event.target)
    console.log('ihi'); 
  });

function updateMonth(month='January') {
  d3.select('#container h3')
    .text(month);

  d3.selectAll('p')
    .text((d) => d.name + '\n' + d.monthAvg[month].high)
    .style('left', (d, i) => (i + 1) * 25)
    .style('top', (d) => ((d.monthAvg[month].high) * 8) - 240)
    .style('border-color', (d) => {
      let temp = d.monthAvg[month].high;
      if (temp < 50) return 'dodgerblue';
      if (temp > 71) return 'crimson';
      else return 'lawngreen';
    });
}

updateMonth();

