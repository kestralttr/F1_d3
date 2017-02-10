
let dataset = [1,5,10,15,20];

d3.select("body").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return d; })
  .style("color", function(d) {
    if (d >= 15) {
      return "red";
    } else {
      return "black";
    }
  });

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height", function(d) {
    return d * 5 + "px";
  });

const svg = d3.select("body")
  .append("svg")
  .attr("width",500)
  .attr("height",50);

const circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

circles.attr("cx", function(d,i) {
      return (i * 50) + 25;
    })
    .attr("cy", "25")
    .attr("r", function(d) {
      return d;
    })
    .attr("fill", "orange")
    .attr("stroke", "red")
    .attr("stroke-width", function(d) {
      return d/3;
    });

let svgWidth = 500;
let svgHeight = 100;
let barPadding = 1;

let newDataset = [7,3,14,12,10,9,4,6,2,1,5,16,4,8,5]

const svgCanvas = d3.select("body")
                  .append("svg")
                  .attr("width", svgWidth)
                  .attr("height", svgHeight);

svgCanvas.selectAll("rect")
  .data(newDataset)
  .enter()
  .append("rect")
  .attr("x", function(d,i) {
    return i * (svgWidth / newDataset.length);
  })
  .attr("y", function(d) {
    return svgHeight - d * 4;
  })
  .attr("width", svgWidth / newDataset.length - barPadding)
  .attr("height", function(d) {
    return d * 4;
  })
  .attr("fill", function(d) {
    return "rgb(" + (100 + (d*10)) + ",0," + (100 + (d*10)) + ")";
  });

svgCanvas.selectAll("text")
  .data(newDataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("x", function(d,i) {
    return i * (svgWidth / newDataset.length) + (svgWidth / newDataset.length - barPadding) / 2;
  })
  .attr("y", function(d) {
    if(d<5) {
      return svgHeight - (d * 4);
    } else {
      return svgHeight - (d * 4) + 15;
    }
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "black")
  .attr("text-anchor", "middle");
