'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var Wizard = {
  WIZARDS_NUMBER: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var getRamdomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var renderWizardElement = function (wizardData) {
  var wizardElement = {
    name: getRamdomArrElement(wizardData.NAMES) + ' ' + getRamdomArrElement(wizardData.SURNAMES),
    coatColor: getRamdomArrElement(wizardData.COAT_COLORS),
    eyesColor: getRamdomArrElement(wizardData.EYES_COLORS)
  };
  return wizardElement;
};

var createWizardsCollection = function (num) {
  var collections = [];
  for (var i = 0; i < num; i++) {
    collections[i] = renderWizardElement(Wizard);
  }
  return collections;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createSimilarWizardsFragment = function (wizardCollection) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardCollection.length; i++) {
    fragment.appendChild(renderWizard(wizardCollection[i]));
  }
  return fragment;
};

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');

var closeEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetupPopup();
  }
};

var openSetupPopup = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  var setupCloseButton = setup.querySelector('.setup-close');

  setupCloseButton.addEventListener('click', function () {
    closeSetupPopup();
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetupPopup();
    }
  });

  document.addEventListener('keydown', closeEscPressHandler);

  var inputUserName = setup.querySelector('.setup-user-name');
  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', closeEscPressHandler);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', closeEscPressHandler);
  });

  var wizardCoat = setup.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRamdomArrElement(Wizard.COAT_COLORS);
  });

  var wizardEyes = setup.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRamdomArrElement(Wizard.EYES_COLORS);
  });

  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballValue = setup.querySelector('input[name="fireball-color"]');

  wizardFireball.addEventListener('click', function () {
    var fireballColor = getRamdomArrElement(Wizard.FIREBALL_COLORS);
    wizardFireball.style.background = fireballColor;
    wizardFireballValue.value = fireballColor;
  });

  var submitButton = setup.querySelector('.setup-submit');
  var wizardForm = setup.querySelector('.setup-wizard-form');

  submitButton.addEventListener('click', function () {
    // event.preventDefault();
    wizardForm.action = 'https://js.dump.academy/code-and-magick';
    wizardForm.method = 'POST';
    wizardForm.enctype = 'multipart/form-data';
  });
};

var closeSetupPopup = function () {
  setup.classList.add('hidden');
  setupSimilar.classList.add('hidden');

  document.removeEventListener('keydown', closeEscPressHandler);
};

var showSetup = function () {
  var setupOpenButton = document.querySelector('.setup-open');

  setupOpenButton.addEventListener('click', function () {
    openSetupPopup();
  });

  setupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetupPopup();
    }
  });

  var wizards = createWizardsCollection(Wizard.WIZARDS_NUMBER);
  var setupSimilarList = setup.querySelector('.setup-similar-list');
  setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));
};

showSetup();
