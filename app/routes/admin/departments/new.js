import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      department: this.store.createRecord('department'),
      users: this.get('store').peekAll('user')
    });
  }
});
