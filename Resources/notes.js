/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('vendors/date.format.js');

function showNotes(tableData){	
	
	var total = tableData.length;
	
	var tableView = Ti.UI.createTableView({
		top:'120dp',
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
	
	return tableView;
}
