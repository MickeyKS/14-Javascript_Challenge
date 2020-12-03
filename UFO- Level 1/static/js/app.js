//From Data.js
var tableData = data;

//Variable Declaration
var tbody = d3.select("tbody");

//Fill Table
tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});

//Select Button
var button = d3.select("#filter-btn");

//Create Event Handlers
button.on("click", runEnter);

//Run Event Handlers
function runEnter() {

  //Prevent Refresh
  d3.event.preventDefault();

  //Clear Table Before Search
  tbody.html("");
  
  //Get Raw HTML Node
  var inputElement = d3.select("#datetime");

  //Get Value
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  //Filter Data
  var filteredData = tableData.filter(ufo_sightings => ufo_sightings.datetime === inputValue);

  console.log(filteredData);

  //Fill Table with Filtered Data
  filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};