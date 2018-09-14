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

var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');

var inputUserName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardFireballValue = setup.querySelector('input[name="fireball-color"]');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Handlers

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

setupCloseButton.addEventListener('click', function () {
  closeSetupPopup();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupPopup();
  }
});

var getRandomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var renderWizardElement = function (wizardData) {
  var wizardElement = {
    name: getRandomArrElement(wizardData.NAMES) + ' ' + getRandomArrElement(wizardData.SURNAMES),
    coatColor: getRandomArrElement(wizardData.COAT_COLORS),
    eyesColor: getRandomArrElement(wizardData.EYES_COLORS)
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

var closeEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetupPopup();
  }
};

var openSetupPopup = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');

  document.addEventListener('keydown', closeEscPressHandler);
};

var closeSetupPopup = function () {
  setup.classList.add('hidden');
  setupSimilar.classList.add('hidden');

  document.removeEventListener('keydown', closeEscPressHandler);
};

var showSetup = function () {
  var wizards = createWizardsCollection(Wizard.WIZARDS_NUMBER);
  setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));
};

showSetup();
