

let topSpeedData = [
  [235,"2015"],
  [229,"2005"],
  [205,"1995"],
  [212,"1985"],
  [180,"1975"]
];

let colors = ["blue", "red", "yellow", "green", "white"];

let topSpeed = d3.select("svg.top-speed-chart").selectAll("circle")
  .data(topSpeedData)
  .enter()
  .append("circle")
  .attr("cx",300)
  .attr("cy",300)
  .attr('r',function(d,i) {
    return 230 - (i * 30);
  })
  .style("fill", "none")
  .attr("stroke-width", 30)
  .attr("stroke", function(d,i) {
    if(i >= colors.length) {
      i = i % colors.length;
    }
    return colors[i];
  })
  // .style('stroke-dasharray',600);
  .style('stroke-dasharray',function(d,i) {
    return (230 - (i * 30)) * 2 * 3.1459;
  })
  .attr("transform", "rotate(90,300,300)")
  .style("stroke-dashoffset", function(d,i) {
    let circ = (230 - (i * 30)) * 2 * 3.1459;
    console.log(parseInt(d) * 1.7);
    return parseInt(d) * 1.7;
  });



//
// let dataset = [1,5,10,15,20];
//
// let scatterScale = d3.scale.linear()
//   .domain([50,450])
//   .range([50,450]);
//
// d3.select("body").selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) { return d; })
//   .style("color", function(d) {
//     if (d >= 15) {
//       return "red";
//     } else {
//       return "black";
//     }
//   });
//
// d3.select("body").selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class","bar")
//   .style("height", function(d) {
//     return d * 5 + "px";
//   });
//
// const svg = d3.select("body")
//   .append("svg")
//   .attr("width",500)
//   .attr("height",50);
//
// const circles = svg.selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("circle");
//
// circles.attr("cx", function(d,i) {
//       return (i * 50) + 25;
//     })
//     .attr("cy", "25")
//     .attr("r", function(d) {
//       return d;
//     })
//     .attr("fill", "orange")
//     .attr("stroke", "red")
//     .attr("stroke-width", function(d) {
//       return d/3;
//     });
//
// let svgWidth = 500;
// let svgHeight = 100;
// let barPadding = 1;
//
// let newDataset = [7,3,14,12,10,9,4,6,2,1,5,16,4,8,5];
//
// const svgCanvas1 = d3.select("body")
//                   .append("svg")
//                   .attr("width", svgWidth)
//                   .attr("height", svgHeight);
//
// svgCanvas1.selectAll("rect")
//   .data(newDataset)
//   .enter()
//   .append("rect")
//   .attr("x", function(d,i) {
//     return i * (svgWidth / newDataset.length);
//   })
//   .attr("y", function(d) {
//     return svgHeight - d * 4;
//   })
//   .attr("width", svgWidth / newDataset.length - barPadding)
//   .attr("height", function(d) {
//     return d * 4;
//   })
//   .attr("fill", function(d) {
//     return "rgb(" + (100 + (d*10)) + ",0," + (100 + (d*10)) + ")";
//   });
//
// svgCanvas1.selectAll("text")
//   .data(newDataset)
//   .enter()
//   .append("text")
//   .text(function(d) {
//     return d;
//   })
//   .attr("x", function(d,i) {
//     return i * (svgWidth / newDataset.length) + (svgWidth / newDataset.length - barPadding) / 2;
//   })
//   .attr("y", function(d) {
//     if(d<5) {
//       return svgHeight - (d * 4);
//     } else {
//       return svgHeight - (d * 4) + 15;
//     }
//   })
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("fill", "black")
//   .attr("text-anchor", "middle");
//
// let scatterData = [
//   [15,20],
//   [300,400],
//   [75,240],
//   [200,100],
//   [600,260]
// ];
//
// let scatterWidth = 500;
// let scatterHeight = 500;
// let scatterPadding = 55;
//
// let scatterXMax = d3.max(scatterData, function(d) {
//   return d[0];
// });
//
// let scatterYMax = d3.max(scatterData, function(d) {
//   return d[1];
// });
//
// let xScale = d3.scale.linear()
//   .domain([0,scatterXMax])
//   .range([scatterPadding,scatterWidth - scatterPadding]);
//
// let yScale = d3.scale.linear()
//   .domain([0,scatterYMax])
//   .range([scatterHeight - scatterPadding,scatterPadding]);
//
// let rScale = d3.scale.linear()
//   .domain([0, scatterYMax])
//   .range([2,5]);
//
// let scatterSVG = d3.select("body")
//   .append("svg")
//   .attr("width", scatterWidth)
//   .attr("height", scatterHeight);
//
// scatterSVG.selectAll("circle")
//   .data(scatterData)
//   .enter()
//   .append("circle")
//   .attr("cx", function(d) {
//     return xScale(d[0]);
//   })
//   .attr("cy", function(d) {
//     return yScale(d[1]);
//   })
//   .attr("r", function(d) {
//     return rScale(d[1]) * 2;
//   });
//
// scatterSVG.selectAll("text")
//   .data(scatterData)
//   .enter()
//   .append("text")
//   .text(function(d) {
//     return d[0] + "," + d[1];
//   })
//   .attr("x", function(d) {
//     return xScale(7 + d[0]+rScale(d[1]) * 2);
//   })
//   .attr("y", function(d) {
//     return yScale(d[1]);
//   })
//   .attr("font-family", "sans-serif")
//   .attr("font-size", "11px")
//   .attr("fill", "red");
