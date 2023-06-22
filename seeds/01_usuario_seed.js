exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('usuario')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('usuario').insert([
          {
            nome: 'user',
            login: 'user',
            senha: '$2a$08$tprzZIs1OTKVMaVzZWrKfe8rX3toatWD6lsvp4u9AR54mrbSSLX7e',
            email: 'user@abc.com.br',
            roles: 'USER',
          },
          {
            nome: 'admin',
            login: 'admin',
            senha: '$2a$08$tprzZIs1OTKVMaVzZWrKfe8rX3toatWD6lsvp4u9AR54mrbSSLX7e',
            email: 'admin@abc.com.br',
            roles: 'USER;ADMIN',
          },
        ]);
      });
  };
  