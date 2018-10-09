'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;

  var shuffleArray = window.utils.shuffleArray;

  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var shuffleWizards = shuffleArray(wizards);

    for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(shuffleWizards[i]));
    }

    setupSimilarList.appendChild(fragment);
  };

  var showError = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('setup-similar-error');
    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(renderWizards, showError);
})();
