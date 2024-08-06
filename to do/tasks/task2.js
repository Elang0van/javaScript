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
    let contact = document.getElementById('contact').value;
    let languages = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value);
    let education = document.getElementById('education').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let birthday = document.getElementById('birthday').value;

    if(name == '')
        document.getElementById('aa').innerHTML="enter your name ";

    const person = {
        rollNumber: rollNumber,
        name: name,
        mark: mark,
        contact: contact,
        languages: languages.join(", "),
        education: education,
        gender: gender,
        birthday: birthday
    };

    if(name!=='',mark!=='',rollNumber!=='')
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
        const contactCell = document.createElement('td');
        const languageCell = document.createElement('td');
        const educationCell = document.createElement('td');
        const genderCell = document.createElement('td');
        const dateCell = document.createElement('td');
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
        contactCell.textContent = person.contact;
        languageCell.textContent = person.languages;
        educationCell.textContent = person.education;
        genderCell.textContent = person.gender;
        dateCell.textContent = person.birthday;

        deleteCell.appendChild(deleteButton);
        updateCell.appendChild(updateButton);

        row.appendChild(rollNumberCell);
        row.appendChild(nameCell);
        row.appendChild(markCell);
        row.appendChild(contactCell);
        row.appendChild(languageCell);
        row.appendChild(educationCell);
        row.appendChild(genderCell);
        row.appendChild(dateCell);
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
    let contact = prompt("Please enter the new contact", dataArray[index].contact);
    let languages = prompt("Please enter the new languages", dataArray[index].languages);
    let education = prompt("Please enter the new education", dataArray[index].education);
    let gender = prompt("Please enter the new gender", dataArray[index].gender);
    let birthday = prompt("Please enter the new birthday", dataArray[index].birthday);

    dataArray[index].name = name;
    dataArray[index].mark = mark;
    dataArray[index].rollNumber = rollNumber;
    dataArray[index].contact = contact;
    dataArray[index].languages = languages;
    dataArray[index].education = education;
    dataArray[index].gender = gender;
    dataArray[index].birthday = birthday;

    updateTable();
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('mark').value = '';
    document.getElementById('roll').value = '';
    document.getElementById('contact').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    document.getElementById('education').value = '';
    document.querySelectorAll('input[name="gender"]').forEach(el => el.checked = false);
    document.getElementById('birthday').value = '';
}