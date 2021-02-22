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
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);
}



// var filteredData = []
// // Complete the event handler function for the form
// function runEnter() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     data.forEach((instance) => {
//       Object.entries(instance).forEach(([key, value]) => {
//         if (instance.datetime === inputValue) {
//           data.forEach((i) => {
//             console.log(instance);
//             var row = tbody.append("tr");
//             Object.entries(innerWidth).forEach(([key, value]) => {
//               var cell = row.append("td");
//               cell.text(value);
//           });
//         }
//       )};
//     }
//   )}
// )};

// // filtering works correctly, need to append to html table