var a=new Array(3);
var j;
var n;
var jj;
var jugadorX="";
var jugadorO="";
var inic=false;
var ganar1;
var ganar2;

var guardar=false;
var elemento;
var xx;
var yy;
var hay=false;

$('#jugando').hide();
function altura(){
	alturaJugada();	
	for (var i = 0; i < 3; i++) {
		a[i]=new Array(3);
		for (var x = 0; x< 3; x++) {
			a[i][x]="a";
		}
	}
}
function alturaJugada(){
	var jug = $(".contenido").outerWidth();
	var juga=jug*0.75;
	$('.contenido').css('height',juga+'px');
	var lin = $(".contenido").outerHeight()*0.9;
	$('.linea').css('height',lin+'px');
	lin = $(".contenido").outerWidth()/2-6;
	$('#l6').css('left',lin+'px');
	$('#l7').css('left',lin+'px');
	var x=$(".linea2").outerWidth()-6;
	var y=$(".linea").outerHeight()-6;
	x=x*x;
	y=y*y;
	var li=x+y;
	li=Math.pow(li, 0.5);
	$('#l6').css('height',li+'px');
	$('#l7').css('height',li+'px');
	lin=(li-$("#l1").outerHeight())/2-$(".contenido").outerHeight()*0.05;
	$('#l6').css('top','-'+lin+'px');
	$('#l7').css('top','-'+lin+'px');
}
$(document).ready(function(){
   altura();
});
$(window).resize(function() {
	alturaJugada();
});
function jugar(com,x,y){
	if (inic) {
		if (n<6) {
			jugada(com,x,y);
		}else{
			if (guardar) {
				if (x==xx&&y==yy) {
						a[x][y]="a";
						jugada(com,x,y);
						if(j=="green"){
							j="red"
							$('#jugando img').css('top','0');
						}else{
							j="green"
							$('#jugando img').css('top','5em');
						}
					}else{
						validarJugada(com,x,y);
					}
			}else{
					if(a[x][y]!="a"&&a[x][y]!=j){

							guardar=true;
							elemento=com;
							xx=x;
							yy=y;
							$(com).css('background','blue');

					}else{
						alert("Debe seleccionar cual desea mover");
					}
				
			}
		}
	}else{
		alert("Incluir datos de los jugadores");
	}
}
function validarJugada(com,x,y){

	var uno=x.toString()+y.toString();
	var dos=xx.toString()+yy.toString();

	if(dos=="11"||uno=="11"){
		jugada(com,x,y);
	}else if(dos=="00"&&(uno=="01"||uno=="10")){
		jugada(com,x,y);
	}else if(dos=="01"&&(uno=="00"||uno=="02")){
		jugada(com,x,y);
	}else if(dos=="02"&&(uno=="01"||uno=="12")){
		jugada(com,x,y);
	}else if(dos=="10"&&(uno=="00"||uno=="20")){
		jugada(com,x,y);
	}else if(dos=="20"&&(uno=="10"||uno=="21")){
		jugada(com,x,y);
	}else if(dos=="21"&&(uno=="20"||uno=="22")){
		jugada(com,x,y);
	}else if(dos=="22"&&(uno=="21"||uno=="12")){
		jugada(com,x,y);
	}else if(dos=="12"&&(uno=="22"||uno=="02")){
		jugada(com,x,y);
	}else{
		alert("No puede realizar este movimiento2");
	}
}
function jugada(com,x,y){
	if (a[x][y]=="a") {
		if (guardar) {
			$(elemento).css('background','rgb(200,200,200)');
			a[xx][yy]="a";
			guardar=false;
		}
		if(j=="green"){
			j="red"
			a[x][y]=j;
			$(com).css('background',j);
			$('#jugando img').css('top','0');
		}else{
			j="green"
			a[x][y]=j;
			$(com).css('background',j);
			$('#jugando img').css('top','5em');
		}
		n++;
		validar();
	}else{
		alert("No puede realizar este movimiento5");
	}
}
function iniciar(){
	jugadorX=document.getElementById('jue1').value;
	jugadorO=document.getElementById('jue2').value;
	if(jugadorX!=jugadorO&&jugadorX!=""&&jugadorO!=""){
		inic=true;
		ganar1=0;
		ganar2=0;
		j="red";
		jj="red";
		n=0;
		document.getElementById('jugador1').innerHTML = jugadorX;
		document.getElementById('jugador2').innerHTML = jugadorO;
		document.getElementById('ganar1').innerHTML = ganar1;
		document.getElementById('ganar2').innerHTML = ganar2;
		$('#jugar').hide();
		$('#jugando').show()

	}else{
		alert("Datos de jugadores es incorrecto")
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
		}
	}
}
function reiniciar(){
	ganador();
	reiniciarDatos();
	if (jj=="green") {
		jj="red";
		j=jj;
		$('#jugando img').css('top','0');
	}else{
		jj="green"
		j=jj;
		$('#jugando img').css('top','5em');
	}
}
function reiniciarDatos(){
	for (var i = 0; i < 3; i++) {
		for (var e = 0; e < 3; e++) {
			var x=i.toString();
			var y=e.toString();
			var com="#j"+x+y;
			a[i][e]="a";
			$(com).css('background','rgb(200,200,200)');
		}
	}
	n=0;
	guardar=false;
}
function ganador(){
	if (j=="green") {
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