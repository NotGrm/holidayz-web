import Ember from 'ember';

export default Ember.Controller.extend({
  department: Ember.computed.alias('model.department'),
  users: Ember.computed.alias('model.users'),
  members: Ember.computed.alias('department.members'),

  availableUsers: Ember.computed('members.[]', 'users.[]', function() {
    const { members, users } = this.getProperties('members', 'users');

    return users.reject((user) => {
      return members.includes(user);
    })
  }),

  actions: {
    remove(){
      this.get('department').destroyRecord().then(() => {
        this.transitionToRoute('admin.departments');
      });
    }
  }
});
