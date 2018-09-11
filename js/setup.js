'use strict';

var Wizard = {
  WIZARDS_NUMBER: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
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

var showSetup = function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');

  var wizards = createWizardsCollection(Wizard.WIZARDS_NUMBER);

  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));
};

showSetup();
