// return an li element made from a title, firstname, lastname and email
function createPersonEl(title, firstname, lastname, email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname}, ${email}`
  return nameEl
}


//pickup the local data.json file
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-list')
    //iterate through json data, create list elements and append to the html list
    for (let person of myJson.persons) {
      personList.appendChild(createPersonEl(person.title, person.firstname, person.lastname, person.email))
    }
  });

