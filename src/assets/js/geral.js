/*$(".collapse").collapse();*/

;
$(document).ready(
		function($) {
			var i = $('.nav').children('li');
			$(i).each(
					function() {
						var f = $(this).find('ul').length;
						if (f > 0) {
							$(this).addClass("dropdown");

							$(this).children('a').attr("data-toggle",
									"dropdown").addClass("dropdown-toggle")

							$(this).children('ul').addClass('dropdown-menu')
									.siblings('a').append(
											'<i class="icon-caret-down"></i>');

			$(this).children('ul')
				.find('ul')
					.addClass('dropdown-menu')
					.siblings('a')
					.append('<i class="icon-caret-right"></i>');
		};

	});

	

});

function limit(element, max_chars) {

	if (element.value.length > max_chars) {
		element.value = element.value.substr(0, max_chars);
	}
};

function noSpecialChars(event) {
    var regex = new RegExp("^[a-zA-Z0-9\\s]+");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
}

function onlyNumbers(event) {
    var regex = new RegExp("^[0-9\\s]+");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
}


function subirTela() {
	$('html, body').animate({
		scrollTop : 0
	}, 'slow');
};

function phoneMaskHandler(event) {
	var target, phone, element;
	target = (event.currentTarget) ? event.currentTarget : event.srcElement;
	phone = target.value.replace(/\D/g, '');
	element = $(target);
	element.unmask();
	if (phone.length > 10) {
		element.mask("(99) 99999-999?9");
	} else {
		element.mask("(99) 9999-9999?9");
	}
};

function scrollToFirstMessage() {
	$('html, body').animate({
		scrollTop : 0
	}, 800);
	return false;
}

function mergeDuasPrimeirasColunaLinhaRepetidaTabela() {
    var firstColumnBrakes = [];
    $('.tabelaDuasPrimeirasColunaLinhaRepetida table').filter(function(index){
    	var currentTable = $(this);
    	for(var i=1; i<=currentTable.find('th').length; i++){
            var previous = null, cellToExtend = null, rowspan = 1;
            	if(i <= 2){
            		currentTable.find("td:nth-child(" + i + ")").each(function(index, e){
		                var jthis = $(this), content = jthis.text();
		                if (previous == content && content !== "" && $.inArray(index, firstColumnBrakes) === -1) {
		                    jthis.addClass('hidden');
		                    cellToExtend.attr("rowspan", (rowspan = rowspan+1));
		                }else{
		                    if(i === 1) firstColumnBrakes.push(index);
		                    rowspan = 1;
		                    previous = content;
		                    cellToExtend = jthis;
		                }
	            	});
            	}
            }
    });

	$('td.hidden').remove();
}

function desabilitarEnterPeloId(id) {
	$(id).keypress(function(event) {
		if (event.which == 13) {
			return false;
		}
	});
}

function adicionaVirgula(id, inteiro) {
	var valor = $(id).val(), virg = ",";
	var maxLength =  inteiro + 2;
	if (inteiro === 9){
		maxLength = maxLength + 1;
	}
	if (!valor.indexOf(virg) !== -1){
		if (valor.length === maxLength - 1){
			valor = valor + ",";
			$(id).val(valor);
		}
	}
}

function disableEnterKey(e) {
	var key;
	if (window.event)
		key = window.event.keyCode; //IE
	else
		key = e.which; //firefox
	if (key == 13)
		return false;
	else
		return true;
}

function limparFileStyle(){
	$('.bootstrap-filestyle').children().each(function() {
		$(this).val('');
	});
}
