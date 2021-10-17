const skinUrl = ('https://valorant-api.com/v1/weapons/skins');
const gunUrl = ('https://valorant-api.com/v1/weapons');
const gunMain = document.querySelector(".gun-main");


function changeSkin(gunIndex){
	var selectSkin = document.querySelector(`.temp-skin-${gunIndex}`);
	var selection = selectSkin.selectedIndex;
	var newImg = selectSkin.options[selection].value;
	// console.log(newImg);
	var imageToChange = document.querySelector(`#change_${gunIndex}`);
	// console.log(imageToChange);
	imageToChange.src = newImg;
}

function loadGun(gunIndex){
	fetch(gunUrl)
	.then(response => response.json())
	.then(response => {
	  var tempGunName = response["data"][gunIndex].displayName;
	  var tempGunImg = response["data"][gunIndex].displayIcon;
	  var tempGunSkinList = response["data"][gunIndex]["skins"];
	  var tempGunSkinHTML = `<div class='skin-selector'> <label for ='temp-skin-${gunIndex}'></label>`;
	  tempGunSkinHTML += `<select class='temp-skin-${gunIndex}' name='Skin' onchange='changeSkin(${gunIndex})'>`;
	  tempGunSkinHTML += `<option value ='default'> Default </option>`;
	  for (numSkin in tempGunSkinList){
		var tempGunSkin = response["data"][gunIndex]["skins"][numSkin].displayName;
		var tempGunSkinLink = response["data"][gunIndex]["skins"][numSkin].displayIcon;
		tempGunSkinHTML += `<option value ='${tempGunSkinLink}'> ${tempGunSkin} </option>`;
	  }
	  tempGunSkinHTML += "</select> </div>";

	  var tempGunHTML;
	  tempGunHTML = '<div class ="gun-item">';
	  tempGunHTML += "<div class='gun-name'> <h3>" + tempGunName + "</h3> </div> ";
	  tempGunHTML += tempGunSkinHTML;
	  if (gunIndex > 6 && gunIndex < 12){
		tempGunHTML += `<div class='gun-image-small'> <img id ='change_${gunIndex}' src = ${tempGunImg}  >`;  
	  }
	  else if (gunIndex == 17){
		tempGunHTML += `<div class='gun-image-knife'> <img id ='change_${gunIndex}' src = ${tempGunImg}  >`;  
	  }
	  else{
	  	tempGunHTML += `<div class='gun-image'> <img id='change_${gunIndex}'src= ${tempGunImg} >`;
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
	// console.log(response)
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