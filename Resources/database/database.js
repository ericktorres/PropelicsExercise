/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

var db = Ti.Database.install('propelics.sqlite', 'propelics');

function getNotes(){
	var notes = db.execute('SELECT title, note, date FROM notes ORDER BY date DESC');
	var arrNotes = [];
	
	while(notes.isValidRow()){
		arrNotes.push({ titulo:notes.fieldByName('title'), contenido:notes.fieldByName('note'), fecha:notes.fieldByName('date') });
		notes.next();
	}
	notes.close();
	db.close();
	
	arrNotes = JSON.stringify(arrNotes);
	
	return arrNotes;
	
}
