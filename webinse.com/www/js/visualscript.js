/*--- table creating ---*/
function createTable(jQtable,count) {
    var tds ='<div class="row" id="'+count+'"><div class="col-lg-3 field-fname"><div class="row field-fname"><input class="form-control" id="firstname" name="firstname" size="50" type="text" class="col-lg-12"></div></div><div class="col-lg-3 field-lname"><div class="row field-lname"><input class="form-control" id="lastname" name="lastname" size="50" type="text" class="col-lg-12"></div></div><div class="col-lg-3 field-mail"><div class="row field-mail"><input class="form-control" id="email" name="email" size="50" type="email" class="col-lg-12"></div></div><div class="col-lg-3"><div class="row"><button name="change" type="submit" class="col-lg-3 col-lg-offset-4 btn btn-default bird" id="buttonChangeDataBaseRow"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="delete" type="submit" class="col-lg-3 col-lg-offset-2 btn btn-default" id="buttonDeleteDataBaseRow"><span class="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span></button></div></div></div>';
	$(jQtable).append(tds);
};

function addTableRow(jQtable,count) {
    var tds ='<div class="row" id="'+count+'"><div class="col-lg-3 field-fname"><div class="row field-fname"><input class="form-control" id="firstname" name="firstname" size="50" type="text" class="col-lg-12" name="firstname"></div></div><div class="col-lg-3 field-lname"><div class="row field-lname"><input class="form-control" id="lastname" name="lastname" size="50" type="text" class="col-lg-12"></div></div><div class="col-lg-3 field-mail"><div class="row field-mail"><input class="form-control" id="email" name="email" size="50" type="email" class="col-lg-12"></div></div><div class="col-lg-3"><div class="row"><button name="add" type="submit" class="col-lg-3 col-lg-offset-9 btn btn-default bird" id="buttonAddDataBaseRow"><span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></button></div></div></div>';
	for (i = 1; i <= count; i++) {
		$(jQtable).append(tds);
	}
};

function addInputValue(inputsParent,res) {
	inputsParent.children().children('.field-fname').children('#firstname').attr('value',res.first_name);
	inputsParent.children().children('.field-lname').children('#lastname').attr('value',res.last_name);
	inputsParent.children().children('.field-mail').children('#email').attr('value',res.email);
} 

$('#countButton').click(function () {
	if ($('#count').val()=='') {
		var value = 1;
	} else {
		var value = $('#count').val();  
	}
	addTableRow($('.tbl'),value);
});



/*--- if action was successful ---*/
var fSuccess = true;
var fError = true;

function changeButtonAddColorSuccess(pos){
	pos.attr('class','col-lg-3 col-lg-offset-9 btn btn-success bird');
	pos.attr('style','color: #fff !important; border: 0');
	effects(pos);
};

function changeButtonChangeColorSuccess(pos){
	pos.attr('class','col-lg-3 col-lg-offset-4 btn btn-success bird');
	pos.attr('style','color: #fff !important; border: 0');
	effects(pos);
};

function changeButtonDeleteColorSuccess(pos){
	pos.parent().parent().parent().replaceWith('');
};

function effects(pos){
	if (fSuccess) {
		$('.all').prepend('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thank You! </strong> Now Your data are stored in the reliable place!</div>'); 
		fSuccess = false;
	}
	
	function changeButtons() {
		pos.parent().replaceWith('<div class="row"><button name="change" type="submit" class="col-lg-3 col-lg-offset-4 btn btn-default" id="buttonChangeDataBaseRow"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="delete" type="submit" class="col-lg-3 col-lg-offset-2 btn btn-default" id="buttonDeleteDataBaseRow"><span class="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span></button></div>');
	}
	setTimeout(changeButtons, 1500)
}

$(document).on('click', 'a', function (){
	flag = true;
})



/*--- if something goes wrong ---*/
function changeButtonDeleteColorError(pos){
	pos.attr('class','col-lg-3 col-lg-offset-4 btn btn-danger');
	pos.attr('style','color: #fff !important; border: 0');   aaa
};