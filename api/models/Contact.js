/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: "integer",
      primaryKey: true
    },
    firstname: {
      type: "string",
      size: 100
    },
    lastname: {
      type: "string",
      size: 100
    },
    age: {
      type: "integer",
      size: 100,
      defaultTo: null
    }
  }
};

