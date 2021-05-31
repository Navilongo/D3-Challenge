// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
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

let XAxis = "poverty";
let YAxis = "healthcare";

d3.csv("assets/data/data.csv").then(function(censusData){
    censusData.forEach(data => {
        data.income = +data.income;
        data.obesity = +data.obesity;
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        console.log(censusData)
    })

});
