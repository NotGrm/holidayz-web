import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  // needs: ['model:office', 'model:request']
});

test('should return fullname', function(assert) {
  const user = this.subject({firstName: 'Gerard', lastName: 'Smith'});

  assert.equal(user.get('fullName'), 'Gerard Smith');
})
