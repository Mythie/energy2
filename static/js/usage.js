
const wastage = [
                ['You', 100, 45, 70, 60, 120, 110, 100, 45, 90, 120, 170, 130],
                ['Avg. Customer', 110, 100, 90, 200, 150, 50, 130, 100, 110, 70, 150, 50],
        ];
const usage = [
                ['You', 170, 530, 430, 400, 320, 270, 230, 250, 300, 400, 420, 250],
                ['Avg. Customer', 480, 450, 290, 200, 170, 320, 310, 390, 460, 410, 370, 380],
        ];
var selection = true;

const usageWastage = c3.generate({
  bindto: '#usage',
    data: {
        type: 'spline',
        format: function(d) {
          return `${d}kw`;
        },
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
    },
    y: {
      tick: {
        format: function(d) {
          return `${d}kw`;
        },
      }
    }  
  }
});

$("#toggle").click(function(){
  $("#usageWastageTitle").text((selection ? "Wastage" : "Usage"));
  $(this).text((selection ? "Usage" : "Wastage"));
  usageWastage.load({
    columns: (selection ? wastage : usage),
    unload: true,
  });
  
  selection = !selection;
});
$(document).ready(function(){
  $("#toggle").text("Wastage");
  usageWastage.load({
    columns: usage,
    unload: true,
  });
});