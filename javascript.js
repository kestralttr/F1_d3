

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
    // find length of circle's total circumference
    let circ = (230 - (i * 30)) * 2 * 3.1459;
    // create degree measurement from data (increased by 1.14 to show scale)
    let degree = parseInt(d) * 1.14;
    // find cirumference length of the segment of the circle that will be represented
    let segmentCirc = (degree/360) * 2 * 3.1459 * (230 - (i * 30));
    // return circumference length from end that will NOT be shown (value of stroke-dashoffset)
    return circ - segmentCirc;
  })
  .attr("class","top-speed-animation");

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
    .attr("class","top-speed-text")
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
    .attr("fill", "white");

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
  [610,"Lamborghini"],
  [350,"Honda Civic SI"],
  [105,"Fiat 500"]
];

let hpDataColors = ["green","yellow","red","blue"];

  d3.select("svg.engine-chart").selectAll('p')
  .data(hpData)
  .enter()
  .append("rect")
  .attr("x",0)
  .attr("y", function(d) {
    let newHeight = 325 - (d[0] * 0.325);
    return newHeight;
  })
  .attr("id", function(d) {
    return d[1];
  })
  .attr("width",390)
  .attr("height",350)
  .attr("fill", function(d,i) {
    return hpDataColors[i];
  });

  d3.select("svg.engine-chart")
    .append("path")
    .attr("transform","translate(0,-130)")
    .attr("d","M0.000 282.885 L 0.000 565.771 200.000 565.771 L 400.000 565.771 400.000 282.885 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 282.885 M265.530 161.762 C 279.804 162.638,287.994 164.022,290.068 165.910 C 291.600 167.306,292.677 170.123,291.868 170.623 C 291.507 170.846,291.343 176.458,291.417 186.080 C 291.579 207.019,293.219 205.625,266.197 207.530 L 252.621 208.487 262.803 215.827 C 272.879 223.091,273.030 223.174,277.436 223.925 C 285.066 225.226,285.769 225.601,286.684 228.854 C 287.121 230.410,287.856 232.702,288.317 233.946 L 289.155 236.209 317.096 236.209 C 349.447 236.209,346.753 235.699,350.232 242.489 C 352.558 247.029,352.710 247.426,355.878 257.143 C 357.197 261.188,358.740 265.771,359.308 267.327 C 362.573 276.277,362.376 272.307,362.376 329.279 C 362.376 381.216,362.367 381.666,361.093 388.685 C 358.420 403.421,353.891 413.283,348.338 416.464 L 345.969 417.822 286.704 417.822 L 227.440 417.822 227.440 419.364 L 227.440 420.906 270.540 420.927 C 294.244 420.938,313.708 421.016,313.791 421.099 C 315.613 422.920,304.718 436.023,299.003 438.885 C 292.253 442.265,268.978 443.572,215.559 443.570 C 166.431 443.568,139.342 442.245,133.253 439.552 C 126.417 436.528,117.115 425.932,117.115 421.170 C 117.115 421.040,136.337 420.934,159.830 420.934 L 202.546 420.934 202.546 419.378 L 202.546 417.822 146.959 418.003 C 107.132 418.132,90.538 418.002,88.430 417.544 C 83.155 416.398,79.244 411.283,75.880 401.132 L 74.286 396.322 70.814 396.154 L 67.342 395.986 67.193 415.335 C 67.057 432.942,66.967 434.537,66.195 433.044 C 65.728 432.141,64.122 429.302,62.626 426.734 L 59.906 422.065 52.714 422.065 L 45.523 422.065 42.005 428.430 L 38.487 434.795 38.491 389.533 L 38.494 344.272 40.083 346.818 C 40.957 348.218,42.557 351.018,43.638 353.039 C 47.460 360.182,47.483 360.065,47.441 333.700 C 47.421 320.844,47.286 310.771,47.140 311.315 C 46.995 311.860,46.671 312.306,46.420 312.306 C 46.170 312.306,44.470 314.279,42.643 316.690 L 39.321 321.075 39.171 305.132 C 39.088 296.364,39.088 281.852,39.171 272.883 L 39.321 256.577 42.643 260.962 L 45.965 265.347 52.745 265.347 C 60.388 265.347,59.186 265.963,64.074 259.536 L 66.195 256.746 66.195 270.382 L 66.195 284.017 68.693 284.017 L 71.191 284.017 71.592 279.632 C 71.813 277.221,72.468 273.720,73.047 271.853 C 73.627 269.986,74.105 268.044,74.109 267.537 C 74.113 267.031,74.498 266.300,74.965 265.912 C 75.431 265.525,75.813 264.754,75.813 264.199 C 75.813 261.316,81.961 244.947,84.665 240.630 C 87.580 235.976,85.976 236.215,114.286 236.212 C 130.416 236.210,139.610 236.006,139.874 235.644 C 140.101 235.332,140.939 232.991,141.738 230.440 C 142.676 227.442,143.531 225.697,144.155 225.502 C 144.686 225.337,147.631 224.698,150.701 224.084 C 153.770 223.469,156.733 222.636,157.285 222.233 C 157.837 221.829,162.264 218.621,167.122 215.103 C 171.980 211.586,175.955 208.631,175.955 208.538 C 175.955 208.444,171.181 208.054,165.347 207.671 C 137.449 205.839,138.772 207.033,139.180 184.057 C 139.550 163.171,138.487 164.563,155.514 162.670 C 172.469 160.786,240.464 160.225,265.530 161.762 M186.052 214.844 C 185.944 215.098,183.055 217.461,179.632 220.095 C 176.209 222.730,172.963 225.262,172.419 225.722 C 171.623 226.395,171.429 227.479,171.429 231.243 L 171.429 235.926 175.106 235.926 L 178.784 235.926 178.784 232.815 L 178.784 229.703 189.533 229.703 L 200.283 229.703 200.283 227.785 C 200.283 226.222,197.772 220.112,195.258 215.559 C 194.744 214.629,186.418 213.982,186.052 214.844 M233.663 214.929 C 233.663 215.205,232.518 217.866,231.117 220.842 C 229.717 223.819,228.571 227.030,228.571 227.978 L 228.571 229.703 239.321 229.703 L 250.071 229.703 250.071 232.815 L 250.071 235.926 253.748 235.926 L 257.426 235.926 257.426 231.219 C 257.426 226.053,257.655 226.465,252.635 222.631 C 251.412 221.697,248.504 219.470,246.172 217.680 L 241.931 214.427 237.797 214.427 C 235.524 214.427,233.663 214.653,233.663 214.929 M66.191 307.355 C 66.188 320.583,66.152 321.023,65.201 319.617 C 63.754 317.478,59.757 312.619,59.264 312.400 C 59.031 312.296,58.840 311.851,58.840 311.410 C 58.840 310.969,58.458 310.608,57.992 310.608 C 57.251 310.608,57.143 313.563,57.143 333.805 L 57.143 357.001 58.421 357.001 C 59.124 357.001,59.975 356.556,60.312 356.011 C 61.202 354.570,64.579 348.487,65.487 346.687 C 67.185 343.323,67.327 344.615,67.327 363.474 L 67.327 382.461 69.664 382.461 L 72.001 382.461 71.650 380.339 C 71.457 379.173,71.297 359.187,71.293 335.926 L 71.287 293.635 68.741 293.635 L 66.195 293.635 66.191 307.355")
    .attr("stroke", "none")
    .attr("fill", "#262626")
    .attr("fill-rule", "evenodd");

  d3.select("svg.engine-chart")
    .append("line")
    .attr("x1",400)
    .attr("y1",30)
    .attr("x2",400)
    .attr("y2",320)
    .attr("stroke-width",5)
    .attr("stroke","black");

