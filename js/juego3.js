var a=new Array(24);
var aa=new Array(24);
$('#jugando').hide();
var inic=false;
var elem;
var n=-1;
var xx;
var g;
var gg;
var gan1;
var gan2;
var ganar1;
var ganar2;
function altura(){
	alturaJugada();
	var b=new Array(24);
	jj=0;
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 12; j++) {
			b[jj+j]=1+j;
		}
		jj=12;
	}
	$ale=23;
	for (var y = 0; y < 24; y++) {
		$x=Math.round(Math.random()*$ale);
		aa[y]=true;
		a[y]=b[$x];
		$im=1+y;
		$('#ima'+$im).css('visibility','visible');
		document.getElementById('ima'+$im).src='img/0.jpg';
		b.splice($x,1);
		$ale--;
	}
}

function alturaJugada(){
	
}
$(document).ready(function(){
   altura();
});


function iniciar(){
	jugadorX=document.getElementById('jue1').value;
	jugadorO=document.getElementById('jue2').value;
	if(jugadorX!=jugadorO&&jugadorX!=""&&jugadorO!=""){
		inic=true;
		ganar1=0;
		ganar2=0;
		gan1=0;
		gan2=0;
		g="O";
		gg="O";
		n=0;
		document.getElementById('jugador1').innerHTML = jugadorX;
		document.getElementById('jugador2').innerHTML = jugadorO;
		document.getElementById('ganar1').innerHTML = ganar1+" - "+gan1;
		document.getElementById('ganar2').innerHTML = ganar2+" - "+gan2;
		$('#jugar').hide();
		$('#jugando').show()

	}else{
		alert("Datos de jugadores es incorrecto")
	}
}
function jugar(com,x){
	if (inic&&com!=elem&&aa[x]) {
		n++
		document.getElementById(com).src='img/'+a[x]+'.jpg';
		if (n==2) {
			inic=false;
			n=0;
			ganar(com,x);
		}else{
			elem=com;
			xx=x;
		}
	}else{
		if(n<0){
			alert("Incluir datos de los jugadores");
		}
	}
}
function ganar(com,x){
	if (a[x]==a[xx]) {
		setTimeout(function(){
			$('#'+com).css('visibility','hidden');
			$('#'+elem).css('visibility','hidden');
			aa[x]=false;
			aa[xx]=false;
			ganador();
			inic=true;
		},3000);
	}else{
		setTimeout(function(){
			document.getElementById(com).src='img/0.jpg';
			document.getElementById(elem).src='img/0.jpg';
			jugador();
			inic=true;
		},3000);
	}
}
function jugador(){
	if (g=="X") {
		g="O";
		$('#jugando img').css('top','0');
	}else{
		g="X";
		$('#jugando img').css('top','5em');
	}
}
function ganador(){
	if (g=="O") {
		ganar1++;
		document.getElementById('ganar1').innerHTML = ganar1+" - "+gan1;
	
	}else{
		ganar2++;
		document.getElementById('ganar2').innerHTML = ganar2+" - "+gan2;
	}
	if((ganar1+ganar2)==12){
		if (ganar1>ganar2) {
			alert(jugadorX+" ha ganado esta partida. Felicitaciones");
			gan1++;
		}else if (ganar2>ganar1) {
			alert(jugadorO+" ha ganado esta partida. Felicitaciones");
			gan2++;
		}else{
			alert("Nadie ha ganado esta partida")
		}
		nuevaPartida();
	}
}
function nuevaPartida(){
	ganar1=0;
	ganar2=0;
	altura();
	document.getElementById('ganar1').innerHTML = ganar1+" - "+gan1;
	document.getElementById('ganar2').innerHTML = ganar2+" - "+gan2;
}

function reiniciarJuego(){
	$('#jugando').hide();
	$('#jugar').show();
	inic=false;
	n=-1;
	altura();
}