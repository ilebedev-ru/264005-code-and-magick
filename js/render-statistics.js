'use strict';

(function () {

  var findMaxValue = window.utils.findMaxValue;
  var getRandomNumber = window.utils.getRandomNumber;
  var StatisticsData = window.utils.StatisticsData;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, StatisticsData.Cloud.WIDTH, StatisticsData.Cloud.HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, StatisticsData.Cloud.X + StatisticsData.Cloud.GAP, StatisticsData.Cloud.Y + StatisticsData.Cloud.GAP, StatisticsData.Cloud.SHADOW);
    renderCloud(ctx, StatisticsData.Cloud.X, StatisticsData.Cloud.Y, StatisticsData.Cloud.COLOR);

    ctx.fillStyle = StatisticsData.Font.COLOR;
    ctx.font = StatisticsData.Font.STYLE;
    ctx.fillText('Ура вы победили!', StatisticsData.Cloud.X + StatisticsData.Font.GAP, StatisticsData.Cloud.Y + StatisticsData.Font.GAP * 2);
    ctx.fillText('Список результатов:', StatisticsData.Cloud.X + StatisticsData.Font.GAP, StatisticsData.Cloud.Y + StatisticsData.Font.GAP * 3);

    var maxValue = findMaxValue(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = StatisticsData.BarChart.HEIGHT * times[i] / maxValue;
      var barXPoint = StatisticsData.Cloud.X + StatisticsData.BarChart.BAR_WIDTH * i + StatisticsData.BarChart.GAP * (i + 1);
      var barYPoint = StatisticsData.BarChart.Y + StatisticsData.BarChart.HEIGHT - barHeight;

      ctx.fillStyle = 'hsla(241, ' + getRandomNumber(0, 100) + '%, 30%, 1)';

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(barXPoint, barYPoint, StatisticsData.BarChart.BAR_WIDTH, barHeight);
      ctx.fillStyle = StatisticsData.Font.COLOR;
      ctx.fillText(Math.round(times[i]), barXPoint, barYPoint - StatisticsData.Font.GAP);
      ctx.fillText(names[i], barXPoint, StatisticsData.BarChart.Y + StatisticsData.BarChart.HEIGHT + StatisticsData.Font.GAP);
    }
  };
})();

