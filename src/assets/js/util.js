// Adicionar javascripts utilitarios aqui

function abrirAguarde() {
	PF('statusDialog').show()
}

function fecharAguarde() {
	PF('statusDialog').hide()
}

function mostarMensagem(msg) {
	exibirMensagem([{name: 'msg', value: msg}]);
}
