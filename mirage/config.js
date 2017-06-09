import Response from 'ember-cli-mirage/response';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/users/:id')

  this.post('/api/token-auth', (schema, request) => {
    const { username, password } = JSON.parse(request.requestBody);

    if (password !== 'secret') {
      return new Response(401, {some: 'header', 'Content-Type': 'application/json'}, {
        error: 'Invalid credentials'
      });
    }
    let token;

    if(username == 'admin@example.org') {
      token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    } else if (username == 'employee@example.org') {
      token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ODk0NTYxMjMwIn0.tS1iT0KLUaTC7T89BjMyQ4OmgGxDbHi8FNZwfjdNYO4'
    }

    return { token };
  })
}
