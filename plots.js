//Plotly.newPlot("plotArea", [{x: [10, 20, 30], y: [20, 30, 40]}]);
//var trace = [{
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//}];

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", trace, layout);

var trace = {
    y : ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    x : [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type : "bar",
    orientation : 'h'
};
    
   
var data = [trace];
var layout = {
   title: "Beverage Chart",
    yaxis: {title: "% of Drinks Ordered"},
   xaxis: {title: "Drinks"},
   };
  Plotly.newPlot("plotArea", data, layout)

