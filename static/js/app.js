d3.json("data/samples.json").then((data) => {
  // To be sure that we get the data
  console.log(data);

  // Assigning values to the variables
  var metaData = data.metadata;
  console.log("MetaData:", metaData);

  var names = data.names;
  console.log("Names:", names);

  var sampleData = data.samples;
  console.log("SampleData:", sampleData);
  
  // Filling the Dropdown menu for Test Subject ID No.
  var dropDown = d3.select("#selDataset");
  names.forEach((name) =>{
      var cell = dropDown.append("option");
      cell.text(name);
  });