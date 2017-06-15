export default function(server) {
  server.logging = false;
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  server.create('user', { id: 1234567890, role: 'admin' });
  server.create('user', { id: 7894561229, role: 'manager' });
  server.create('user', { id: 7894561230, role: 'employee' });

  server.createList('department', 3).forEach((department) => {
    let manager = server.create('user', { department, role: 'manager' });

    department.update('manager', manager)

    server.createList('user', 3, { department, role: 'employee' });
  })
}
