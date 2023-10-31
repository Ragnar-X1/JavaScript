const accountId = 1234
let accountEmail = "ragnar@google.com"
var accountPassword = "Ragnar"
var accountCity = "Bang"
let state;

// accountId = 4  not allowed because const keyword

accountEmail = "ragnar@email.com"
accountPassword = "Lothbroook"
accountCity = "Chandigarh"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)

// Another way of doing this in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, state])

// Prefer not to use var because of the issue in block space and functional scope 