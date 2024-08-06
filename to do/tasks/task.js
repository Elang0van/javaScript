document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('b').style.display = 'block';
});

document.getElementById('clear').addEventListener('click', function() {
    clearInputs();
});


// let button=document.getElementById('submit');
//  button.addEventListener('click',() =>{
//     dataArray.push(input.value)
//     add(input.value)
//     input.value='';
//  })


const dataArray = [];

//document.getElementById('studentForm').addEventListener('submit', (event) => {
//event.preventDefault();
//add();
//});

function add() {

let name = document.getElementById('name').value;
let mark = document.getElementById('mark').value;
let rollNumber = document.getElementById('roll').value;

if(name !=='' && mark !=='' && rollNumber!==''){
document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('b').style.display = 'none';
});
}
if(name !==''){
    document.getElementById('submit').addEventListener('click',function(){
        document.getElementById('aa').innerHTML="please enter your name"
    })
}
  
document.getElementById('name').value = '';
document.getElementById('mark').value = '';
document.getElementById('roll').value = '';

// document.getElementById('clear').addEventListener('click',function(){
//       document.getElementById('name').value = '';
//      document.getElementById('mark').value = '';
//      document.getElementById('roll').value = '';
//  })



const person = {
rollNumber: rollNumber,
name: name,
mark: mark
};

if(name !=='' && mark!=='' && rollNumber!=='' )
dataArray.push(person);
updateTable();

let hasError = false;

    if (name == '') {
        document.getElementById('aa').innerHTML = "Please enter your name";
        hasError = true;
    } else {
        document.getElementById('aa').innerHTML = "";
    }

    if (mark == '') {
        document.getElementById('bb').innerHTML = "Please enter your mark";
        hasError = true;
    } else {
        document.getElementById('bb').innerHTML = "";
    }

    if (rollNumber == '') {
        document.getElementById('cc').innerHTML = "Please enter your roll number";
        hasError = true;
    } else {
        document.getElementById('cc').innerHTML = "";
    }

    if (hasError) {
        return;
    }
}
function updateTable() {
const tbody = document.querySelector('#dataTable tbody');
tbody.innerHTML = '';

dataArray.forEach((person, index) => {
const row = document.createElement('tr');
const rollNumberCell = document.createElement('td');
const nameCell = document.createElement('td');
const markCell = document.createElement('td');
const deleteCell = document.createElement('td');
const updateCell = document.createElement('td');
const deleteButton = document.createElement('button');
const updateButton = document.createElement('button');

deleteButton.innerHTML = "Delete";
deleteButton.onclick = () => deleteRow(index);

updateButton.innerHTML = "Update";
updateButton.onclick = () => updateRow(index);

rollNumberCell.textContent = person.rollNumber;
nameCell.textContent = person.name;
markCell.textContent = person.mark;

deleteCell.appendChild(deleteButton);
updateCell.appendChild(updateButton);

row.appendChild(rollNumberCell);
row.appendChild(nameCell);
row.appendChild(markCell);
row.appendChild(deleteCell);
row.appendChild(updateCell);

tbody.appendChild(row);
});
}

function deleteRow(index) {
dataArray.splice(index, 1);
updateTable();
}

function updateRow(index) {
let name = prompt("Please enter the new name", dataArray[index].name);
let mark = prompt("Please enter the new mark", dataArray[index].mark);
let rollNumber = prompt("Please enter the new roll number", dataArray[index].rollNumber);

dataArray[index].name = name;
dataArray[index].mark = mark;
dataArray[index].rollNumber = rollNumber;

updateTable();
}