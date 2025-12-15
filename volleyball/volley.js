const players = [
      {
        name: "Lucas Saatkamp",
        points: "485.50 POINTS",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "images/lucas-saatkamp.jpg",
        imgAlt: "Picture of Lucas Saatkamp",
        country: "Brazil",
        current: "Sada Cruzeiro Vôlei"
      },
      {
        name: "Matt Anderson",
        points: "453.50 POINTS",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "images/matt-anderson.jpg",
        imgAlt: "Picture of Matt Anderson",
        country: "USA",
        current: "Nippon Steel Sakai Blazers"
      },
      {
        name: "Noumory Keita",
        points: "431.60 POINTS",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "images/noumury-keita.jpg",
        imgAlt: "Picture of Noumory Keita",
        country: "Mali",
        current: "Al Rayyan S.C."
      },
      {
        name: "Alexandre Elias",
        points: "375.50",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "images/Alexandre-Elias.png",
        imgAlt: "Picture of Alexandre Elias",
        country: "Brazil",
        current: "Sada Cruzeiro Vôlei"
      },
      {
        name: "Nimir Abdel-Aziz",
        points: "300 points",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "images/nimir-abdel.jpg",
        imgAlt: "Picture of Abdel-Aziz",
        country: "Netherlands",
        current: "Al Rayyan S.C."
      }
    ];

    let playerList = document.querySelector('#player-list');
    
    players.forEach(player => {

            let html = `<article class="card">
      <h2>${player.name}</h2>
      <img src= ${player.imgSrc} alt=${player.imgAlt}>
      <p><strong>Points: </strong>${player.points}</p>
      <p><strong>Country:</strong> ${player.country}</p>
      <p><strong>Current Team:</strong>${player.current}</p>
    </article>`

    playerList.innerHTML += html;
    
    });


const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    btn.classList.toggle('change');
});

          
