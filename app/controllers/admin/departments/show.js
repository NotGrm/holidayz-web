import Ember from 'ember';

const { computed, RSVP, get, getProperties, set } = Ember;

export default Ember.Controller.extend({
  selected: [],

  department: computed.alias('model.department'),
  users: computed.alias('model.users'),

  availableUsers: computed('department.members.[]', 'users.[]', function() {
    const { department, users } = getProperties(this, 'department', 'users');

    const members = get(department, 'members');

    return users.reject((user) => {
      return members.includes(user);
    })
  }),

  actions: {
    addMembers(members) {
      const department = get(this, 'department');

      members.forEach(user => set(user, 'department', department));

      RSVP.all(
        members.map(user => user.save())
      ).then(() => set(this, 'selected', []))
    },

    removeMember(member) {
      set(member, 'department', null);
      member.save();
    },

    remove(){
      this.get('department').destroyRecord().then(() => {
        this.transitionToRoute('admin.departments');
      });
    }
  }
});
