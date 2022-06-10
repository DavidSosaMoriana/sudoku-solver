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

const solve = () => {

  const url = 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/';
  
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '159cb5e053msh672957000ceedfcp172c5cjsn3c838498df74',
      'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
    },
    body: '{"input":[0,0,8,9,0,0,4,0,0,0,0,5,6,0,0,0,0,0,3,0,0,7,0,0,6,0,9,5,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,6,5,0,0,2,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,8,9,0,0,0,7,0,4,0,0,2,0,0]}'
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

solveButton.addEventListener('click', solve)