/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('database/database.js');

var editNote = function(id, currentTitle, currentNote){ 
	
	var formView = Ti.UI.createView({
		width:'80%',
		height:'80%',
		backgroundColor:'#2E9AFE',
		layout:'vertical'
	});
	
	var titleLabel = Ti.UI.createLabel({
		text:'TÍTULO:',
		font:{ fontSize:'18dp', fontWeight:'bold'},
		color:'#FFFFFF',
		top:'30dp'
	});
	
	var txtTitle = Ti.UI.createTextField({
		width:'90%',
		borderRadius:'5dp',
		borderColor:'#FF8000',
		top:'5dp',
		value:currentTitle
	});
	
	var contentLabel = Ti.UI.createLabel({
		text:'NOTA:',
		font:{ fontSize:'18dp', fontWeight:'bold'},
		color:'#FFFFFF',
		top:'10dp'
	});
	
	var txtContent = Ti.UI.createTextArea({
		width:'90%',
		height:'120dp',
		borderRadius:'5dp',
		borderColor:'#FF8000',
		top:'5dp',
		value:currentNote
	});
	
	var saveButton = Ti.UI.createButton({
		title:'SAVE',
		width:'200dp',
		height:'50dp',
		top:'30dp',
		bottom:'30dp'
	});
	saveButton.addEventListener('click', function(e){
		var title = txtTitle.value;
		var content = txtContent.value;
		var result = Ti.UI.createAlertDialog({ title:'AVISO' });
		
		if(addOrEditNote(2, id, title, content)){
			result.message = 'La nota ha sido guardada con éxito.';
			result.show();
		}else{
			result.message = 'Ha ocurrido un error.';
			result.show();
		}
	});
	
	formView.add(titleLabel);
	formView.add(txtTitle);
	formView.add(contentLabel);
	formView.add(txtContent);
	formView.add(saveButton);
	
	return formView;
};

module.exports = editNote;