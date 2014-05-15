/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('database/database.js');
Ti.include('notes.js');

function clearWindow(){
	//Removing elements from view
	var mainView = Ti.UI.currentWindow;
		
	if(mainView && mainView.children != undefined){
	    // Save children      
	    var removeData = [];
	    for (i = mainView.children.length; i > 0; i--){
	        removeData.push(mainView.children[i - 1]);  
	    };
		 
	    // Remove children
	    for (i = 0; i < removeData.length - 1; i++){
	        mainView.remove(removeData[i]);
	    }
	    removeData = null;
	}
}

function changeWindow(index, id, currentTitle, currentNote){
	var win = Ti.UI.currentWindow;
	
	clearWindow();
	
	if(index == 1){
		var newNote = require('newNote');
		var newNoteWindow = new newNote();
		win.add(newNoteWindow);	
	} 
	else if(index == 2){
		var header = Ti.UI.createLabel({
			text:'NOTES / CREATION DATE',
			backgroundColor:'#2E2E2E',
			color:'#FFFFFF',
			font:{ fontSize:'16dp', fontWeight:'bold'},
			height:'40dp',
			width:'90%',
			top:'80dp',
			textAlign:'center'
		});
			
		var arrNotes = getNotes();
		var data = JSON.parse(arrNotes);
		var notes = showNotes(data);
		
		win.add(header);
		win.add(notes);
	}

}

var menu = function(){
	var mainView = Ti.UI.createView({
		width:'100%',
		height:'50dp',
		backgroundColor:'#000000',
		layout:'horizontal',
		top:0
	});
	
	var newNote = Ti.UI.createImageView({
		image:'images/newNote.png',
		width:'30dp',
		height:'30dp'
	});
	var newNoteLabel = Ti.UI.createLabel({
		text:'NEW',
		color:'#FFFFFF',
		font:{ fontSize:'12dp', fontWeight:'bold'}
	});
	var newNoteButton = Ti.UI.createView({
		width:'50%',
		height:'50dp',
		layout:'vertical'
	});
	newNoteButton.add(newNote);
	newNoteButton.add(newNoteLabel);
	newNoteButton.addEventListener('click', function(e){
		changeWindow(1);
	});
	
	var notes = Ti.UI.createImageView({
		image:'images/notesBook.png',
		width:'30dp',
		height:'30dp'
	});
	var notesLabel = Ti.UI.createLabel({
		text:'NOTES',
		color:'#FFFFFF',
		font:{ fontSize:'12dp', fontWeight:'bold'}
	});
	var notesButton = Ti.UI.createView({
		width:'50%',
		height:'50dp',
		layout:'vertical'
	});
	notesButton.add(notes);
	notesButton.add(notesLabel);
	notesButton.addEventListener('click', function(e){
		changeWindow(2);
	});
	
	mainView.add(notesButton);
	mainView.add(newNoteButton);
	
	return mainView;
};

module.exports = menu;
