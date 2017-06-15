import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      departments: this.store.findAll('department'),
      users: this.get('store').findAll('user')
    });
  },
});
