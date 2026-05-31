const players = {
    ronaldo: {
        name: "Cristiano Ronaldo",
        position: "Left Winger / Central Forward",
        birthdate: "1985-02-05",
        nationality: "Portugal",
        club: "Al-Nassr-FC",
        goals: 973,
        assists: 257,
        img: "../img/cr.jfif"
    },
    mbappe: {
        name: "Kylian Mbappe Lottin",
        position: "Left Winger / Central Forward",
        birthdate: "1998-12-20",
        nationality: "France",
        club: "Real Madrid CF",
        goals: 425,
        assists: 169,
        img: "../img/mbappe-p.jfif"
    },
    messi: {
        name: "Lionel Andres Messi",
        position: "Right Winger / Attacking Midfielder",
        birthdate: "1987-06-24",
        nationality: "Argentina",
        club: "Inter Miami",
        goals: 910,
        assists: 414,
        img: "../img/messi-pic.jpg"
    },
    lewandowski: {
        name: "Robert Lewandowski",
        position: "Central Forward",
        birthdate: "1988-08-21",
        nationality: "Poland",
        club: "Barcelona",
        goals: 717,
        assists: 193,
        img: "../img/lewandowski-pic.jfif"
    },
    kane: {
        name: "Harry Kane",
        position: "Central Forward",
        birthdate: "1993-07-28",
        nationality: "England",
        club: "Bayern Munich",
        goals: 536,
        assists: 153,
        img: "../img/kane-pic.jfif"
    },
    haaland: {
        name: "Erling Haaland",
        position: "Central Forward",
        birthdate: "2000-07-21",
        nationality: "Norway",
        club: "Manchester City FC",
        goals: 308,
        assists: 68,
        img: "../img/haaland-pic.jfif"
    },
    neymar: {
        name: "Neymar",
        position: "Right Winger / Attacking Midfielder",
        birthdate: "1992-02-05",
        nationality: "Brazil",
        club: "Santos",
        goals: 445,
        assists: 258,
        img: "../img/neymar-pic.jfif"
    },
    benzema: {
        name: "Karim Benzema",
        position: "Central Forward",
        birthdate: "1987-12-19",
        nationality: "France",
        club: "Al-Hilal",
        goals: 518,
        assists: 223,
        img: "../img/benzema-pic.jfif"
    },
    suarez: {
        name: "Luis Suarez",
        position: "Central Forward",
        birthdate: "1987-01-24",
        nationality: "Uruguay",
        club: "Retired",
        goals: 600,
        assists: 293,
        img: "../img/suarez-pic.jfif"
    },
    kevin: {
        name: "Kevin De Bruyne",
        position: "Central Midfielder / Attacking Midfielder",
        birthdate: "1991-06-28",
        nationality: "Belgium",
        club: "Napoli",
        goals: 186,
        assists: 304,
        img: "../img/kdb.jfif"
    },
    zlatan: {
        name: "Zlatan Ibrahimovic",
        position: "Central Forward / Attacking Midfielder",
        birthdate: "1981-10-03",
        nationality: "Sweden",
        club: "Retired",
        goals: 573,
        assists: 230,
        img: "../img/ibra.jfif"
    },
};

function calcAge(birthdate) {
    const born = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    const m = today.getMonth() - born.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < born.getDate())) {
        age--;
    }
    return age;
}

function renderPlayer() {
    const card = document.getElementById('player-card');
    const playerKey = card.getAttribute('data-player');
    const player = players[playerKey];

    if (!player) {
        card.innerHTML = "<h2>Player not found</h2>";
        return;
    }

    const age = calcAge(player.birthdate);
    const contribution = player.goals + player.assists;

    card.innerHTML = `
        <img src="${player.img}" alt="${player.name}" onerror="this.src='https://via.placeholder.com/150'">
        <h1>${player.name}</h1>
        <h3>${player.club}</h3>
        <div class="stats">
            <div><b>Position:</b> ${player.position}</div>
            <div><b>Age:</b> ${age} years</div>
            <div><b>Nationality:</b> ${player.nationality}</div>
            <div<b>Career Goals:</b> ${player.goals.toLocaleString()}</div>
            <div><b>Assists:</b> ${player.assists.toLocaleString()}</div>
            <div><b>Goal Contributions:</b> ${contribution.toLocaleString()}</div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderPlayer);