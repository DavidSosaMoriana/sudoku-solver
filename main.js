const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-btn')
const squares = 81  
const submission = []

for(let i = 0; i < squares; i++) {
  const inputElement = document.createElement('input')
  inputElement.setAttribute('type', 'number')
  inputElement.setAttribute('min', 1)
  inputElement.setAttribute('max', 9)
  puzzleBoard.appendChild(inputElement)
}

const joinValues = () => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.value) {
      submission.push(input.value)
    } else {
      submission.push('.')
    }
  })
  console.log(submission)
}

const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll('input')
  if(isSolvable && solution) {
   inputs.forEach((input, 1) => {
    input.value = solution{i}
   })
}

const solve = () => {
joinValues()
const data = submission.join('')
console.log('data', data);  
const options = {
  method: 'POST',
  url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '159cb5e053msh672957000ceedfcp172c5cjsn3c838498df74',
    'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
  },
  data: data
};

axios.request(options).then((response) => {
	console.log(response.data);
  populateValues(response.data.solvable, response.data.solution)
}).catch((error) => {
	console.error(error);
});
}

solveButton.addEventListener('click', solve)