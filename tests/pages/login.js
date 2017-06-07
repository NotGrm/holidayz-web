import testSelector from 'ember-test-selectors';

import {
  create,
  clickable,
  fillable,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/login'),

  email: fillable(testSelector('email')),
  password: fillable(testSelector('password')),
  submit: clickable('button'),
  error: text('.errors')
});
