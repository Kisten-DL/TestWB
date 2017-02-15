function createTable(jQtable,count) {
    var tds ='<div class="row" id="'+count+'"><div class="col-md-3 col-xs-12 field-fname"><div class="row field-fname"><input class="form-control" id="firstname" name="firstname" size="50" type="text"></div></div><div class="col-md-3 col-xs-12 field-lname"><div class="row field-lname"><input class="form-control" id="lastname" name="lastname" size="50" type="text" class="col-xs-12"></div></div><div class="col-md-3 col-xs-12 field-mail"><div class="row field-mail"><input class="form-control" id="email" name="email" size="50" type="email" class="col-xs-12"></div></div><div class="col-md-3 col-xs-12"><div class="row"><button name="change" type="submit" class="col-md-3 col-xs-4 btn btn-default" id="buttonMoreDataBaseRow" style="background-color: transparent; border:0px solid;"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button><button name="change" type="submit" class="col-md-3 col-md-offset-1 col-xs-4 btn btn-default bird" id="buttonChangeDataBaseRow"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="delete" type="submit" class="col-md-3 col-md-offset-2 col-xs-4 btn btn-default" id="buttonDeleteDataBaseRow"><span class="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span></button></div></div></div>';
	$(jQtable).append(tds);
	addMoreTableRow(jQtable,count);
};

function addTableRow(jQtable,count) {
	for (i = 1; i <= count; i++) {
		var div = '<div class="row" id="'+i+'">'
		var enddiv = '</div>'
		var tds ='<div class="col-md-3 col-xs-12 field-fname"><div class="row field-fname"><input class="form-control" id="firstname" name="firstname" size="50" type="text" class="col-xs-12" name="firstname"></div></div><div class="col-md-3 col-xs-12 field-lname"><div class="row field-lname"><input class="form-control" id="lastname" name="lastname" size="50" type="text" class="col-xs-12"></div></div><div class="col-md-3 col-xs-12 field-mail"><div class="row field-mail"><input class="form-control" id="email" name="email" size="50" type="email" class="col-xs-12"></div></div><div class="col-md-3 col-xs-12"><div class="row"><button name="change" type="submit" class="col-md-3 col-xs-4 btn btn-default" id="buttonMoreDataBaseRow" style="background-color: transparent; border:0px solid;"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button><button name="add" type="submit" class="col-md-3 col-md-offset-6 col-xs-12 btn btn-default bird" id="buttonAddDataBaseRow"><span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span></button></div></div>';
		var temp = '<div class="col-xs-12 phoneAndAddress nonactive" style="display:none"><div class="row phone"><div class="col-md-3 col-xs-12" style="padding:0px;"><h4><strong>Phone Number</strong></h4></div><div class="col-md-6 col-xs-12" style="padding:0px;"><input class="form-control" id="phone" name="phone" size="50" type="text"></div></div><div class="row address"><div class="col-md-3 col-xs-12" style="padding:0px;"><h4><strong>Address</strong></h4></div><div class="col-md-6 col-xs-12 address" style="padding:0px;"><input class="form-control" id="address" name="address" size="50" type="text"></div></div></div>';
		$(jQtable).append(div+tds+temp+enddiv);
	}
};

function addMoreTableRow(jQtable,count){
	var temp = '<div class="col-xs-12 phoneAndAddress nonactive" style="display:none"><div class="row phone"><div class="col-md-3 col-xs-12" style="padding:0px;"><h4><strong>Phone Number</strong></h4></div><div class="col-md-6 col-xs-12" style="padding:0px;"><input class="form-control" id="phone" name="phone" size="50" type="text"></div></div><div class="row address"><div class="col-md-3 col-xs-12" style="padding:0px;"><h4><strong>Address</strong></h4></div><div class="col-md-6 col-xs-12 address" style="padding:0px;"><input class="form-control" id="address" name="address" size="50" type="text"></div></div></div>';
	$(jQtable).children('#'+count).append(temp);
}

function addInputValue(inputsParent,res) {
	inputsParent.children().children('.field-fname').children('#firstname').attr('value',res.first_name);
	inputsParent.children().children('.field-lname').children('#lastname').attr('value',res.last_name);
	inputsParent.children().children('.field-mail').children('#email').attr('value',res.email);
	inputsParent.children().children('.phone').children().children('#phone').attr('value',res.phone);
	inputsParent.children().children('.address').children().children('#address').attr('value',res.address);
} 

$('#countButton').click(function () {
	if ($('#count').val()=='') {
		var value = 1;
	} else {
		var value = $('#count').val();  
	}
	addTableRow($('.tbl'),value);
});

// in case of success
var fSuccess = true;
var fError = true;

function changeButtonAddColorSuccess(pos){
	pos.attr('class','col-md-3 col-md-offset-6 col-xs-12 btn btn-success bird');
	pos.attr('style','color: #fff !important; border: 0');
	effects(pos);
};

function changeButtonChangeColorSuccess(pos){
	pos.attr('class','col-md-3 col-md-offset-1 col-xs-5 btn btn-success bird');
	pos.attr('style','color: #fff !important; border: 0');
	effects(pos);
};

function changeButtonDeleteColorSuccess(pos){
	pos.parent().parent().parent().replaceWith('');
};

function effects(pos){
	if (fSuccess) {
		$('.all').prepend('<div class="alert alert-success alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Your data are stored in the database!</div>'); 
		fSuccess = false;
	}
	
	function changeButtons() {
		pos.parent().replaceWith('<div class="row"><button name="change" type="submit" class="col-md-3 col-xs-4 btn btn-default" id="buttonMoreDataBaseRow" style="background-color: transparent; border:0px solid;"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></button><button name="change" type="submit" class="col-md-3 col-md-offset-1 col-xs-4 btn btn-default bird" id="buttonChangeDataBaseRow"><span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="delete" type="submit" class="col-md-3 col-md-offset-2 col-xs-4 btn btn-default" id="buttonDeleteDataBaseRow"><span class="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span></button></div>');
	}
	setTimeout(changeButtons, 1500)
}

$(document).on('click', 'a', function (){
	flag = true;
})

$(document).on('click','#buttonMoreDataBaseRow', function(){
	if ($(this).parent().parent().parent().children().is('.nonactive')) {
		$(this).parent().parent().parent().children('.nonactive').css('display','block');
		$(this).parent().parent().parent().children('.nonactive').addClass('active');
		$(this).parent().parent().parent().children('.nonactive').removeClass('nonactive');
	} else {
		$(this).parent().parent().parent().children('.active').addClass('nonactive');
		$(this).parent().parent().parent().children('.nonactive').removeClass('active');
		$(this).parent().parent().parent().children('.nonactive').css('display','none');
	}
})

// in case of error
function changeButtonDeleteColorError(pos){
	pos.attr('class','col-md-3 col-md-offset-4 col-xs-5 btn btn-danger');
	pos.attr('style','color: #fff !important; border: 0');   aaa
};