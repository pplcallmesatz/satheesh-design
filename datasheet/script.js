				
    //create firebase reference
var dbRef = new Firebase("https://datasheet-a7eeb.firebaseio.com");
var contentsRef = dbRef.child('contents')

contentsRef.on('child_added', function(snap) {
    var sv = snap.val();
    var sk = snap.key();
//  console.log("added", sk, sv);
  document.querySelector('#contents').innerHTML += (contactHtmlFromObjectTwo(sv, sk));
});
        
function contactHtmlFromObjectTwo(content, keyy){
		var html = '';
		html += '<li class="content">';
			html += '<div>';
		html += '<button class="delete-btn"  id="'+keyy+'" onClick="clickFun(this.id)"> <i class="fa fa-trash-o"></i></button>';
	html += '<a target="_blank" href="'+content.url+'">';
			html += '<h1 class="title">'+content.title+'</h1>';
	
			html += '<div class="author">'+content.author+'</div>';
			html += '<div class="description">'+content.description+'</div>';
			html += '<div class="footer">';
			html += '<div class="licence">'+content.license+'</div>';
				html += '<div class="tag"><img src="'+content.type+'" alt="logo"/></div>';
			html += '</div>';
	html += '</a>';
				html += '</div>';
			
			html += '</li>';
	return html;
		}

			
		

    