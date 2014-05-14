/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

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
	
	mainView.add(notesButton);
	mainView.add(newNoteButton);
	
	return mainView;
};

module.exports = menu;
