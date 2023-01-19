const tiles = document.querySelectorAll('.tile');
const gooseImg = document.querySelector('#goose');
const width = window.innerWidth;
const height = window.innerHeight;
let tilesClicked = 0;

tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    tile.style.display = 'none';
    tilesClicked++;
    if (tilesClicked === 9) {
        gooseImg.style.width = "100vw";
        gooseImg.style.height = "100vh";
        gooseImg.style.display = 'block';
    }
  });
});
