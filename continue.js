function changebc(){
    document.getElementById("bc1").style.background = "red";
}
function changebcback(){
    document.getElementById("bc1").style.background = "lightblue";
}
function change_img() {
    var img = document.getElementById("img11");
    img.src = "file:///C:/Users/begim/Downloads/db6a9ae5-83ca-4bf6-8544-74829df345f9.jpeg";
}
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
  var paragraph = document.createElement('p');
  var deleteButton = document.createElement('button');

  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;

  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-button');

  toDoContainer.appendChild(paragraph);
  paragraph.appendChild(deleteButton);

  inputField.value = "";

  paragraph.addEventListener('click', function() {
    paragraph.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener('click', function() {
    toDoContainer.removeChild(paragraph);
  });
});

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const input = document.getElementById('numberInput').value;
    const sortOrder = document.querySelector('input[name="sortOrder"]:checked').value;
    const resultDiv = document.getElementById('result');
    const numberArray = input.split(',').map(num => num.trim()).filter(num => !isNaN(num) && num !== "");

    if (numberArray.length === 0) {
        resultDiv.innerText = 'Please enter valid numbers.';
        return;
    }
    const numbers = numberArray.map(Number);
    if (sortOrder === 'ascending') {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }
    resultDiv.innerText = `Sorted Numbers: ${numbers.join(', ')}`;
});
