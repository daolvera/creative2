const skinUrl = ('https://valorant-api.com/v1/weapons/skins');
const gunUrl = ('https://valorant-api.com/v1/weapons');
const gunMain = document.querySelector(".gun-main");



function loadGun(gunIndex){
	fetch(gunUrl)
	.then(response => response.json())
	.then(response => {
	  var tempGunName = response["data"][gunIndex].displayName;
	  var tempGunImg = response["data"][gunIndex].displayIcon;
	  var tempGunHTML;
	  tempGunHTML = '<div class ="gun-item">';
	  tempGunHTML += "<div class='gun-name'> <h3>" + tempGunName + "</h3> </div> ";
	  if (gunIndex > 6 && gunIndex < 12){
		tempGunHTML += `<div class='gun-image-small'> <img src=${tempGunImg}> </div> `;  
	  }
	  else{
	  	tempGunHTML += `<div class='gun-image'> <img src=${tempGunImg}> </div> `;
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