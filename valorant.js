const skinUrl = ('https://valorant-api.com/v1/weapons/skins')
const agentUrl = ("https://valorant-api.com/v1/agents");


// fetch(mapsUrl)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//MAPS
const mapsUrl = ("https://valorant-api.com/v1/maps");
const mapsNav = document.querySelector(".map-nav");
const mapMain = document.querySelector(".map-main")
var mapsButton = document.querySelector(".map-nav-item");

function loadMap(mapIndex){
  fetch(mapsUrl)
  .then(response => response.json())
  .then(response => {
    var tempMapName = response["data"][mapIndex].displayName;
    var tempMapImg = response["data"][mapIndex].splash;
    var tempMapHTML;
    tempMapHTML += "<div class='map-image'>" + tempMapImg + "</div>";
    tempMapHTML += "<div class='map-callouts'>" + tempMapName + "</div>";
    mapMain.innerHTML = tempMapHTML;
  });
};

window.addEventListener("load", function() {
  fetch(mapsUrl)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    for (num in response["data"]){
      if (num != 6){
        var tempMap = response["data"][num].displayName;
        mapsNav.innerHTML += `<button class = 'map-nav-item' onClick ='loadMap(${num})'>` + tempMap + "</button>";
      }

    }

  })
  .catch(err => console.error(err));
});
 