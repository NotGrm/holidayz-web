import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      department: this.get('store').peekRecord('department', params.department_id),
      users: this.get('store').peekAll('user')
    });
  },
});
