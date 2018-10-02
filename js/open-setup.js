'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setup = window.createWizard.setup;
  var setupSimilar = window.createWizard.setupSimilar;
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setup.querySelector('.setup-close');
  var setupStartStyle = Object.assign({}, getComputedStyle(setup));
  var inputUserName = setup.querySelector('.setup-user-name');

  var closeEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
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

  setupCloseButton.addEventListener('click', function () {
    closeSetupPopup();
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetupPopup();
    }
  });

  setupOpenButton.addEventListener('click', function () {
    openSetupPopup();
  });

  setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetupPopup();
    }
  });

  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', closeEscPressHandler);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', closeEscPressHandler);
  });
})();
