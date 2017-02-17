

let topSpeedData = [
  [235,"2015"],
  [229,"2005"],
  [205,"1995"],
  [212,"1985"],
  [180,"1975"]
];

let topSpeedColors = ["blue", "red", "yellow", "green", "purple"];

let topSpeed = d3.select("svg.top-speed-chart").selectAll("circle")
  .data(topSpeedData)
  .enter()
  .append("circle")
  .attr("cx",400)
  .attr("cy",400)
  .attr('r',function(d,i) {
    return 230 - (i * 30);
  })
  .style("fill", "none")
  .attr("stroke-width", 30)
  .attr("stroke", function(d,i) {
    if(i >= topSpeedColors.length) {
      i = i % topSpeedColors.length;
    }
    return topSpeedColors[i];
  })
  .style('stroke-dasharray',function(d,i) {
    return (230 - (i * 30)) * 2 * 3.1459;
  })
  .attr("transform", "rotate(90,400,400)")
  .style("stroke-dashoffset", function(d,i) {
    // find length of circle's circumference
    let circ = (230 - (i * 30)) * 2 * 3.1459;
    // create degree measurement from data (increased by 1.14 to show scale)
    let degree = parseInt(d) * 1.14;
    // find cirumference length of the segment of the circle that will be represented
    let segmentCirc = (degree/360) * 2 * 3.1459 * (230 - (i * 30));
    // return circumference length from end that will NOT be shown (value of stroke-dashoffset)
    return circ - segmentCirc;
  });

  d3.select("svg.top-speed-chart")
    .append('circle')
    .attr("cx",400)
    .attr("cy",400)
    .attr('r',250)
    .attr('stroke-width',10)
    .attr('stroke','black')
    .style('fill','none');

let topSpeedIndicators = [
  [400,650,400,660],
  [222,577,215,585],
  [150,400,140,400],
  [222,222,215,215],
  [400,150,400,140],
  [577,222,585,215],
  [650,400,660,400],
  [577,577,585,585]
];

  d3.select("svg.top-speed-chart").selectAll("line")
    .data(topSpeedIndicators)
    .enter()
    .append("line")
    .attr("x1",function(d) {
      return d[0];
    })
    .attr("y1",function(d) {
      return d[1];
    })
    .attr("x2",function(d) {
      return d[2];
    })
    .attr("y2",function(d) {
      return d[3];
    })
    .attr("stroke-width","5")
    .attr("stroke","black");


    let topSpeedIndicatorText = [
      [400,650,396,680],
      [222,577,195,603],
      [150,400,113,405],
      [222,222,188,210],
      [400,150,387,130],
      [577,222,590,210],
      [650,400,670,404],
      [577,577,590,598]
    ];

  d3.select("svg.top-speed-chart").selectAll("text")
    .data(topSpeedIndicatorText)
    .enter()
    .append("text")
    .attr('x', function(d) {
      return d[2];
    })
    .attr('y', function(d) {
      return d[3];
    })
    .text(function(d,i) {
      //Rounding and adjusting by 0.87 to match top speed modifier
      return (i*40);
    })
    .attr("fill", "red");

  d3.select("svg.top-speed-chart")
    .append("circle")
    .attr("cx",400)
    .attr("cy",400)
    .attr("r",30)
    .attr("fill","black");

  d3.select("svg.top-speed-chart")
    .append("line")
    .attr("x1",400)
    .attr("y1",400)
    .attr("x2",600)
    .attr("y2",395)
    .attr("stroke-width",8)
    .attr("stroke","black");

  d3.select("svg.top-speed-chart")
    .append("line")
    .attr("x1",400)
    .attr("y1",400)
    .attr("x2",600)
    .attr("y2",395)
    .attr("stroke-width",1)
    .attr("stroke","red");

  d3.select("svg.top-speed-chart").selectAll("p")
    .data(topSpeedData)
    .enter()
    .append("text")
    .attr('x',function(d,i) {
      return (i*50) + 285;
    })
    .attr('y',730)
    .text(function(d) {
      return d[1];
    })
    .attr('fill',function(d,i) {
      return topSpeedColors[i];
    });

let hpData = [
  [900,"F1 Car"],
  [600,"Lamborghini"],
  [235,"Honda Civic SI"],
  [100,"Fiat 500"]
];

  d3.select("svg.engine-chart").selectAll('p')
  .data(hpData)
  .enter()
  .append("rect")
  .attr("x",0)
  .attr("y", function(d) {
    let newHeight = 325 - (d[0] * 0.325) + 25;
    return newHeight;
  })
  .attr("width",400)
  .attr("height",350)
  .attr("fill", function(d,i) {
    return topSpeedColors[i];
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
