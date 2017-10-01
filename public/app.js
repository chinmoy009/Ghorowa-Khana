



//GET ELEMENTS
const fullName = document.getElementById('fullName');
const userName = document.getElementById('userName');
const psw = document.getElementById('psw');
const passrep = document.getElementById('passRep');
const email = document.getElementById('email');
const signup = document.getElementById('signup');
const testbtn = document.getElementById('testbtn');



//PERFORM LOGIN 
testbtn.addEventListener('click',e=> {
	const email_val = email.value;
	const pass_val = psw.value;
	const auth = firebase.auth();


	const promise = auth.signInWithEmailAndPassword(email_val,pass_val);
	console.log("something");

	var user =firebase.auth().currentUser;
  	if (user) {
    		console.log("User state changed");
  	} 
	else {
    		console.log("No user is signed in.")
  	}
	
	promise.catch(e => console.log(e.message));

	});


//PERFORM SIGNUP
signup.addEventListener('click',e=> {
	const email_val = email.value; //check for real email
	const pass_val = psw.value;
	const auth = firebase.auth();


	const promise = auth.createUserWithEmailAndPassword(email_val,pass_val);
	
	promise.catch(e => console.log(e.message));

	});




 /*var user =firebase.auth().currentUser;
  if (user) {
    console.log("User state changed");
  } else {
    console.log("No user is signed in.")
  }
*/