let hpIndicatorData = [
  [380,30,403,30],
  [380,88,403,88],
  [380,146,403,146],
  [380,204,403,204],
  [380,262,403,262],
  [380,320,403,320]
];

  d3.select("svg.engine-chart").selectAll("p")
    .data(hpIndicatorData)
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
    .attr("stroke-width",3)
    .attr("stroke","black");

let hpTextData = [
  [410,30 + 5],
  [410,88 + 5],
  [410,146 + 5],
  [410,204 + 5],
  [410,262 + 5],
  [410,320 + 5]
];

  d3.select("svg.engine-chart").selectAll("p")
    .data(hpTextData)
    .enter()
    .append("text")
    .attr("x",function(d) {
      return d[0];
    })
    .attr("y",function(d) {
      return d[1];
    })
    .text(function(d,i) {
      return 1000 - (200*i);
    })
    .attr("fill", "white");

let notInUse = function() {
  document.getElementById("bar1").classList.remove("bar1");
  document.getElementById("bar1").offsetWidth;
  document.getElementById("bar1").classList.add("bar1");
};

let rect1Animation = function() {
	let w;

	let rect1 = document.getElementById("rect1");
  rect1.setAttribute("width","0");
  let animator = setInterval(function() {
    w = parseInt(rect1.getAttribute("width"));
    if(w>597) {
      clearInterval(animator);
    }
    w += 3;
    rect1.setAttribute("width",`${w}`);
  },40);
  //75 pixels a second
};

let rect2Animation = function() {
	let w;
	let rect2 = document.getElementById("rect2");
  rect2.setAttribute("width","0");
  let animator = setInterval(function() {
    w = parseInt(rect2.getAttribute("width"));
    if(w>597) {
      clearInterval(animator);
    }
    w += 3;
    rect2.setAttribute("width",`${w}`);
  },55);
  //54 pixels a second
};

let rect3Animation = function() {
	let w;
	let rect3 = document.getElementById("rect3");
  rect3.setAttribute("width","0");
  let animator = setInterval(function() {
    w = parseInt(rect3.getAttribute("width"));
    if(w>597) {
      clearInterval(animator);
    }
    w += 3;
    rect3.setAttribute("width",`${w}`);
  },70);
  //43 pixels a second
};

let rect4Animation = function() {
	let w;
	let rect4 = document.getElementById("rect4");
  rect4.setAttribute("width","0");
  let animator = setInterval(function() {
    w = parseInt(rect4.getAttribute("width"));
    if(w>597) {
      clearInterval(animator);
    }
    w += 2;
    rect4.setAttribute("width",`${w}`);
  },60);
  //33 pixels a second
};

let activateAnimation = function() {
  let button = document.getElementById("animation-button");
  button.disabled = true;
  rect1Animation();
  rect2Animation();
  rect3Animation();
  rect4Animation();
};
