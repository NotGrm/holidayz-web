import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  departments: computed.alias('model.departments')
});
