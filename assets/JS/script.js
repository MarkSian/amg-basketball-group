//global variables
const modal = document.getElementById('confirmationModal');
const closeBtn = document.querySelector('.clsoe');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');

//Logic to grab form data and store into local storage
document.getElementById('playerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    //show confirmation modal
    document.getElementById('confirmationModal').style.display = 'block';
});

document.getElementById('confirmAdd').addEventListener('click', function () {
    //get player data from the form
    const playerName = document.getElementById('playerName').value;
    const playerSalary = parseFloat(document.getElementById('playerSalary').value) || 0;
    const yearsOnTeam = parseInt(document.getElementById('yearsOnTeam').value) || 0;
    const position = document.getElementById('position').value;
    const roll = document.getElementById('roll').value;

    //create player object
    const player = {
        name: playerName,
        salary: playerSalary,
        yearsOnTeam: yearsOnTeam,
        position: position,
        roll: roll,
    };

    //store player in local storage
    let Players = JSON.parse(localStorage.getItem('players')) || [];
    Players.push(player);
    localStorage.setItem('players', JSON.stringify(players));

    //hide confirmation modal
    document.getElementById('confirmationModal').style.display = 'none';

    //display players
    displayplayers();
});

document.getElementById('cancelAdd').addEventListener('click', function () {
    //hide confirmation modal
    document.getElementById('confirmationModal').style.display = 'none';
});
//grab from local storage and display on table
function displayplayers() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
    const playerTableBody = document.getElementById('playerTable').getElementsByTagName('tbody')[0];

    //clear rows
    playerTableBody.innerHTML = '';

    //populate table
    players.forEach(player => {
        const row = playerTableBody.insertRow();
        row.insertCell(0).textContent = player.name;
        row.insertCell(1).textContent = player.salary;
        row.insertCell(2).textContent = player.yearsOnTeam;
        row.insertCell(3).textContent = player.position;
        row.insertCell(4).textContent = player.role;
    });
}
displayplayers();



