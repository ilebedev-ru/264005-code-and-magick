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

  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');

  window.createWizard = {
    Wizard: Wizard,
    setup: setup,
    setupSimilar: setupSimilar,
    setupSimilarList: setupSimilarList
  };

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  (function () {
    var wizards = createWizardsCollection(Wizard.WIZARDS_NUMBER);
    setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));
  })();
})();
