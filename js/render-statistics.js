'use strict';

(function () {
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
    GAP: 10,
    COLOR: '#fff',
    SHADOW: 'rgba(0, 0, 0, 0.7)'
  };

  var Font = {
    STYLE: '16px PT Mono',
    COLOR: '#000000',
    GAP: 15
  };

  var BarChart = {
    Y: 100,
    HEIGHT: 150,
    BAR_WIDTH: 40,
    GAP: 50
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
  };

  var findMaxValue = function (array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };

  var getRandomNumber = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };

  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, Cloud.X + Cloud.GAP, Cloud.Y + Cloud.GAP, Cloud.SHADOW);
    renderCloud(ctx, Cloud.X, Cloud.Y, Cloud.COLOR);

    ctx.fillStyle = Font.COLOR;
    ctx.font = Font.STYLE;
    ctx.fillText('Ура вы победили!', Cloud.X + Font.GAP, Cloud.Y + Font.GAP * 2);
    ctx.fillText('Список результатов:', Cloud.X + Font.GAP, Cloud.Y + Font.GAP * 3);

    var maxValue = findMaxValue(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = BarChart.HEIGHT * times[i] / maxValue;
      var barXPoint = Cloud.X + BarChart.BAR_WIDTH * i + BarChart.GAP * (i + 1);
      var barYPoint = BarChart.Y + BarChart.HEIGHT - barHeight;

      ctx.fillStyle = 'hsla(241, ' + getRandomNumber(0, 100) + '%, 30%, 1)';

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(barXPoint, barYPoint, BarChart.BAR_WIDTH, barHeight);
      ctx.fillStyle = Font.COLOR;
      ctx.fillText(Math.round(times[i]), barXPoint, barYPoint - Font.GAP);
      ctx.fillText(names[i], barXPoint, BarChart.Y + BarChart.HEIGHT + Font.GAP);
    }
  };
})();

