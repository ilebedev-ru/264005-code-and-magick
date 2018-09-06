'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var FONT_GAP = 15;

var BARCHART_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BARCHART_Y = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var findMaxValue = function (array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP, 60);

  var maxValue = findMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = BARCHART_HEIGHT * times[i] / maxValue;
    var barXPoint = CLOUD_X + BAR_WIDTH * i + BAR_GAP * (i + 1);
    var barYPoint = BARCHART_Y + BARCHART_HEIGHT - barHeight;

    ctx.fillStyle = 'rgba(8, 8, 255, 1)';
    ctx.filter = 'saturate(' + Math.floor((Math.random() * 100) + 1) + '%)';

    if (names[i] === 'Вы') {
      ctx.filter = 'none';
      ctx.fillStyle = 'red';
    }

    ctx.fillRect(barXPoint, barYPoint, BAR_WIDTH, barHeight);
    ctx.filter = 'none';
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), barXPoint, barYPoint - FONT_GAP);
    ctx.fillText(names[i], barXPoint, BARCHART_Y + BARCHART_HEIGHT + FONT_GAP);
  }
};
