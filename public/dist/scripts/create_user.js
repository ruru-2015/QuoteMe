/*
User enters email and password in separate fields.
Click listener on form submit.
Store data as variables.
Set command.

*/

var ref = new Firebase("https://quotemedad.firebaseio.com");
var userEmail = "";
var userPass = "";

// ref.createUser({
//   email    : 'u@me.com',
//   password : '12345'
//   }, function(error, userData) {
//     if (error) {
//       console.log("Error creating user:", error);
//     } else {
//       console.log("Successfully created user account with uid:", userData.uid);
//     }
//   });


