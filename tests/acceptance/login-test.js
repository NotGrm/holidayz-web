import { test } from 'qunit';
import moduleForAcceptance from 'holidayz/tests/helpers/module-for-acceptance';

import page from 'holidayz/tests/pages/login';

moduleForAcceptance('Acceptance | login');

test('logs in successfully', function(assert){
  page
    .visit()
    .email('admin@example.org')
    .password('secret')
    .submit();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('shows an error when password is wrong', function(assert) {
  page
    .visit()
    .email('admin@example.org')
    .password('invalid')
    .submit();

  andThen(function() {
    assert.equal(page.error, 'Invalid credentials');
  });
});
