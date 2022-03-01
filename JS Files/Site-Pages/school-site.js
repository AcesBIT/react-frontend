// For Dynamically generating date list
let dateDropdown = document.getElementById('year');

let currentYear = new Date().getFullYear();
let earliestYear = currentYear-20;

while (currentYear >= earliestYear) {
    let dateOption = document.createElement('option');
    dateOption.text = currentYear;
    dateOption.value = currentYear;
    dateDropdown.add(dateOption);
    currentYear -= 1;
}
