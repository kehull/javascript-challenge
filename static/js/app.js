// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("form");

// Console.log the ufo data from data.js
console.log(data);

// BONUS: Refactor to use Arrow Functions!
data.forEach((ufoInfo) => {
  var row = tbody.append("tr");
  Object.entries(ufoInfo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

button.on("click", runEnter);
form.on("submit",runEnter);
var filteredData = []
// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    data.forEach((sighting) => {
    Object.entries(sighting).forEach(([key, value]) => {
        if (sighting.datetime === inputValue) {
                filteredData.push(sighting);
                console.log(sighting);
        }
      });
    });
    tbody.text(filteredData);
};

// currently prints entire filteredData array in first cell of table and is unreadable.
// need to figure out how to convert array to table so it can be viewed on the page
// and then repeat the processes for the city, state, country, and shape filters
