function getNameInfo(){
    const charactersNameInput=document.getElementById("characterName");
    const characterInfo = document.getElementById("charactersInfo");

    const charactersName = charactersNameInput.value.toLocaleLowerCase();

    fetch(`http://localhost:3000/characters/${charactersName}`)
    .then(response => response.json())
    .then(
        data =>{ const {name, species, image} = data;
        characterInfo.innerHTML=`
        <h2>${name}</h2>
        <img src="${image}" alt="${name}"/>
        <p>${species}</p>
        
        `
    }).catch(error => characterInfo.innerHTML=`<p>No se puede acceder</p>`);
};