// Dependences
const express = require("express")
const router = express.Router()
const axios = require("axios")
const pdfkit = require("pdfkit")
const fs = require("fs")

// Externals
const getCities = require("../api/get-cities")
const randomNums = require("../utils/random-nums")
const verifyState = require("../utils/verifyState")

router.get("/numeros-aleatorios", (req, res) => {
  return res.send({ random_numbers: randomNums() })
})

router.get("/cidades/:letra", async (req, res) => {
  const letter = req.params.letra
  const letterIsValid = letter.length > 1

  letterIsValid &&
    res.status(400).json({
      error: "[SERVER]: Pass the letter as a single character",
    })

  const data = getCities()

  const citys = data.filter((city) =>
    city.nome.toLowerCase().startsWith(letter)
  )

  return res.json({ citys })
})

router.get("/estado/:uf/cidades", async (req, res) => {
  const region = req.params.uf
  const regionIsValid = verifyState(region.toUpperCase())

  const regions = []

  const pdf = new pdfkit()

  regionIsValid === -1 &&
    res.status(400).json({
      erro: "Undefined region",
    })

  await axios
    .get(
      `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${region}/distritos`
    )
    .then((JSON) => {
      regions.push(JSON)
    })

  regions.forEach((region) => {
    pdf.text(region.nome)
  })

  pdf.end()

  pdf.pipe(fs.createWriteStream("regions.pdf")).on("finish", () => {
    res.download("./regions.pdf")
  })
})

module.exports = router
