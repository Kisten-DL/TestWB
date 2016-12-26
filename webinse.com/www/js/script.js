// actions with database
function PostData (place,posButton) {
	var firstname = place.children().children('.field-fname').children('#firstname').val();   
	var lastname = place.children().children('.field-lname').children('#lastname').val();
	var email = place.children().children('.field-mail').children('#email').val();
	$.ajax({
        type: "POST",
        url: "scripts/add.php",
        data: {
			firstname: firstname,
			lastname: lastname,
			email: email
		},
		success: function (result) {
			var res = JSON.parse(result);
			var id = res.id;
			place.attr('id',res.id); 
			if (res.res == "success"){
				changeButtonAddColorSuccess(posButton);
				place.children().children('.field-fname').attr('class','row field-fname');
				place.children().children('.field-lname').attr('class','row field-lname');
				place.children().children('.field-mail').attr('class','row field-mail');		
		    }
		}
	})
};  

function DeleteData (place,posButton) {
	var id = place.attr('id');
	
	$.ajax({
		type: "POST",
		url: "scripts/delete.php",
		data:{
			id:id
		},
		success: function (result){
			if (result=="success"){
				changeButtonDeleteColorSuccess(posButton);
			} else{
				changeButtonColorError(posButton);
			}
		}
	});
}

function ChangeData (place,posButton){
	var firstname = place.children().children('.field-fname').children('#firstname').val();
	var lastname = place.children().children('.field-lname').children('#lastname').val();
	var email = place.children().children('.field-mail').children('#email').val();
	var id = place.attr('id');
	$.ajax({
        type: "POST",
        url: "scripts/change.php",
        data: {
			firstname:firstname,
			lastname:lastname,
			email:email,
			id:id
		},
		success: function (result) {
			if (result=="success"){
				changeButtonChangeColorSuccess(posButton);
				place.children().children('.field-fname').attr('class','row field-fname');
				place.children().children('.field-lname').attr('class','row field-lname');
				place.children().children('.field-mail').attr('class','row field-mail');
			}				
		}
	});
}

function checkValidation(place,n){
	var f = true;
	var fname = place.children().children('.field-fname').children('#firstname').val();
	var lname = place.children().children('.field-lname').children('#lastname').val();
	var mail = place.children().children('.field-mail').children('#email').val();
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	if (fname == '') {
		f = false;
		
		show(place,'field-fname',n);
	} else {
		place.children().children('.field-fname').attr('class','row field-fname');
	}
		
	if (lname == '') {
		f = false;
		
		show(place,'field-lname',n);
	} else {
		place.children().children('.field-lname').attr('class','row field-lname');
	}
	
	if (!pattern.test(mail)) {
		f = false;
		
		show(place,'field-mail',n);
	} else {
		place.children().children('.field-mail').attr('class','row field-mail');
	}
	if (f) {
		return ('true');
	} else  if (fError) {
		$('.all').prepend('<div class="alert alert-danger alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Please fill all fields to continue...</div>'); 
		fError = false;
	}
};

function show(place,field, n){
	place.children().children('.'+field).attr('class','row '+field+' form-group has-error');
	place.children().children().children('.bird').attr('class','col-md-3 col-md-offset-'+n+' col-xs-12 btn btn-danger bird');
	place.children().children().children('.bird').attr('style','color: #fff !important; border: 0');
}

$(document).on('click', '#buttonAddDataBaseRow', function (){
	if (checkValidation($(this).parent().parent().parent(),9)=='true') {
		PostData($(this).parent().parent().parent(),$(this));
		fError = true;
		fSuccess = true;
		$('.alert').replaceWith('');
	}
});

$(document).on('click', '#buttonDeleteDataBaseRow', function (){
	DeleteData($(this).parent().parent().parent(),$(this));	
});

$(document).on('click', '#buttonChangeDataBaseRow', function (){
	if (checkValidation($(this).parent().parent().parent(),4)=='true'){
		ChangeData($(this).parent().parent().parent(),$(this));	
		fError = true;
		fSuccess = true;
		$('.alert').replaceWith('');
	}
});

$(document).ready(function(){
	var res = new Object;
	
	$.ajax({
        type: "POST",
        url: "scripts/get.php",
        data: {
			get:'true',
		},
		success: function (result) {
			res = JSON.parse(result);
			
			for (i=0; i<res.length; i++){
				createTable ('.tbl',res[i].id); 
				addInputValue($('.tbl').children('#'+res[i].id),res[i]);
			};
		}				
	});
});
