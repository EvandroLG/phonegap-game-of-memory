var Relogio = {};
Relogio.elementos = {};
Relogio.elementos.relogio = $('#relogio');
Relogio.countSegundos = 0;
Relogio.countMinutos = 0;
Relogio.countHoras = 0;

Relogio.init = function(){
	this.criaCampos();
	this.contadorTempo();
};

Relogio.destruct = function(){
	this.countSegundos = 0;
	this.countMinutos = 0;
	this.countHoras = 0;
};

Relogio.criaCampos = function(){
	var elementos = [
		'<input type="text" id="horas">',
		'<input type="text" id="minutos">',
		'<input type="text" id="segundos">'
	];
	
	Relogio.elementos.relogio.html(elementos.join(''));
	
	this.elementos.horas = Relogio.elementos.relogio.find('#horas');
	this.elementos.minutos = Relogio.elementos.relogio.find('#minutos');
	this.elementos.segundos = Relogio.elementos.relogio.find('#segundos');
};

Relogio.contadorTempo = function(){
	var self = this;
	this.countSegundos = 0;
	this.countMinutos = 0;
	this.countHoras = 0;
	
	setInterval(function(){
		self.countSegundos++;
		
		if(self.countSegundos === 60){
			self.countSegundos = 0;
			self.countMinutos++;
		}
		
		if(self.countMinutos === 60){
			self.countMinutos = 0;
			self.countHoras++;
		}
		
		self.elementos.horas.val(self.countHoras);
		self.elementos.minutos.val(self.countMinutos);
		self.elementos.segundos.val(self.countSegundos);
	}, 1000);
};