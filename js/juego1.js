var a=new Array(3);
var j;
var n;
var jj;
var jugadorX="";
var jugadorO="";
var inic=false;
var ganar1;
var ganar2;
$('#jugando').hide();
function altura(){
	alturaJugada();	
	for (var i = 0; i < 3; i++) {
		a[i]=new Array(3);
		for (var x = 0; x< 3; x++) {
			a[i][x]="a"
		}
	}
}
function alturaJugada(){
	var jug = $(".jugada").outerWidth();
	var juga=jug*0.8;
	$('.jugada').css('height',juga+'px');
	var lin = $(".contenido").outerHeight();
	$('.linea').css('height',lin+'px');
}
$(document).ready(function(){
   altura();
});
function jugar(com,x,y){
	if (inic) {
		if (a[x][y]=="a") {
			if(j=="X"){
				j="O"
				a[x][y]=j;
				document.getElementById(com).innerHTML = j;
				$('#jugando img').css('top','0');
			}else{
				j="X"
				a[x][y]=j;
				document.getElementById(com).innerHTML = j;
				$('#jugando img').css('top','5em');
			}
			n++;
			validar();
		}
	}else{
		alert("Incluir datos de los jugadores");
	}
}
function validar(){
	if (n>4) {
		if(a[0][0]==a[1][1]&&a[0][0]==a[2][2]&&a[0][0]==j){
			reiniciar();
		}else if (a[0][0]==a[0][1]&&a[0][0]==a[0][2]&&a[0][0]==j){
			reiniciar();
		}else if (a[1][0]==a[1][1]&&a[1][0]==a[1][2]&&a[1][0]==j){
			reiniciar();
		}else if (a[2][0]==a[2][1]&&a[2][0]==a[2][2]&&a[2][0]==j){
			reiniciar();
		}else if(a[0][0]==a[1][0]&&a[0][0]==a[2][0]&&a[0][0]==j){
			reiniciar();
		}else if(a[0][1]==a[1][1]&&a[0][1]==a[2][1]&&a[0][1]==j){
			reiniciar();
		}else if(a[0][2]==a[1][2]&&a[0][2]==a[2][2]&&a[0][2]==j){
			reiniciar();
		}else if(a[0][2]==a[1][1]&&a[0][2]==a[2][0]&&a[0][2]==j){
			reiniciar();
		}else{
			if (n==9){
				alert("Nadie ha Ganado");
				reiniciarDatos();
			}
		}
	}
}
function reiniciar(){
	ganador();
	reiniciarDatos();
	if (jj=="X") {
		jj="O";
		j=jj;
		$('#jugando img').css('top','0');
	}else{
		jj="X"
		j=jj;
		$('#jugando img').css('top','5em');
	}
}
function reiniciarDatos(){
	for (var i = 0; i < 3; i++) {
		for (var e = 0; e < 3; e++) {
			var x=i.toString();
			var y=e.toString();
			var com="a"+x+y;
			a[i][e]="a";
			document.getElementById(com).innerHTML = "";
		}
	}
	n=0;
}
function iniciar(){
	jugadorX=document.getElementById('jue1').value;
	jugadorO=document.getElementById('jue2').value;
	if(jugadorX!=jugadorO&&jugadorX!=""&&jugadorO!=""){
		inic=true;
		ganar1=0;
		ganar2=0;
		j="O";
		jj="O";
		n=0;
		document.getElementById('jugador1').innerHTML = jugadorX+" (X)";
		document.getElementById('jugador2').innerHTML = jugadorO+" (O)";
		document.getElementById('ganar1').innerHTML = ganar1;
		document.getElementById('ganar2').innerHTML = ganar2;
		$('#jugar').hide();
		$('#jugando').show()

	}else{
		alert("Datos de jugadores es incorrecto")
	}
}
function ganador(){
	if (j=="X") {
		ganar1++;
		alert("Felicidades "+jugadorX+" has ganado");
		document.getElementById('ganar1').innerHTML = ganar1;
	}else{
		ganar2++;
		alert("Felicidades "+jugadorO+" has ganado");
		document.getElementById('ganar2').innerHTML = ganar2;
	}
}
function reiniciarJuego(){
	$('#jugando').hide();
	$('#jugar').show();
	inic=false;
	reiniciarDatos();
}
$(window).resize(function() {
	var jug = $(".jugada").outerWidth();
	var juga=jug*0.8;
	$('.jugada').css('height',juga+'px');
	var lin = $(".contenido").outerHeight();
	$('.linea').css('height',lin+'px');
});
