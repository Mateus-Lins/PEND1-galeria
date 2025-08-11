'use strict'

function criarImagem(urlImagem){
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = urlImagem.url

    galeria.appendChild(img)
    
}

function carregarImagens(){
    const imagens = [
       
        {
            nome: 'Peixe1',
            url: './img/peixe1.webp'
        },

        {
            nome: 'Peixe2',
            url: './img/peixe2.webp'
        },

        {
            nome: 'Peixe3',
            url: './img/peixe3.webp'
        },

        {
            nome: 'Peixe4',
            url: './img/peixe4.webp'
        },

        {
            nome: 'Peixe5',
            url: './img/peixe5.webp'
        },

        {
            nome: 'Peixe6',
            url: './img/peixe6.webp'
        },

        {
            nome: 'Peixe7',
            url: './img/peixe7.webp'
        },

        {
            nome: 'Peixe8',
            url: './img/peixe8.webp'
        },

        {
            nome: 'Peixe9',
            url: './img/peixe9.webp'
        },

        {
            nome: 'Peixe10',
            url: './img/peixe10.webp'
        }
    ]

    imagens.forEach(criarImagem)


}

carregarImagens()