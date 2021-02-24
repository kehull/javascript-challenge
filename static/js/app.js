// from data.js
var tableData = data;

// Get a reference to the table body, select the button and  form
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

// read data.js into the page
data.forEach((ufoInfo) => {
  var row = tbody.append("tr");
  Object.entries(ufoInfo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// tell the buttons how to behave
button.on("click", runEnter);
form.on("submit",runEnter);

// allow filtering
function runEnter() {
  d3.event.preventDefault(); // prevent the page from refreshing
  var inputElement = document.getElementById("datetime"); // get datetime info for the current row
  var inputValue = inputElement.value; //establish the use input as a variable
  var filteredData = tableData.filter(sighting => {
    return sighting.datetime === inputValue;
  }); // filter data, only keep data that matches the input value
  tbody.html(""); // empty the data from the html table
  filteredData.forEach((instance) => {
    console.log(instance);
    var row = tbody.append("tr"); // append each filtered row to the table
    const newInfo = Object.values(instance);
    console.log(newInfo)  
      newInfo.forEach(function(info) {
        console.log(info);
        row.append("td").text(info); 
      });
    }
  )
};