import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  email() {
    return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@example.org`;
  },
  reference() {
    return `${faker.finance.account(4)}`;
  },
  role() {
    return faker.random.arrayElement(['employee', 'manager', 'hr', 'admin'])
  }
});
