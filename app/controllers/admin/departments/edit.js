import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update() {
      this.get('model').save().then(() => {
        this.transitionToRoute('admin.departments.show', this.get('model'));
      })
    }
  }
});
