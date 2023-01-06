let itens = [
    {
        image: './assets/img/painting/clock.jpg',
        name: 'Relógio',
        price: 'R$ 150,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle',
        price: 'R$ 199,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/painting/personagem.jpg',
        name: 'C3PO',
        price: 'R$ 99,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Figure Action',
        price: 'R$ 59,00',
        type: 'Figure Actions',
    },
    {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku',
        price: 'R$ 85,00',
        type: 'Figure Actions',
    },
    {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Baby Yoda',
        price: 'R$ 70,00',
        type: 'Figure Actions',
    },
    {
        image: './assets/img/painting/quadro-decorativo-homer-simpson.jpg',
        name: 'Quadro Homer',
        price: 'R$ 80,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/painting/quadro-gengar.jpg',
        name: 'Quadro Gengar',
        price: 'R$ 80,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/painting/poster-eevee.jfif',
        name: 'Poster Eevee',
        price: 'R$ 60,00',
        type: 'Paintings',
    },
    {
        image: './assets/img/actions/Charizard.jpg',
        name: 'Charizard Figure Action',
        price: 'R$ 120,00',
        type: 'Figure Actions',
    },
    {
        image: './assets/img/actions/Luffy.jpg',
        name: 'Luffy',
        price: 'R$ 120,00',
        type: 'Figure Actions',
    },
    {
        image: './assets/img/actions/Snorlax.jpg',
        name: 'Pelucia Gigante Snorlax',
        price: 'R$ 99,00',
        type: 'Figure Actions',
    }
]


let listFigures = [];
let listFrames = [];

function separateItens(lista) {

    for (let i = 0; i < lista.length; i++) {

        let item = lista[i];

        if (lista[i].type == 'Paintings') {
            listFigures.push(item);
        } else {
            listFrames.push(item);
        }
    }
    
    console.log (listFigures, listFrames);
    return

}

separateItens(itens);


let sectionFigures = document.getElementsByClassName('frames')[0];
let sectionFrames = document.getElementsByClassName('figures')[0];


function createCard(section, list){
    
    let ul = document.createElement('ul');
    
    for(let i = 0; i < list.length; i++){
    
        let li = document.createElement('li');
        ul.appendChild(li);
    
        let div = document.createElement('div');
        div.className = 'img-card';
        li.appendChild(div);
    
        let img = document.createElement('img');
        img.src = list[i].image;
        div.appendChild(img);
    
        let h4 = document.createElement('h4');
        h4.className = 'titulo-card';
        h4.innerHTML = list[i].name;
        li.appendChild(h4);
    
        let p = document.createElement('p');
        p.className = 'valor-card';
        p.innerHTML = list[i].price;
        li.appendChild(p);
    }
    section.appendChild(ul);
    return
}

createCard(sectionFigures, listFigures);
createCard(sectionFrames, listFrames);