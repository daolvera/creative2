const url = ('https://www.whenisthenextmcufilm.com/api');
fetch(url)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
