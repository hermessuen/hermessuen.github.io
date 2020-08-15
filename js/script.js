function changeText(){
	var current_val = document.getElementById('main text').innerText
	console.log('here1')
	console.log(current_val)

	if (current_val == "Teacher"){
		console.log('here')
		document.getElementById('main text').innerHTML = "Student"
	}else if(current_val == "Student"){
		document.getElementById('main text').innerHTML = "Teacher"
	}else {
		document.getElementById('main text').innerHTML = "Teacher"
	}

	document.getElementById('text').style.background = 'Green'
	
}