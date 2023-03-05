const express = require("express")
const server = express()
const PORT = 8081

const cursos = ["Node JS", "JavaScript", "React Native"]

server.use(express.json())

// Middleware Global
server.use((req, res, next) => {
  console.log(`EQUSIÇÃO CHAMADA ${req.url}`)

  return next()
})

const checkCurso = (req, res, next) => {
  !req.body.name &&
    res.status(400).json({ error: "Nome do curso é obrigatório" })

  return next()
}

const checkIndexCurso = (req, res, next) => {
  const curso = cursos[req.params.index]

  if (!curso) {
    return res.status(400).json({ error: "O curso não existe" })
  }

  req.curso = curso

  return next()
}

server.get("/cursos/:index", checkIndexCurso, (req, res) => {
  return res.json(req.curso)
})

server.get("/cursos", (req, res) => {
  return res.json(cursos)
})

server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body

  cursos.push(name)

  return res.json(cursos)
})

server.put("/cursos/:index", checkIndexCurso, checkCurso, (req, res) => {
  const { index } = req.params
  const { name } = req.body

  cursos[index] = name

  return res.json(cursos)
})

server.delete("/cursos/:index", checkIndexCurso, (req, res) => {
  const { index } = req.params

  cursos.splice(index, 1)

  return res.json({ message: "curso deletado com sucesso" })
})

server.listen(PORT, () => {
  console.log("Server running...")
})
