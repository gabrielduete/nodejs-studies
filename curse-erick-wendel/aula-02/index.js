/*
  0 Obter um usuário
  1 Obter o número de telefone de um usuário a partir do seu id
  2 Obter o endereço do usuário pelo id
*/

const getUser = (callback) => {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'Gabriel',
      date: new Date(),
    })
  }, 1000)
}

const getTelUser = (id, callback) => {
  setTimeout(() => {
    return callback(null, {
      tel: '888888888',
      ddd: 11,
    })
  }, 2000)
}

const getLocaleUser = (id, callback) => {
  setTimeout(() => {
    return callback(null, {
      locale: 'locale',
      number: 0,
    })
  }, 2000)
}

const resolverUser = (error, user) => {
  console.log('user', user)
}

getUser((error, user) => {
  // null || "" || 0 === false
  if (error) {
    console.error('description error', error)
    return
  }

  getTelUser(user.id, (error1, tel) => {
    if (error1) {
      console.error('description error', error1)
      return
    }

    getLocaleUser(user.id, (error2, local) => {
      if (error2) {
        console.error('description error', error)
        return
      }

      console.log(`
        Nome: ${user.name},
        Endereco: ${local.locale},${local.number}
        Telefone: (${tel.ddd}) ${tel.tel}
      `)
    })
  })
})
