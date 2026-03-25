const searchMusic = document.getElementById("searchMusic");
const btnSearch = document.getElementById("btnSearch");
const result = document.getElementById("result");

async function getLyrics() {
  const music = searchMusic.value.trim();

  const response = await fetch(
    `https://lrclib.net/api/search?q=${encodeURIComponent(music)}`,
  );
  const data = await response.json();

  console.log(data);
}

btnSearch.addEventListener("click", getLyrics);
