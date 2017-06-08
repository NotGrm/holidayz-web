import Ember from 'ember';

const { isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),

  load() {
    let token = this.get('session.data.authenticated.token');

    if(!isEmpty(token)) {
      let claims = JSON.parse(atob(token.split('.')[1]));
      let { sub } = claims;

      return this.get('store').findRecord('user', sub).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }

  }
});
