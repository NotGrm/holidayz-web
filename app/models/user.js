import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  reference: DS.attr('string'),
  role: DS.attr('string'),
  department: DS.belongsTo('department', {inverse: 'members'}),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`
  }),
});
