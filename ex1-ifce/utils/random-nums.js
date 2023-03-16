const randomNums = () => {
  const nums = []

  for (i = 1; i <= 6; i++) {
    const newNum = parseInt(Math.random() * 60)

    nums.push(newNum)
  }

  return nums
}

module.exports = randomNums
