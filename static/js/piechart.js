var piechart = c3.generate({
	bindto: "#piechart",
	size: {
		height: 200,
	},
    data: {
        colors: {
          'Heater': '#fcd35f',
          'Microwave': '#d6a726',
          'Computer': '#e74c3c',
          'TV': '#ad2428',
          'PS4': '#4a69bd',
          'Garage fridge': '#223a7f',
        },
        columns: [
			      ['Heater', 20],
            ['Microwave', 30],
			      ['Computer', 50],
			      ['TV', 75],
			      ['PS4', 80],
            ['Garage fridge', 120.5],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
	pie: {
		label: {
			show: false
		}
	}
});