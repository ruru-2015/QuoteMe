var ref = new Firebase("https://quotemedad.firebaseio.com");

function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}

// find a suitable name based on the meta info given by each provider
function getName(authData) {
  switch(authData.provider) {
    case 'password':
      return authData.password.email.replace(/@.*/, '');
    case 'twitter':
      return authData.twitter.displayName;
    case 'facebook':
      return authData.facebook.displayName;
    case 'github':
      return authData.github.displayName;
  }
}

var isNewUser = true;

ref.authWithOAuthPopup("github", authHandler);
// ref.authWithOAuthRedirect("github", authHandler);
ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into the database so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});
