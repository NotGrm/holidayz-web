import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

moduleForComponent('user-form', 'Integration | Component | user form', {
  integration: true
});

test('it renders', function(assert) {
  this.set('user', {
    firstName: 'Gerard',
    lastName: 'Smith',
    email: 'gerard.smith@example.org',
    reference: '5',
    role: 'president'
  });

  this.render(hbs`{{user-form user=user}}`);

  assert.equal(this.$(testSelector('firstname')).val(), 'Gerard');
  assert.equal(this.$(testSelector('lastname')).val(), 'Smith');
  assert.equal(this.$(testSelector('email')).val(), 'gerard.smith@example.org');
  assert.equal(this.$(testSelector('reference')).val(), '5');
  assert.equal(this.$(testSelector('role')).val(), 'president');
});

test('it updates user properties', function(assert) {
  this.set('user', {
    firstName: 'Gerard',
    lastName: 'Smith',
    email: 'gerard.smith@example.org',
    reference: '5',
    role: 'president'
  });

  this.render(hbs`{{user-form user=user}}`);

  this.$(testSelector('firstname')).val('Lebron');
  this.$(testSelector('lastname')).val('James');
  this.$(testSelector('email')).val('lebron.james@example.org');
  this.$(testSelector('reference')).val('23');
  this.$(testSelector('role')).val('king');

  this.$('input').change();

  assert.equal(this.get('user.firstName'), 'Lebron');
  assert.equal(this.get('user.lastName'), 'James');
  assert.equal(this.get('user.email'), 'lebron.james@example.org');
  assert.equal(this.get('user.reference'), '23');
  assert.equal(this.get('user.role'), 'king');
});
