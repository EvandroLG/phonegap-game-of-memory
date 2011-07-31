var Util = {};

Util.geraPosica = function(){
    return Math.floor(Math.random() * (Memoria.qtdPares * 2));
};

Util.isFimJogo = function(){
	return !!(Memoria.qtdPares === Memoria.qtdParesEncontrados);
};

Util.fimJogo = function(){
	alert('Parabéns!!!');
	
	Memoria.destruct();
	Relogio.destruct();
	Memoria.init();
	Relogio.init();
};