const form = document.getElementById("teamForm");
const teamList = document.getElementById("teamList");

// load saved teams
let teams = JSON.parse(localStorage.getItem("teams")) || [];

function renderTeams() {
    teamList.innerHTML = "";
    teams.forEach((team, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${team.teamName}</strong><br>
            Kapten: ${team.leaderName}<br>
            Kontak: ${team.contact}
        `;
        teamList.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const teamName = document.getElementById("teamName").value;
    const leaderName = document.getElementById("leaderName").value;
    const contact = document.getElementById("contact").value;

    teams.push({ teamName, leaderName, contact });
    localStorage.setItem("teams", JSON.stringify(teams));

    form.reset();
    renderTeams();
});

renderTeams();
