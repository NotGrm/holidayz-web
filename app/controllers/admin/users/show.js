import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(){
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('admin.users');
      });
    }
  }
});
