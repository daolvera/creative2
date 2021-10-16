const skinUrl = ('https://valorant-api.com/v1/weapons/skins');
const gunUrl = ('https://valorant-api.com/v1/weapons');
const gunMain = document.querySelector(".gun-main");

function changeSkin(gunIndex, skinIndex){
	fetch(gunUrl)
	.then(response => response.json())
	.then(response => {
		var gunImg =  response["data"][gunIndex]["skins"][skinIndex].displayIcon;
		return gunImg;
	});
};

function loadGun(gunIndex){
	fetch(gunUrl)
	.then(response => response.json())
	.then(response => {
	  var tempGunName = response["data"][gunIndex].displayName;
	  var tempGunImg = response["data"][gunIndex].displayIcon;
	  var tempGunHTML;
	  tempGunHTML = '<div class ="gun-item">';
	  tempGunHTML += "<div class='gun-name'> <h3>" + tempGunName + "</h3> </div> ";
	  var skinIndex = 0;
	  if (gunIndex > 6 && gunIndex < 12){
		tempGunHTML += `<input type='image' class='gun-image-small' id='${gunIndex}-basic' src = ${tempGunImg}  onClick='changeSkin(${tempGunImg}, ${skinIndex})'>`;  
	  }
	  else{
	  	tempGunHTML += `<input type='image' class='gun-image' src= ${tempGunImg} onClick= 'changeSkin(${gunIndex},  0)' >`;
	  }
	  tempGunHTML += "</div>";
	  gunMain.innerHTML += tempGunHTML;
	});
};


fetch(gunUrl)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



window.addEventListener("load", function() {
fetch(gunUrl)
.then(response => response.json())
.then(response => {
	console.log(response)
	// default Agent Loaded
	for( var i in response["data"]){
		loadGun(i);
	}
	// for (agent in response["data"]){
	// 	if (agent != 5){
	// 		var agentName = response['data'][agent].displayName;
	// 		// console.log(agentName);
	// 		agentNav.innerHTML += `<button class='agent-nav-item' onClick = 'loadAgent(${agent})'>` + agentName + "</button>"
	// 	}
	// }
})
.catch(err => console.error(err));
});