import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  manager: DS.belongsTo('user', { inverse: null }),
  members: DS.hasMany('user')
});
