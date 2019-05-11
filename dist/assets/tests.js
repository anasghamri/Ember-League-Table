'use strict';

define("embertable/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    let action = component[actionName];
    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("embertable/tests/integration/components/game-results-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | game-results', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uAbwXP9T",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"game-results\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zDXNDOs4",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"game-results\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("embertable/tests/integration/components/league-table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | league-table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sPcrlnxi",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"league-table\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "OhWTQK+Q",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"league-table\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("embertable/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/game-results.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/game-results.js should pass ESLint\n\n');
  });
  QUnit.test('components/league-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/league-table.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('models/game.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/game.js should pass ESLint\n\n');
  });
  QUnit.test('models/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/team.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('services/game-simulator.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/game-simulator.js should pass ESLint\n\n26:9 - Unexpected console statement. (no-console)');
  });
  QUnit.test('tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-size.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-radius.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-widths.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/font-weights.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/fonts.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/line-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/negative-margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/opacity.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/padding.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/screens.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/shadows.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-fill.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/tailwind.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-sizes.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/z-index.js should pass ESLint\n\n');
  });
});
define("embertable/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('embertable/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'embertable/templates/application.hbs should pass TemplateLint.\n\nembertable/templates/application.hbs\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<div>` beginning at L9:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<GameResults>` beginning at L5:C8. Expected `<GameResults>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<LeagueTable>` beginning at L11:C8. Expected `<LeagueTable>` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('embertable/templates/components/game-results.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'embertable/templates/components/game-results.hbs should pass TemplateLint.\n\nembertable/templates/components/game-results.hbs\n  4:0  error  Incorrect indentation for `<div>` beginning at L4:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:4  error  Incorrect indentation for `<div>` beginning at L5:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<div>` beginning at L9:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<div>` beginning at L13:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  17:4  error  Incorrect indentation for `<div>` beginning at L17:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:8  error  Incorrect indentation for `{{game.homeTeam.name}}` beginning at L6:C8. Expected `{{game.homeTeam.name}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `{{game.homeGoals}}` beginning at L10:C8. Expected `{{game.homeGoals}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `{{game.awayGoals}}` beginning at L14:C8. Expected `{{game.awayGoals}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:8  error  Incorrect indentation for `{{game.awayTeam.name}}` beginning at L18:C8. Expected `{{game.awayTeam.name}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  23:114  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('embertable/templates/components/league-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'embertable/templates/components/league-table.hbs should pass TemplateLint.\n\nembertable/templates/components/league-table.hbs\n  2:4  error  Incorrect indentation for `<thead>` beginning at L2:C4. Expected `<thead>` to be at an indentation of 2 but was found at 4.  block-indentation\n  15:4  error  Incorrect indentation for `{{#each}}` beginning at L15:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<th>` beginning at L3:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<th>` beginning at L4:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<th>` beginning at L5:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<th>` beginning at L6:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<th>` beginning at L7:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<th>` beginning at L8:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<th>` beginning at L9:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<th>` beginning at L10:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<th>` beginning at L11:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  12:8  error  Incorrect indentation for `<th>` beginning at L12:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `<th>` beginning at L13:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  16:8  error  Incorrect indentation for `<tr>` beginning at L16:C8. Expected `<tr>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:12  error  Incorrect indentation for `<td>` beginning at L17:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<td>` beginning at L18:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<td>` beginning at L19:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  20:12  error  Incorrect indentation for `<td>` beginning at L20:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  21:12  error  Incorrect indentation for `<td>` beginning at L21:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  22:12  error  Incorrect indentation for `<td>` beginning at L22:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  23:12  error  Incorrect indentation for `<td>` beginning at L23:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:12  error  Incorrect indentation for `<td>` beginning at L24:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  25:12  error  Incorrect indentation for `<td>` beginning at L25:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  26:12  error  Incorrect indentation for `<td>` beginning at L26:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  27:12  error  Incorrect indentation for `<td>` beginning at L27:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  28:16  error  Incorrect indentation for `{{#each}}` beginning at L28:C16. Expected `{{#each}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  29:20  error  Incorrect indentation for `{{#if}}` beginning at L29:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  30:24  error  Incorrect indentation for `<span>` beginning at L30:C24. Expected `<span>` to be at an indentation of 22 but was found at 24.  block-indentation\n  32:24  error  Incorrect indentation for `<span>` beginning at L32:C24. Expected `<span>` to be at an indentation of 22 but was found at 24.  block-indentation\n  34:24  error  Incorrect indentation for `<span>` beginning at L34:C24. Expected `<span>` to be at an indentation of 22 but was found at 24.  block-indentation\n  28:42  error  you must use double quotes in templates  quotes\n  1:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
});
define("embertable/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/game-results-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-results-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/league-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/league-table-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/game-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/game-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/team-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/game-simulator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/game-simulator-test.js should pass ESLint\n\n');
  });
});
define("embertable/tests/test-helper", ["embertable/app", "embertable/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("embertable/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("embertable/tests/unit/models/game-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | game', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('game', {});
      assert.ok(model);
    });
  });
});
define("embertable/tests/unit/models/team-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | team', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('team', {});
      assert.ok(model);
    });
  });
});
define("embertable/tests/unit/services/game-simulator-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | game-simulator', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:game-simulator');
      assert.ok(service);
    });
  });
});
define('embertable/config/environment', [], function() {
  var prefix = 'embertable';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('embertable/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
