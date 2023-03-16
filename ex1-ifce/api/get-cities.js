const axios = require("axios")

const getCities = async () => {
  const { data } = await axios
    .get("http://servicodados.ibge.gov.br/api/v1/localidades/distritos")
    .catch((err) => err.response)

  return data
}

let meuOvo = []

getCities().then((JSON) => meuOvo.push(JSON))

console.log(meuOvo)

module.exports = getCities
