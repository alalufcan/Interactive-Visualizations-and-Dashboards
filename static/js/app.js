  d3.json("data/samples.json").then((data) => {
    // To be sure that we get the data
    console.log(data);

    var metadata = data.metadata;
    
    console.log(metadata);

});