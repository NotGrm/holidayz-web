import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      department: this.get('store').peekRecord('department', params.department_id),
      users: this.get('store').peekAll('user')
    });
  },
  
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('selected', []);
  }
});
