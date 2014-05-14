/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('../vendors/date.format.js');

var db = Ti.Database.install('propelics.sqlite', 'propelics');

function getNotes(){
	var notes = db.execute('SELECT title, note, date FROM notes ORDER BY date DESC LIMIT 20');
	var arrNotes = [];
	
	while(notes.isValidRow()){
		arrNotes.push({ titulo:notes.fieldByName('title'), contenido:notes.fieldByName('note'), fecha:notes.fieldByName('date') });
		notes.next();
	}
	
	arrNotes = JSON.stringify(arrNotes);
	
	return arrNotes;
	
}

function addNote(title, content){
	var date = new Date();
	date = date.format('yyyy-mm-dd hh:MM:ss');
	
	db.execute('INSERT INTO notes (title, note, date) VALUES (?, ?, ?)', title, content, date);
	var lastRecord = db.lastInsertRowId;
	
	return lastRecord;
}
