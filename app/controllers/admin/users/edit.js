import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update() {
      this.get('model').save().then(() => {
        this.transitionToRoute('admin.users.show', this.get('model'));
      })
    }
  }
});
