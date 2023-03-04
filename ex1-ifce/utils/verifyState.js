const verifyState = (state) => {
  const brStates = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PR",
    "PI",
    "RO",
    "RJ",
    "RN",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ]

  return brStates.indexOf(state)
}

module.exports = verifyState
