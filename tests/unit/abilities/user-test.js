import Ember from 'ember';

import { moduleFor, test } from 'ember-qunit';

moduleFor('ability:user', 'Unit | Ability | user', {
  // Specify the other units that are required for this test.
  needs: ['service:can', 'service:currentUser', 'service:session']
});

test('can access admin if admin', function(assert){
  let user = Ember.Object.create({
    role: 'admin'
  });

  let ability = this.subject({
    user: user
  });

  assert.ok(ability.get('canAccessAdmin'));
});

test('cannot access admin if not admin', function(assert){
  let user = Ember.Object.create({
    role: 'employee'
  });

  let ability = this.subject({
    user: user
  });

  assert.notOk(ability.get('canAccessAdmin'));
});
