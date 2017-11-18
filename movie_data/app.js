
var movies = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13",
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG",
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R",
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R",
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G",
  }
];

var ratings = {
  "G" : "lawngreen",
  "PG" : "dodgerblue",
  "PG-13" : "orange",
  "R" : "crimson"
}

// var rand = Math.floor(Math.random() * 10);

d3.select('.container')
    .selectAll('span')
  .data(movies)
  .enter()
  .append('span')
    .classed('rating', true)
    .text((d) => d.rating)
    .style('top', function(d, i) {
       return (i + 1) * 80;
    });

// d3.select('#quotes')
//     .style('list-style', 'none')
//   .selectAll('li')
//     .data(quotes)
//     .enter()
//     .append('li')
//       .text((d) => d.quote)
//       .classed('quote', true)
//     .style('color', 'white')
//     .style('background', (d) => {
//       return ratings[d.rating];
//     });

