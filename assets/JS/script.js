//Logic to grab form data and store into local storage
const form = document.getElementById('myForm');
const modal = document.getElementById('confirmationModal');
const closeBtn = document.querySelector('.close');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');
const table = document.getElementById('playerTable');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const playerSalary = document.getElementById('playerSalary').value;
    const yearsOnTeam = document.getElementById('yearsOnTeam').value;
    const position = document.getElementById('postiton').value;
    const roll = document.getElementById('roll').value;

    const playerInfo = {
        playerName:playerName,
        playerSalary:playerSalary,
        yearsOnTeam:yearsOnTeam,
        position:position,
        roll:roll,
    };

    const teamInfo = JSON.parse(localStorage.getItem('playerInfo')) || [];
    teamInfo.push(playerInfo);
    localStorage.setItem('teamInfo', JSON.stringify(teamInfo));
    modal.style.display = 'block';
});

//close modal when the close button is clicked
closeBtn.onclick = function(){
    modal.style.display = 'none';
};

//handle confirmation
confirmButton.onclick = function() {
    //store player data to the local storage
    localStorage.setItem();
    //clear input field after submission
    document.getElementById('teamInfo').value='';
    //close modal
    modal.style.display = 'none';
};

//Handle cancellation
cancelButton.onclick = function() {
    modal.style.display = 'none';
};
//grab from local storage and display on table
function displayplayers() {
    const storedPlayers = JSON.parse(localStorage.getItem('teamInfo')) || [];
    const tbody = document.getElementById('playerTable').getElementsByTagName('tbody')[0];
    //clear existing rows
    tbody.innerHTML = '';
    //populate table with stored data
    storedPlayers.forEach(Data => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.textContent = data.playerName;
        cell2.textContent = data.playerSalary;
        cell3.textContent = data.yearsOnTeam;
        cell4.textContent = data.position;
        cell5.textContent = data.roll;
    });
}
window.onload = displayplayers;



