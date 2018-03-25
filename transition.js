//build horiz bar chart...
var data1 = [19,22,14,20,5,4,15];//2000 Agency Spending
var data2 = [26,24,14,13,5,4,15];//2016 Agency Spending
var type1 = ['Health and Human Services : 19%','Social Security : 22%','Defense - Military Programs : 14%','Treasury : 20%','Other Departments and Agencies : 5%','Agriculture : 4%','Other : 15%']
var type2 = ['Health and Human Services : 26%','Social Security : 24%','Defense - Military Programs : 14%','Treasury : 13%','Other Departments and Agencies : 5%','Veterans Affairs : 4%','Other : 15%']


var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data1);
var barEnter = barUpdate.enter().append("div");
barEnter.text(function(d) {return d;});

var year = -1;
var toggle = document.getElementById("toggle");
var heading = document.getElementById("year");
var chartData = document.getElementById("chartInfo");

var draw = function(e){
    chartData.innerHTML = "";
    if (year > 0){
	var barUpdate = bar.data(data2);
	var barEnter = barUpdate.enter().append("div");
	heading.innerHTML = "FY 2016 Agency Spending";
	barEnter.transition().duration(2000).style("width", function(d){
	    return d * 30 + "px";});
	barEnter.data(type1);
	barEnter.text(function(d){return d;});
    }
    else{
	var barUpdate = bar.data(data1);
	var barEnter = barUpdate.enter().append("div");
	heading.innerHTML = "FY 2000 Agency Spending";
	barEnter.transition().duration(2000).style("width", function(d){
	    return d * 30 + "px";});
	barEnter.data(type2);
	barEnter.text(function(d){return d;});
    }
    year *= -1;
}

draw(data1);

toggle.addEventListener("click", draw);
