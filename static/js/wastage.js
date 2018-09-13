var chart = c3.generate({
  bindto: '#wastage',
    data: {
        columns: [
            ['You', 100, 45, 100, 400, 170, 250, 100, 45, 100, 400, 170, 250],
            ['Avg. Customer', 130, 100, 111, 200, 150, 50, 130, 100, 111, 200, 150, 50],
        ],
        type: 'spline'
    },
    axis: {
    x: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  }
});