/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// migrations/create_usuario_table.js

exports.up = function (knex) {
    return knex.schema.createTable('usuario', function (table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('login').notNullable();
      table.string('senha').notNullable();
      table.string('roles').notNullable().defaultTo('USER');
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  
  exports.down = function (knex) {
    return knex.schema.dropTable('usuario');
  };
  