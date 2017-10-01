const userName = document.getElementById('userName');
const pass = document.getElementById('pass');
const email = document.getElementById('email');
const login = document.getElementById('login');


login.addEventListener('click',e=> {
	const email_val = email.value;
	const pass_val = pass.value;
	const auth = firebase.auth();

	console.log("logged");
	const promise = auth.signInWithEmailAndPassword(email_val,pass_val);
	console.log("something");

	var user =firebase.auth().currentUser;
  	if (user) {
    		console.log("User state changed");
		function Redirect() {
               window.location="index.html";
            }
		//window.location.href = "index.html";
  	} 
	else {
    		console.log("No user is signed in.")
  	}
	
	
	
	promise.catch(e => console.log(e.message));

	});
