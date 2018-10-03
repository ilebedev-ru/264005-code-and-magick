'use strict';

(function () {
  var Wizard = window.utils.Wizard;
  var makeCounter = window.utils.makeCounter;
  var KeyCode = window.utils.KeyCode;

  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setup.querySelector('.setup-close');

  var setupStartStyle = Object.assign({}, getComputedStyle(setup));
  var inputUserName = setup.querySelector('.setup-user-name');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballValue = setup.querySelector('input[name="fireball-color"]');

  var closeEscPressHandler = function (evt) {
    if (evt.keyCode === KeyCode.ESC_KEYCODE) {
      closeSetupPopup();
    }
  };

  var openSetupPopup = function () {
    setup.classList.remove('hidden');
    setupSimilar.classList.remove('hidden');

    setup.style.top = setupStartStyle.top;
    setup.style.left = setupStartStyle.left;

    document.addEventListener('keydown', closeEscPressHandler);
  };

  var closeSetupPopup = function () {
    setup.classList.add('hidden');
    setupSimilar.classList.add('hidden');

    document.removeEventListener('keydown', closeEscPressHandler);
  };

  var coatColorCounter = makeCounter();
  var eyesColorCounter = makeCounter();
  var fireballColorCounter = makeCounter();

  setupCloseButton.addEventListener('click', function () {
    closeSetupPopup();
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KeyCode.ENTER_KEYCODE) {
      closeSetupPopup();
    }
  });

  setupOpenButton.addEventListener('click', function () {
    openSetupPopup();
  });

  setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KeyCode.ENTER_KEYCODE) {
      openSetupPopup();
    }
  });

  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', closeEscPressHandler);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', closeEscPressHandler);
  });

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = coatColorCounter(Wizard.COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = eyesColorCounter(Wizard.EYES_COLORS);
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = fireballColorCounter(Wizard.FIREBALL_COLORS);
    wizardFireball.style.background = fireballColor;
    wizardFireballValue.value = fireballColor;
  });
})();

