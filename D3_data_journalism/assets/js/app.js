// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

// setting up borders
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Crating the svg group where the chart will rest
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append SVG group
const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function(censusData){
    censusData.forEach(data => {
        data.income = +data.income;
        data.obesity = +data.obesity;
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        console.log(censusData)
        //testing that data is being pulled
        //console.log(data.poverty) 
    });

    var xLinearScale = d3.scaleLinear()
        .domain([8, d3.max(censusData, d => d.poverty)])
        .range([0, width])

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(censusData, d => d.healthcare)])
        .range([height, 0])

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // chart axis
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);
    
    var circlesGroup = chartGroup.selectAll("circle")
        .data(censusData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale (d.poverty))
        .attr("cy", d => yLinearScale (d.healthcare))
        .attr("r", "10")
        .attr("fill", "red")
        .attr("opacity", ".25");

    // Labels
    // x-axis
    chartGroup.append("text")
        .attr('transform', `translate(${width}, ${height + margin.top})`)
        .attr("class", "axisText")
        .text("Poverty %")



});
