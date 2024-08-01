document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('b').style.display = 'block';
});

document.getElementById('clear').addEventListener('click', function() {
    clearInputs();
});

document.getElementById('submit').addEventListener('click', function() {
    add();
});
const dataArray = [];

function add() {
    let name = document.getElementById('name').value;
    let mark = document.getElementById('mark').value;
    let rollNumber = document.getElementById('roll').value;

    let hasError = false;

    if (name === '') {
        document.getElementById('aa').innerHTML = "Please enter your name";
        hasError = true;
    } else {
 document.getElementById('name').addEventListener('change', function() {
    document.getElementById('aa').innerHTML = "";
});
    }

    if (mark === '') {
        document.getElementById('bb').innerHTML = "Please enter your mark";
        hasError = true;
    } else {
        document.getElementById('mark').addEventListener('change', function() {
            document.getElementById('bb').innerHTML = "";
        });
        
    }

    if (rollNumber === '') {
        document.getElementById('cc').innerHTML = "Please enter your roll number";
        hasError = true;
    } else {
        document.getElementById('roll').addEventListener('change', function() {
            document.getElementById('cc').innerHTML = "";
        });
       
    }

    if (hasError) {
        return;
    }

    const person = {
        rollNumber: rollNumber,
        name: name,
        mark: mark,

    };

    dataArray.push(person);
    updateTable();
    document.getElementById('b').style.display = 'none';
    clearInputs();
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


        
        // row.innerHTML = `
        //     <td>${person.rollNumber}</td>
        //     <td>${person.name}</td>
        //     <td>${person.mark}</td>
        //     <td><button onclick="deleteRow(${index})">Delete</button></td>
        //     <td><button onclick="updateRow(${index})">Update</button></td>
        // `;

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

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('mark').value = '';
    document.getElementById('roll').value = '';

}