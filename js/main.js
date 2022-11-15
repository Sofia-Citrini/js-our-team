const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Menager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

const membriContainer = document.querySelector('.membri-container');

for (let i = 0; i < team.length; i++) {
    const membriTeam = team[i];
    console.log(`Nome:${membriTeam.nome}, Ruolo:${membriTeam.ruolo}, Foto:${membriTeam.foto}`);

    membriContainer.innerHTML += `<div class="card" style="width: 18rem; flex-basis: calc((100% / 2) - 2rem); margin: 1rem;">
                                    <img class="card-img-top" src="${membriTeam.foto}" alt="Card image cap">
                                    <div class="card-body">
                                        <h4>${membriTeam.nome}</h4>
                                        <h5>${membriTeam.ruolo}</h5>
                                    </div>
                                </div>`;
                                
    // const cardMembro = document.createElement('div');
    // cardMembro.style.flexBasis = 100 / 3 + '%';
    // cardMembro.innerHTML = `Nome:${membriTeam.nome}, Ruolo:${membriTeam.ruolo}, Foto:${membriTeam.foto}`;
    // membriContainer.append(cardMembro);
}
