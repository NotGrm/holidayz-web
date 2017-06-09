import Ember from 'ember';

import { Ability } from 'ember-can';

export default Ability.extend({
  currentUser: Ember.inject.service(),
  user: Ember.computed.alias('currentUser.user'),

  canAccessAdmin: Ember.computed('user.role', function() {
    return Ember.isEqual(this.get('user.role'), 'admin');
  })
});
