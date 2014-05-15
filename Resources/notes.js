/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('vendors/date.format.js');

function editForm(id, currentTitle, currentNote){
	var win = Ti.UI.createWindow({
		navBarHidden:true,
		backgroundColor:'transparent',
		opacity:1.0
	});
	
	var mainView = Ti.UI.createView({
		width:'100%',
		height:'100%',
		backgroundImage:'images/backCloseMenu.png',
		backgroundRepeat:true
	});
	mainView.addEventListener('click', function(e){
		win.close();
	});
	
	var editNote = require('editNote');
	var note = new editNote(id, currentTitle, currentNote);
	
	mainView.add(note);	
	win.add(mainView);
	win.open();
}

function showNotes(tableData){	
	
	var total = tableData.length;
	
	var tableView = Ti.UI.createTableView({
		top:'120dp',
		bottom:'30dp',
		width:'90%',
		height:Titanium.UI.SIZE,
		separatorColor:'#FF8000',
		backgroundColor:'#2E9AFE'
	});
	
	var data = [];
	
	var row, title, date;
	
	for(var i=0; i<total; i++){
		row = Ti.UI.createTableViewRow({
			height:'40dp'
		});
		
		title = Ti.UI.createLabel({
			text:tableData[i].titulo,
			color:'#FFFFFF',
			font:{ fontSize:'15dp', fontWeight:'bold'},
			left:'5dp'
		});
		row.add(title);
		
		date = Ti.UI.createLabel({
			text:dateFormat(tableData[i].fecha, 'dd/mm/yy'),
			color:'#FFFFFF',
			font:{ fontSize:'15dp', fontWeight:'bold'},
			right:'5dp'
		});
		row.add(date);
		
		data.push(row);
	}
	
	tableView.data = data;
	tableView.addEventListener('click', function(e){
		editForm(tableData[e.index].id, tableData[e.index].titulo, tableData[e.index].contenido);
		//editNote(tableData[e.index].id, tableData[e.index].titulo, tableData[e.index].contenido);
	});
	
	return tableView;
}
