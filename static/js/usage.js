
const wastage = [
                ['You', 100, 45, 100, 400, 170, 250, 100, 45, 100, 400, 170, 250],
                ['Avg. Customer', 130, 100, 111, 200, 150, 50, 130, 100, 111, 200, 150, 50],
        ];
const usage = [
                ['You', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250],
                ['Avg. Customer', 130, 100, 140, 200, 150, 50, 130, 100, 140, 200, 150, 50],
        ];
var selection = true;

const usageWastage = c3.generate({
  bindto: '#usage',
    data: {
        type: 'spline',
        columns: usage,
        colors: {
          'You': '#d6a726',
          'Avg. Customer': '#4a69bd',
        }
    },
    axis: {
    x: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  }
});

$("#toggle").click(function(){
  $("#usageWastageTitle").text((selection ? "Wastage" : "Usage"));
  usageWastage.load({
    columns: (selection ? wastage : usage),
    unload: true,
  });
  
  selection = !selection;
});
$(document).ready(function(){
  usageWastage.load({
    columns: usage,
    unload: true,
  });
});