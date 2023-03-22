// Metodos: index, show, update, store, destroy
/*

index: listagem de sessões
store: cria uma seção
show: listar uma única sessão
update: atualizar uma seção
destroy: deletar uma sessão

*/

import * as Yup from "yup"
import User from "../models/User"

class SessionControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    })

    const { email } = req.body

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Email invalido." })
    }

    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email })
    }

    return res.json(user)
  }
}

export default new SessionControler()
