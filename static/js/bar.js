var bar = c3.generate({
	bindto: '#appliance-consumption',
    data: {
        format: function(d) {
          return `${d}kw`;
        },
        colors: {
          'Usage': '#d6a726',
          'Wastage': '#4a69bd',
        },
        json: [
                {name: 'Microwave', Usage: 70, Wastage: 15, total: 85},
                {name: 'Fridge', Usage: 240, Wastage: 0, total: 240},
                {name: 'Heater', Usage: 35, Wastage: 20, total: 55},
                {name: 'Computer', Usage: 120, Wastage: 20, total: 140},
                {name: 'TV', Usage: 150, Wastage: 40, total: 190},
                {name: 'PS4', Usage: 150, Wastage: 60, total: 210},
            ],
		keys: {
			x: 'name',
			value: ['Usage', 'Wastage'],
		},
        type: 'bar',
        groups: [
            ['Usage', 'Wastage'],
        ],
    },
	axis: {
			x: {
				type: 'category',
			},
     y: {
      tick: {
        format: function(d) {
          return `${d}kw`;
        },
      },
    } 
		},
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});