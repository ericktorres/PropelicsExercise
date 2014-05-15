/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('../vendors/date.format.js');

var db = Ti.Database.install('propelics.sqlite', 'propelics');

function getNotes(){
	var notes = db.execute('SELECT id, title, note, date FROM notes ORDER BY date DESC LIMIT 20');
	var arrNotes = [];
	
	while(notes.isValidRow()){
		arrNotes.push({ id: notes.fieldByName('id'), titulo:notes.fieldByName('title'), contenido:notes.fieldByName('note'), fecha:notes.fieldByName('date') });
		notes.next();
	}
	
	arrNotes = JSON.stringify(arrNotes);
	
	return arrNotes;
	
}

function addOrEditNote(action, id, title, content){
	var date = new Date();
	date = date.format('yyyy-mm-dd hh:MM:ss');
	var lastRecord;
	
	if(action == 1){
		db.execute('INSERT INTO notes (title, note, date) VALUES (?, ?, ?)', title, content, date);	
		lastRecord = db.lastInsertRowId;
	}else if(action == 2){
		db.execute('UPDATE notes SET title=?, note=?, date=? WHERE id=?', title, content, date, id);
		lastRecord = id;
	}
	
	return lastRecord;
}

