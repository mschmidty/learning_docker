const knex = require('./knex')

module.exports = {
  addMessage(message){
    return knex('messages').insert(message, '*');
  },
  getMessages(){
    return knex('messages')
  }
}