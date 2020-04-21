document
  .querySelector('#submit')
  .addEventListener('click', function calculateTip (e) {
    e.preventDefault()

    const cost = document.querySelector('#bill-cost').value
    const service = document.querySelector('#service-quality').value
    const people = document.querySelector('#people').value

    document.querySelector('#response').innerHTML = ''

    const servicePercent = {
      amazing: 0.3,
      okay: 0.2,
      bad: 0.05
    }

    const tipCost = function (cost, service, people) {
      totalCost = (parseInt(cost) * servicePercent[service]) / parseInt(people)
    }

    tipCost(cost, service, people)

    response = document.createElement('p')
    response.textContent = `The total cost of the bill is $${cost}. Each person needs to pay $${(cost / people).toFixed(2)} for the bill - $${totalCost.toFixed(2)} of this is in tips.`
    document.querySelector('#response').appendChild(response)
})

// console.log(parseInt('34'))

//   cost * percentage / people

//   service percentage
