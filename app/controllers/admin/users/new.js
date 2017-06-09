import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      this.get('model').save().then((user) => {
        this.transitionToRoute('admin.users.show', user);
      })
    }
  }
});
