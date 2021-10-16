const agentUrl = ("https://valorant-api.com/v1/agents");
const agentNav = document.querySelector(".agent-nav");
const agentMain = document.querySelector(".agent-main");
// var agentButton =
function loadAgent(agentIndex){
	fetch(agentUrl)
	.then(response => response.json())
	.then(response => {
	  var tempAgentName = response["data"][agentIndex].displayName;
	  var tempAgentImg = response["data"][agentIndex].fullPortrait;
	  var tempAgentRole = response['data'][agentIndex]['role'].displayIcon;
	  var agentAbilityHTML;
	  for (var i=0; i< 4; i++ ){
		var tempAgentAbility = response["data"][agentIndex]["abilities"][i].displayName;
		var agentAbilityIcon = response["data"][agentIndex]["abilities"][i].displayIcon;
		if (i=== 0){
			agentAbilityHTML = `<div class='agent-ability-item'> <img src = '${agentAbilityIcon}'> ${tempAgentAbility}</div>`;
		}
		else {
			agentAbilityHTML += `<div class='agent-ability-item'> <img src = '${agentAbilityIcon}'> ${tempAgentAbility}</div>`;
			// console.log(tempAgentAbility);
		}
	  }
	  var tempAgentHTML;
	  tempAgentHTML = "<div class='agent-name'> ";
	  tempAgentHTML += "<div class='agent-title'><h3>" + tempAgentName + "</h3> </div>";
	  tempAgentHTML += `<div class='agent-role'> <img src=${tempAgentRole}> </div>  </div>` ;
	  tempAgentHTML += `<div class='agent-image'> <img src=${tempAgentImg}> </div> `;
	  tempAgentHTML += `<div class='agent-info'> `;
	  tempAgentHTML += `<div class='agent-ability'> ${agentAbilityHTML} </div> `;
	  tempAgentHTML += `</div> `;
	//   console.log(tempAgentHTML)
	  agentMain.innerHTML = tempAgentHTML;
	});
};

window.addEventListener("load", function() {
	fetch(agentUrl)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// default Agent Loaded
		loadAgent(8); 
		for (agent in response["data"]){
			if (agent != 5){
				var agentName = response['data'][agent].displayName;
				// console.log(agentName);
				agentNav.innerHTML += `<button class='agent-nav-item' onClick = 'loadAgent(${agent})'>` + agentName + "</button>"
			}
		}
	})
	.catch(err => console.error(err));
  });