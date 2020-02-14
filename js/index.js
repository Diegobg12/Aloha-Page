         
function myFunction() {
    // alert('Thank you for subscribe');
 let email = document.getElementById('email').value;
 let top = document.getElementById("container")

 if (email.match(/@/)){
        alert('Thank you for subscribe');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
 }
 else{
    alert('This is not an Email, Please try again');

 }

}