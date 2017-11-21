var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

newQuotes = [
  {
    quote: "Go ahead Make my day",
    movie: "Terminator",
    year: 1991,
    rating: "R"
  }, {
    quote: "AAAAAHHHHHH",
    movie: "Home Alone",
    year: 1998,
    rating: "PG"
  }
]

var colors = {
  "G": "#3cff00",
  "PG": "#f9ff00",
  "PG-13": "#ff9000",
  "R": "#ff0000"
};

d3.select('#quotes')
    .style('list-style', 'none')
  .selectAll('li')
    .data(quotes)
    .enter()
    .append('li')
    .text((d) => `${d.rating} : ${d.quote}`);

d3.select('#rmvG').on('click', () => removeByRating(d3.event.target.value));
d3.select('#rmvPG').on('click', () => removeByRating(d3.event.target.value));
d3.select('#rmvPG-13').on('click', () => removeByRating(d3.event.target.value));
d3.select('#rmvR').on('click', () => removeByRating(d3.event.target.value));

function removeByRating(rating) {
  console.log('removing', rating);
  var updatedList = quotes.filter((v) => v.rating !== rating);
  d3.select("#rmv" + rating).remove();

  d3.select("#addBtns")
    .append("button")
    .text("Add " + rating)
    .attr("id", "add" + rating)
    .attr("value", rating);

  d3.select("#add" + rating)
    .on('click', () => addByRating(d3.event.target.value));

  removeQuotes(updatedList);
}

function addByRating(rating) {
  var updatedList = quotes.filter((v) => v.rating === rating);
  d3.select("#add" + rating).remove();

  d3.select("#rmvBtns")
    .append("button")
    .text("Delete " + rating)
    .attr("id", "rmv" + rating)
    .attr("value", rating);

  d3.select("#rmv" + rating)
    .on('click', () => removeByRating(d3.event.target.value));

  addQuotes(updatedList);
}

function removeQuotes(updatedQuotes) {
  console.log(d3.select('#quotes')
    .selectAll('li')
    .data(updatedQuotes, (d) => d.quote)
    .exit()
    .remove());
}

function addQuotes(updatedQuotes) {
  console.log(updatedQuotes);
  console.log(d3.select('#quotes')
    .selectAll('li')
      .data(updatedQuotes, (d) => d.quote)
      .enter()
      .append('li')
      .text((d) => `${d.rating} : ${d.quote}`));
  }

