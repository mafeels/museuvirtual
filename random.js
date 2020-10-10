
(function (){




var elementos = document.getElementById("lista").children;
var i=0;
var ordem = [6,2,3,4,5,1];


for(i=0;i < ordem.length;i++){
	je = Math.floor(Math.random()*6);

	console.log("funcionando var ordem");
	/*
	1/6 das vezes esse codigo não vai rodar

	if(je==0 and i==0){
		break;
	}

	
	if(i==je){
		continue;
	}
	*/

	tempA = ordem[i];
	tempB = ordem[je];

	ordem[i] = tempB;
	ordem[je] = tempA;
}

console.log("funcionando var elementos");

elementos[0].style.order = ordem[0];
elementos[1].style.order = ordem[1];
elementos[2].style.order = ordem[2];
elementos[3].style.order = ordem[3];
elementos[4].style.order = ordem[4];
elementos[5].style.order = 0;

/*
for(i=0; i< elementos.length;i++){
	elementos[i].style.order = ordem[i];
}
*/

})();