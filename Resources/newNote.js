/*
 * Erick Torres
 * ericktorres87@gmail.com
 */

Ti.include('database/database.js');

var newNote = function(){

	var mainBackground = Ti.UI.createView({
		top:'120dp',
		width:'90%',
		height:Titanium.UI.SIZE,
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
		top:'5dp'
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
		top:'5dp'
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
		var result = Ti.UI.createAlertDialog({
			title:'AVISO'
		});
		
		if(addNote(title, content)){
			result.message = 'La nota ha sido guardada con éxito.';
			result.show();
			txtTitle.value = "";
			txtContent.value = "";
		}else{
			result.message = 'Ha ocurrido un error.';
			result.show();
		}
		
	});
	
	mainBackground.add(titleLabel);
	mainBackground.add(txtTitle);
	mainBackground.add(contentLabel);
	mainBackground.add(txtContent);
	mainBackground.add(saveButton);
	
	return mainBackground;

};

module.exports = newNote;