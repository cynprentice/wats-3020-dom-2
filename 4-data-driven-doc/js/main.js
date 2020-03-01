function createPersonData(name, birthYear ) {
    let nameEl = document.createElement('li')
    nameEl.innerHTML = `${name} was born in ${birthYear}`
    return nameEl
  }

  // fetch data from the starwars api
  fetch('https://swapi.co/api/people')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let personList = document.querySelector('.person-api-list')
      for (let person of myJson.results) {
        personList.appendChild(createPersonData(person.name, person.birth_year))
      }
    });