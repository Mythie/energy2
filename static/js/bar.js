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
                {name: 'Microwave', Usage: 200, Wastage: 200, total: 400},
                {name: 'Fridge', Usage: 240, Wastage: 0, total: 240},
                {name: 'Heater', Usage: 300, Wastage: 200, total: 500},
                {name: 'Computer', Usage: 400, Wastage: 100, total: 500},
                {name: 'TV', Usage: 400, Wastage: 100, total: 500},
                {name: 'PS4', Usage: 400, Wastage: 100, total: 500},
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