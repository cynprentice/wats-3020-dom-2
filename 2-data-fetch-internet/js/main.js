function createPersonEl(title, firstname, lastname, email) {
  let nameEl = document.createElement('li')
  let formattedTitle = formatTitle(title)
  nameEl.innerHTML = `${formattedTitle} ${firstname} ${lastname} ${email}`
  return nameEl
}
// fetch data from the randomuser.me api
fetch('https://randomuser.me/api/?results=3')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      personList.appendChild(createPersonEl(person.name.title, person.name.first, person.name.last, person.email))
    }
  });

//capitalize title and add . to end of abbreviated titles
function formatTitle(title) {
  let formattedTitle = title;
  if (title) {
    let capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    let abbrTitles = ['Mr', 'Ms', 'Mrs']
    if (abbrTitles.includes(title)) {
      formattedTitle = `${capitalizedTitle}.`
    }
  }
  return formattedTitle;

}