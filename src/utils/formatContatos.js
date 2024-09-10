function formatContatos(contatos, userId) {
  return contatos.map((contato) => {
    // Verificar se o usuário do contato é o mesmo que o pesquisado
    const isUser = contato.User.id === userId;
    return {
      username: isUser ? contato.ContactUser.username : contato.User.username, // Se o usuário do contato é o pesquisado, mantenha o nome do contato, senão use o nome do usuário do contato
      id: isUser ? contato.ContactUser.id : contato.User.id, // Se o usuário do contato é o pesquisado, mantenha o ID do contato, senão use o ID do usuário do contato
    };
  });
}

module.exports = { formatContatos };

// return {
//   id: contato.id,
//   User: {
//     username: isUser ? contato.User.username : contato.ContactUser.username, // Se o usuário do contato é o pesquisado, mantenha o nome dele, senão use o nome do contato
//     id: userId, // Sempre define o ID do usuário pesquisado
//   },
//   contact: {
//     username: isUser ? contato.ContactUser.username : contato.User.username, // Se o usuário do contato é o pesquisado, mantenha o nome do contato, senão use o nome do usuário do contato
//     id: isUser ? contato.ContactUser.id : contato.User.id, // Se o usuário do contato é o pesquisado, mantenha o ID do contato, senão use o ID do usuário do contato
//   },
// };
