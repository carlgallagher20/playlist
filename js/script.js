// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Lola",
	"artist":"The Kinks",
	"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"image-url":"https://i.ytimg.com/vi/LemG0cvc4oU/maxresdefault.jpg",
	songLength : "4:01 minutes",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]


function displayMySong(){
	
	$('#mySongDisplay').append('<h1>' + mySong.title +'</h1>');
    $('#mySongDisplay').append('<p>'+"A song by" + mySong.artist +'</p>');
    $('#mySongDisplay').append("<a href=\' + mySong[i].mp3-url +'/>");
    $('#mySongDisplay').append("<img src\' +  mySong[i].image-url +'/>");
    $('#mySongDisplay').append('<p>' + mySong[i].songLength +"MinutesLong"+'<p>');
    
    console.log(mySong);
	
      /*  $('#mySongDisplay').append('<h1>' + mySong[i].title +'</h1>');
        $('#mySongDisplay').append('<p>'+"A song by" + mySong[i].artist +'</p>');
         $('#mySongDisplay').append("<a href=\' + mySong[i].mp3-url +'/>");
          $('#mySongDisplay').append("<img src\' +  mySong[i].image-url +'/>");
          $('#mySongDisplay').append('<p>' + mySong[i].songLength +"MinutesLong"+'<p>');*/
}

//displayMySong();



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
  console.log("hello");
displayMySong();


});


function addSong(index){
	var songName = myPlayList[index].title;
	var songMaker = myPlayList[index].artist;
	var songPicture = myPlayList[index]["image-url"];
	var songLink = myPlayList[index]["mp3-url"];
	
	var songTitleDisplay = "<h1>"  + songName + " </h1>" ;
	var songArtistDisplay = "<p> a song by" + songMaker + " </p>";
	var songCoverDisplay = "<img src=\"" +songPicture + "\"/>";
	var songAccess = "<a href=\"" + songLink + "\"/>" + "Play Song" + "</a>";
	var finalSongDisplay = "<div id='displayDiv'></div>";

	for(var i = 0; i < myPlayList.length; i++) {
	    $("#playList").append("<h1>"+myPlayList[i]+"<h1>");
	    $('#playlistDisplay').append(songTitleDisplay);
	    $('#playlistDisplay').append(songArtistDisplay);
	    $('#playlistDisplay').append(songCoverDisplay);
	    $('#playlistDisplay').append(songAccess);
}

function clearList(){
	
}

/*$("#songAddingButton").click(function addSong(index){
	var songName = $("#songNameInput").val();
	var songMaker = $("#songArtistInput").val();
	var songPicture = $("#songImageInput").val();
	var songLink = $("#songLinkInput").val();
	
	var songNameDisplay = "<h1>"  + songName + " </h1>" ;
	var songMakerDisplay = "<p> a song by" + songMaker + " </p>";
	var songPictureDisplay = "<img src=\"" +songPicture + "\"/>";
	var songAccessNew = "<a href=\"" + songLink + "\"/>" + "Play Song" + "</a>";
	var newSongDisplay = "<div id='displayDiv'></div>";
	newSongObject[*/
		
		

	
/*for(var i = 0; i < myPlayList.length; i++) {
	    $('#playlistDisplay').append(songNameDisplay);
	    $('#playlistDisplay').append(songMakerDisplay);
	    $('#playlistDisplay').append(songPictureDisplay);
	    $('#playlistDisplay').append(newSongAccess);
}
});
  */
  



 
  
  

