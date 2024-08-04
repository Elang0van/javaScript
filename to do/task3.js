document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const addButton = document.getElementById("addButton");
  const submitButton = document.getElementById("submit");
  const clearButton = document.getElementById("clear");
  const closeButton = document.querySelector(
    "button[onclick*=\"document.getElementById('b').style.display='none'\"]"
  );
  const formContainer = document.getElementById("b");
  const dataTableBody = document
    .getElementById("dataTable")
    .querySelector("tbody");
  const studentForm = document.getElementById("studentForm");
  const editingIndex = document.getElementById("editingIndex");

  // Show form
  addButton.addEventListener("click", () => {
    formContainer.style.display = "block";
    editingIndex.value = ""; // Clear the editing index when adding a new entry
  });

  // Hide form
  closeButton.addEventListener("click", () => {
    formContainer.style.display = "none";
  });

  // Clear form
  clearButton.addEventListener("click", () => {
    studentForm.reset();
    document.getElementById("aa").textContent = "";
    document.getElementById("bb").textContent = "";
    document.getElementById("cc").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("birthdayError").textContent = "";
  });

  // Add input event listeners to hide validation messages
  document.getElementById("name").addEventListener("input", () => {
    document.getElementById("aa").textContent = "";
  });
  document.getElementById("mark").addEventListener("input", () => {
    document.getElementById("bb").textContent = "";
  });
  document.getElementById("roll").addEventListener("input", () => {
    document.getElementById("cc").textContent = "";
  });
  document.getElementById("contact").addEventListener("input", () => {
    document.getElementById("contactError").textContent = "";
  });
  document.getElementById("birthday").addEventListener("input", () => {
    document.getElementById("birthdayError").textContent = "";
  });

  // Handle form submission
  submitButton.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const mark = document.getElementById("mark").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const languages = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    )
      .map((cb) => cb.value)
      .join(", ");
    const education = document.getElementById("education").value;
    const gender =
      document.querySelector('input[name="gender"]:checked')?.value || "";
    const birthday = document.getElementById("birthday").value;

    let isValid = true;
    let errors = [];

    // Basic validation
    if (!name) {
      errors.push("Name is required.");
      isValid = false;
    }
    if (!mark || isNaN(mark) || mark < 0) {
      errors.push("Mark is required and should be a positive number.");
      isValid = false;
    }
    if (!roll) {
      errors.push("Roll Number is required.");
      isValid = false;
    }
    if (!contact || isNaN(contact) || contact.length < 10) {
      errors.push(
        "Contact is required and should be a valid phone number with at least 10 digits."
      );
      isValid = false;
    }
    if (!gender) {
      errors.push("Gender is required.");
      isValid = false;
    }
    if (!birthday) {
      errors.push("Birthday is required.");
      isValid = false;
    }

    // Display errors
    document.getElementById("aa").textContent = errors.includes(
      "Name is required."
    )
      ? "Name is required."
      : "";
    document.getElementById("bb").textContent = errors.includes(
      "Mark is required and should be a positive number."
    )
      ? "Mark is required and should be a positive number."
      : "";
    document.getElementById("cc").textContent = errors.includes(
      "Roll Number is required."
    )
      ? "Roll Number is required."
      : "";
    document.getElementById("contactError").textContent = errors.includes(
      "Contact is required and should be a valid phone number with at least 10 digits."
    )
      ? "Contact is required and should be a valid phone number with at least 10 digits."
      : "";
    document.getElementById("birthdayError").textContent = errors.includes(
      "Birthday is required."
    )
      ? "Birthday is required."
      : "";

    if (!isValid) {
      return; // Exit if validation fails
    }

    // Check if updating an existing row or adding a new one
    const editIndex = editingIndex.value;
    if (editIndex) {
      // Update existing row
      const row = dataTableBody.rows[editIndex];
      row.cells[0].textContent = roll;
      row.cells[1].textContent = name;
      row.cells[2].textContent = mark;
      row.cells[3].textContent = contact;
      row.cells[4].textContent = languages;
      row.cells[5].textContent = education;
      row.cells[6].textContent = gender;
      row.cells[7].textContent = birthday;
    } else {
      // Create a new row
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${roll}</td>
              <td>${name}</td>
              <td>${mark}</td>
              <td>${contact}</td>
              <td>${languages}</td>
              <td>${education}</td>
              <td>${gender}</td>
              <td>${birthday}</td>
              <td><button class="deleteButton">Delete</button></td>
              <td><button class="updateButton">Update</button></td>
            `;
      dataTableBody.appendChild(row);

      // Add event listener for delete button
      row.querySelector(".deleteButton").addEventListener("click", () => {
        row.remove();
      });

      // Add event listener for update button
      row.querySelector(".updateButton").addEventListener("click", () => {
        editRow(row);
      });
    }

    // Hide the form
    formContainer.style.display = "none";

    // Reset form
    studentForm.reset();

    // Remove error messages
    document.getElementById("aa").textContent = "";
    document.getElementById("bb").textContent = "";
    document.getElementById("cc").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("birthdayError").textContent = "";
  });

  // Function to edit a row
  const editRow = (row) => {
    const index = Array.from(dataTableBody.rows).indexOf(row);
    editingIndex.value = index; // Store the index of the row being edited

    document.getElementById("roll").value = row.cells[0].textContent;
    document.getElementById("name").value = row.cells[1].textContent;
    document.getElementById("mark").value = row.cells[2].textContent;
    document.getElementById("contact").value = row.cells[3].textContent;
    const languages = row.cells[4].textContent.split(", ");
    document.getElementById("Tamil").checked = languages.includes("Tamil");
    document.getElementById("English").checked = languages.includes("English");
    document.getElementById("Telugu").checked = languages.includes("Telugu");
    document.getElementById("Kannada").checked = languages.includes("Kannada");
    document.getElementById("education").value = row.cells[5].textContent;
    const gender = row.cells[6].textContent;
    document.querySelector(
      `input[name="gender"][value="${gender}"]`
    ).checked = true;
    document.getElementById("birthday").value = row.cells[7].textContent;

    formContainer.style.display = "block";
  };
});
