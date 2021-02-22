// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("form");

// Console.log the ufo data from data.js
// console.log(data);

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

function runEnter() {
  d3.event.preventDefault();
  var inputElement = document.getElementById("datetime");
  var inputValue = inputElement.value;
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  // console.log(filteredData); // returns each sighting as an object
  filteredData.forEach((instance) => {
    // console.log(instance); returns each sighting object
    newInfo = Object.entries(instance);
    // console.log(newInfo)  // returns each object as a list of lists where each list is a key/value pair. 
      //i thought this was the way to go based on intro to javascript/3/activities/02, but i can't get it to work past here
    newInfo.forEach(([datetime, city, country, shape, durationMinutes, comments]) => {
      var row = tbody.append("tr");
      row.append("td").text(datetime); // using console.log() for each of the items in this section shows that they're calling a bunch of stuff,
        // not just one cell's worth of text
      row.append("td").text(city);
      row.append("td").text(country);
      row.append("td").text(shape);
      row.append("td").text(durationMinutes);
      row.append("td").text(comments);
      });
    }
  )};

  // after running this code, it appends a bunch of rows of key/value pairs at the bottom of the existing table.