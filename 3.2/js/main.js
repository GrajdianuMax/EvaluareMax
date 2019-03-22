
window.onload = function(){
	let students = [
		{
			'id': 1,
			'name': ''
		},
		{
			'id': 2,
			'name': ''
		}		
	];


	let select = document.createElement('select');

	select.onchange = function(){
		document.getElementById('descriere' + select.value).style.display = 'block';
	}

	document.getElementsByTagName('body')[0].appendChild(select);

	for (var i = 0; i < students.length;  i++) {
		let newOption = document.createElement('option');
		newOption.innerHTML = students[i].name;
		newOption.value = students[i].id;
		select.appendChild(newOption);
	};

}
    
а =  2 , b =  3 ;

console.log ( suma (а, b));

 х =  2,7 , у =  3,14 ;

console.log ( suma ( 5.123 , у));

console.log ( suma (х));


функция  suma ( x , y ) {
	console.log ( ' a = '  + a);
	console.log ( ' x = '  + x);
	intoarce x + y;
}