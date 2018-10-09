'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;
  var renderWizard = window.renderWizard;

  var setupSimilarList = document.querySelector('.setup-similar-list');

  var getRank = function (wizard, coatColor, eyesColor) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var renderWizardsCollection = function (wizards) {
    window.wizards = wizards;

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    setupSimilarList.appendChild(fragment);
  };

  var updateSimilarWizards = function (coatColor, eyesColor) {
    var wizards = window.wizards;
    setupSimilarList.innerHTML = '';

    var sortWizards = wizards.sort(function (left, right) {
      var rankDiff = getRank(right, coatColor, eyesColor) - getRank(left, coatColor, eyesColor);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    renderWizardsCollection(sortWizards);
  };

  var showError = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('setup-similar-error');
    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(renderWizardsCollection, showError);

  window.updateSimilarWizards = updateSimilarWizards;
})();
