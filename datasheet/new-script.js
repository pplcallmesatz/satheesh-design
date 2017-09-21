//create firebase reference
var dbRef = new Firebase("https://datasheet-a7eeb.firebaseio.com");
var contentsRef = dbRef.child('contents')










  	//Second
		

contentsRef.on("child_added", function(snap) {
    var sv = snap.val();
    var sk = snap.key();
//  console.log("added", sk, sv);
//  document.querySelector('#contents').innerHTML += (contactHtmlFromObjectTwo(sv, sk));
});

//save contact
document.querySelector('.valTwo').addEventListener("click", function( event ) {  
  event.preventDefault();
//            alert("valTwo");

        valTwo();
    

}, false);




		function valTwo() {
//    console.log("execution");
      if( document.querySelector('#title').value != '' || document.querySelector('#url').value != '' ){
    contentsRef
      .push({
        title: document.querySelector('#title').value,
        url: document.querySelector('#url').value,
        description: document.querySelector('#description').value,
        license: document.querySelector('#license').value,
        author: document.querySelector('#author').value,
        type: document.querySelector('#type').value
       
      })
      contactFormTwo.reset();
		  $(".modal").hide();
  } else {
    alert('Please fill atlease name or email!');
  }
}
		


//
//function clickk(key){
//	console.log(key);
//    var sss = $(this).parent().data("itemm");
//	
//	console.log(sss);
//    
//    };





