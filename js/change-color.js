'use strict';

(function () {
  var setup = window.createWizard.setup;
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballValue = setup.querySelector('input[name="fireball-color"]');

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

  var coatColorCounter = makeCounter();
  var eyesColorCounter = makeCounter();
  var fireballColorCounter = makeCounter();

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = coatColorCounter(window.createWizard.Wizard.COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = eyesColorCounter(window.createWizard.Wizard.EYES_COLORS);
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = fireballColorCounter(window.createWizard.Wizard.FIREBALL_COLORS);
    wizardFireball.style.background = fireballColor;
    wizardFireballValue.value = fireballColor;
  });
})();
