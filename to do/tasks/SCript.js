const dataArray = [];

function add() {
    let name = document.getElementById('name');
    let mark = document.getElementById('mark');
    let rollNumber = document.getElementById('roll');

    const person = {
        rollNumber: rollNumber,
        name: name,
        mark: mark
    };

    dataArray.push(person);
    updateTable();
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
let name = prompt("Please enter the new name", );
let mark = prompt("Please enter the new mark", dataArray[index].mark);
let rollNumber = prompt("Please enter the new roll number", dataArray[index].rollNumber);

dataArray[index].name = name;
dataArray[index].mark = mark;
dataArray[index].rollNumber = rollNumber;

updateTable();
}