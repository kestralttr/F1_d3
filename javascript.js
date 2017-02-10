
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
