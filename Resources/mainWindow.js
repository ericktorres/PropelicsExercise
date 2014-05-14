/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('database/database.js');
Ti.include('notes.js');

var win = Ti.UI.currentWindow;

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
