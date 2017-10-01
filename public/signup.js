const firstname= document.getElementById('firstname');
const username = document.getElementById('username');
const psw = document.getElementById('psw');
const conpsw = document.getElementById('conpsw');
const email = document.getElementById('email');
const signUp = document.getElementById('submit');


 var config = {
    apiKey: "AIzaSyDRSMxZObtlFU7eDgkWmJkMJrK4RfOWZPg",
    authDomain: "test1-aa9c8.firebaseapp.com",
    databaseURL: "https://test1-aa9c8.firebaseio.com",
    projectId: "test1-aa9c8",
    storageBucket: "test1-aa9c8.appspot.com",
    messagingSenderId: "569411524002"
  };
  firebase.initializeApp(config);

function doSomething() {
    // Make quick references to our fields.
var fname = document.getElementById("firstname").value;
var uname = document.getElementById("username").value;
var email = document.getElementById("email").value;
var psw = document.getElementById("psw").value;
var conpsw = document.getElementById("conpsw").value;
if(uname.length<6)
{
     alert("User name should have at least 6 characters");
     return false;
}
else if(psw.length<6)
{
     alert("Password should have at least 6 characters");
     return false;
}
else if(psw != conpsw)
{
      alert("Password does not match");
      return false;
}
else
{
complete_signup();

}
}


function complete_signup() {
	const email_val = email.value; //check for real email
	const pass_val = psw.value;
	const auth = firebase.auth();


	const promise = auth.createUserWithEmailAndPassword(email_val,pass_val).catch(function	(error) {
  console.log(error.message);
});
	

	firebase.auth().onAuthStateChanged(function(user) {
if (user) {
	
    		console.log("Signed Up "+ JSON.stringify(user));
		const userId = user.uid;
  		firebase.database().ref('users/' + userId).set({
		fullname: firstname.value,    		
		username: username.value,
    		email: email_val
  		}).then(function() {
    console.log('Data write succeeded');
alert("Sign up complete");
	window.location="index.html";
  })
  .catch(function(error) {
    console.log('Data write failed');
  });

		 //
		 //

  	} 
	else {
    		console.log("No user is signed up.")
  	}
	
});

  	

}
