let photoImg;

fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then(response => response.json())
  .then(json => (photoImg = json));

export default photoImg;
