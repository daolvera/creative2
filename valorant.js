// header("Access-Control-Allow-Origin: *");
// const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch('https://api.pandascore.co/valorant/teams?sort=&page=1&per_page=50', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
const skinUrl = ('https://valorant-api.com/v1/weapons/skins')
const mapsUrl = ("https://valorant-api.com/v1/maps");
const agentUrl = ("https://valorant-api.com/v1/agents");
fetch(agentUrl)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

 