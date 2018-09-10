'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var WIZARDS_NUMBER = 4;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardOptions = [NAMES, SURNAMES, COAT_COLORS, EYES_COLORS];

var getRamdomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var renderWizardElement = function (arr) {
  var Wizard = {
    name: getRamdomArrElement(arr[0]) + ' ' + getRamdomArrElement(arr[1]),
    coatColor: getRamdomArrElement(arr[2]),
    eyesColor: getRamdomArrElement(arr[3])
  };
  return Wizard;
};

var createWizardsCollection = function (num) {
  var collections = [];
  for (var i = 0; i < num; i++) {
    collections[i] = renderWizardElement(wizardOptions);
  }
  return collections;
};

var wizards = createWizardsCollection(WIZARDS_NUMBER);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createSimilarWizardsFragment = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  return fragment;
};

setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));

