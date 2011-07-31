var Memoria = {};
Memoria.painel = $('#painel');
Memoria.opcoes = ['red', 'blue', 'green', 'yellow', 'gray', 'maroon', 'pink', 'salmon', 'orange', 'indigo'];
Memoria.cartasTemp = [];
Memoria.cartas = [];
Memoria.qtdPares = 0;
Memoria.qtdParesEncontrados = 0;

Memoria.init = function(){
	this.criaTodasAsCartas(10);
	this.embaralhaPecas();
	this.insereCartas();
	this.clickCarta();
};

Memoria.destruct = function(){
	this.painel.html('');
	
	this.cartasTemp = [];
	this.cartas = [];
	this.qtdPares = 0;
	this.qtdParesEncontrados = 0;
};

Memoria.criaTodasAsCartas = function(qtdPares){
	this.qtdPares = qtdPares;

   	for(var i=0; i<qtdPares; i++){
    	this.cartasTemp.push('<div class="' + this.opcoes[i] + '"><div></div></div>');
        this.cartasTemp.push('<div class="' + this.opcoes[i] + '"><div></div></div>');
   	}
};

Memoria.embaralhaPecas = function(){
	var self = this;
	
    $.each(this.cartasTemp, function(i){
		var inserido = false;
		
		while(!inserido){
			var posicao = Util.geraPosica();
			
			if(!self.cartas[posicao]){
				self.cartas[posicao] = self.cartasTemp[i];
	           	delete self.cartasTemp[i];
				inserido = true;
			}
		}
	});
};

Memoria.insereCartas = function(){
	this.painel.html(this.cartas.join(''));
};

Memoria.clickCarta = function(){
	this.clickCarta = 0;
	var self = this;
	
	this.painel.find('> div').bind('click', function(e){
		if(!$(this).hasClass('on')){
			self.marcaCarta($(this));
		}
	});
};

Memoria.marcaCarta = function(elemento){
	this.clickCarta++;

	if(this.clickCarta === 1){
		this.painel.find('div').removeClass('on');
	}

	elemento.addClass('on');

	if(this.clickCarta === 2){
		this.clickCarta = 0;
		this.marcaPar();
	}
};

Memoria.marcaPar = function(){
	if(this.painel.find('div.on:eq(0)').attr('class') === this.painel.find('div.on:eq(1)').attr('class')){
		$('#painel div.on:eq(0), #painel div.on:eq(1)').addClass('atv');
		this.qtdParesEncontrados++;
		
		if(Util.isFimJogo()){
			Util.fimJogo();
		}
	}
};