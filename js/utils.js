'use strict';

(function () {
  var Wizard = {
    WIZARDS_NUMBER: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var StatisticsData = {
    Cloud: {
      WIDTH: 420,
      HEIGHT: 270,
      X: 100,
      Y: 10,
      GAP: 10,
      COLOR: '#fff',
      SHADOW: 'rgba(0, 0, 0, 0.7)'
    },
    Font: {
      STYLE: '16px PT Mono',
      COLOR: '#000000',
      GAP: 15
    },
    BarChart: {
      Y: 100,
      HEIGHT: 150,
      BAR_WIDTH: 40,
      GAP: 50
    }
  };

  var KeyCode = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13
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

  var getRandomArrElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var makeCounter = function () {
    var currentCount = 1;

    return function (arr) {
      if (currentCount < arr.length) {
        return arr[currentCount++];
      } else {
        currentCount = 0;
        return arr[currentCount++];
      }
    };
  };

  window.utils = {
    Wizard: Wizard,
    StatisticsData: StatisticsData,
    KeyCode: KeyCode,
    getRandomArrElement: getRandomArrElement,
    makeCounter: makeCounter,
    findMaxValue: findMaxValue,
    getRandomNumber: getRandomNumber,
  };
})();
