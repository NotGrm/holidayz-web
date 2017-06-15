import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Component.extend({
  users: [],

  managers: computed.filterBy('users', 'role', 'manager'),

  onSubmit(){}
});
