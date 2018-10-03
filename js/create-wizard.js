'use strict';

(function () {
  var Wizard = window.utils.Wizard;
  var getRandomArrElement = window.utils.getRandomArrElement;

  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  var wizards = createWizardsCollection(Wizard.WIZARDS_NUMBER);
  setupSimilarList.appendChild(createSimilarWizardsFragment(wizards));
})();
