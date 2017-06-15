import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      this.get('model.department').save().then((department) => {
        this.transitionToRoute('admin.departments.show', department.id);
      })
    }
  }
});
