/**
 * Wastage section
 */

/* eslint-disable */
(function () {
  const wastageDataYou = [
    { month: 'January', usage: 100 },
    { month: 'Febuary', usage: 120 },
    { month: 'March', usage: 111 },
    { month: 'April', usage: 105 },
    { month: 'May', usage: 90 },
    { month: 'June', usage: 140 },
    { month: 'July', usage: 95 },
    { month: 'August', usage: 97 },
    { month: 'September', usage: 100 },
  ];

  const wastageDataAvg = [
    { month: 'January', usage: 100 },
    { month: 'Febuary', usage: 110 },
    { month: 'March', usage: 101 },
    { month: 'April', usage: 95 },
    { month: 'May', usage: 110 },
    { month: 'June', usage: 100 },
    { month: 'July', usage: 107 },
    { month: 'August', usage: 95 },
    { month: 'September', usage: 101 },
  ];

  const wastageDataFull = wastageDataYou.concat(wastageDataAvg);

  const wastageSvg = d3.select('#wastage')
    .select('svg');

  const x = d3.scaleLinear().domain([0, (wastageDataAvg.length - 1)]).range([0, 400]);
  const y = d3.scaleLinear().domain([d3.min(wastageDataFull, d => d.usage), d3.max(wastageDataFull, d => d.usage)]).range([0, 75]);

  const valueLine = d3.line()
    .x((d, i) => x(i))
    .y((d) => y(d.usage));

  wastageSvg.append('path')
    .datum(wastageDataYou)
    .attr('class', 'line')
    .attr('d', valueLine)
    .attr('stroke', 'crimson')
    .attr('fill', 'none');
  
  wastageSvg.append('path')
    .datum(wastageDataAvg)
    .attr('d', valueLine)
    .attr('stroke', 'steelblue')
    .attr('fill', 'none');

  //wastageSvg.append('')

}(d3));


/**
 * Appliances section
 */

(function () {
  const applianceDataLoose = [
    { name: 'Fridge', value: 1250 , wasted: 200 },
    { name: 'Microwave', value: 250 , wasted: 0 },
    { name: 'Oven', value: 700 , wasted: 250 },
    { name: 'Dryer', value: 1780 , wasted: 100 },
    { name: 'Heater', value: 3000 , wasted: 700 },
    { name: 'Loungeroom Aircon', value: 15 , wasted: 2 },
    { name: 'Kitchen Aircon', value: 15 , wasted: 2 },
    { name: 'Garage Fridge', value: 4800 , wasted: 3750 }
  ];

  const applianceDataSorted = [...applianceDataLoose].sort((a, b) => a.value < b.value);

  const barHeight = 40;
  const x = d3.scaleLinear()
    .domain([0, d3.max(applianceDataSorted, d => d.value)])
    .range([0, 75]);

  const applianceSvg = d3.select('#appliances')
    .select('svg');

  applianceSvg
    .attr('height', applianceDataSorted.length * barHeight)
    .attr('width', '100%');

  /* eslint-disable */
  var bar = applianceSvg.selectAll('g')
    .data(applianceDataSorted)
    .enter()
    .append('g')
    .attr('transform', function (d, i) { return `translate(0, ${barHeight * i})` });

  bar.append('rect')
    .attr('x', '25%')
    .attr('width', (d) => `${x(d.value)}%`)
    .attr('height', barHeight - 2)
    .attr('fill', '#ffc04d');

  bar.append('rect')
    .attr('x', '25%')
    .attr('width', (d) => `${x(d.wasted)}%`)
    .attr('height', barHeight - 2)
    .attr('fill', 'orange');

  bar.append('text')
    .text((d) => d.name)
    .attr('dy', (barHeight / 2) + 2);


  bar.append('text')
    .text((d) => d.value)
    .attr('dy', (barHeight / 2) + 2)
    .attr('x', (d) => '50%')
    .attr('fill', 'black')
    .attr('class', 'usage-text')
    // .attr('stroke', 'white')
})(d3);