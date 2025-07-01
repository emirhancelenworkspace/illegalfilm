// Movie lists categorized by genre
const familylist = [
  // Family movies with title, image path, IMDb rating, release year, and link to category section
  { title: "The Incredibles", image: "images/theincredibles.webp", imdb: "8.0", year: 2004, Link: "Movies.html#movie-1" },
  { title: "Finding Nemo", image: "images/findingnemo.webp", imdb: "8.1", year: 2003, Link: "Movies.html#movie-2" },
  { title: "Coco", image: "images/coco.webp", imdb: "8.4", year: 2017, Link: "Movies.html#movie-3" },
  { title: "Paddington", image: "images/film4.webp", imdb: "7.2", year: 2014, Link: "Movies.html#movie-4" },
  { title: "Toy Story", image: "images/film5.webp", imdb: "8.3", year: 1995, Link: "Movies.html#movie-5" },
  { title: "Mary Poppins", image: "images/film6.webp", imdb: "7.8", year: 1964, Link: "Movies.html#movie-6" },
  { title: "Zootopia", image: "images/film7.webp", imdb: "8.0", year: 2016, Link: "Movies.html#movie-7" },
  { title: "The Lion King", image: "images/film8.webp", imdb: "8.5", year: 1994, Link: "Movies.html#movie-8" },
];

// Action movies list
const actionlist = [
  // Each object represents an action movie with details and category link
  { title: "Mad Max: Fury Road", image: "images/film9.webp", imdb: "8.1", year: 2015, Link: "Movies.html#movie-9" },
  { title: "John Wick", image: "images/film10.webp", imdb: "7.4", year: 2014, Link: "Movies.html#movie-10" },
  { title: "Gladiator", image: "images/film11.webp", imdb: "8.5", year: 2000, Link: "Movies.html#movie-11" },
  { title: "The Dark Knight", image: "images/film12.webp", imdb: "9.0", year: 2008, Link: "Movies.html#movie-12" },
  { title: "Inception", image: "images/film13.webp", imdb: "8.8", year: 2010, Link: "Movies.html#movie-13" },
  { title: "Avengers: Endgame", image: "images/film14.webp", imdb: "8.4", year: 2019, Link: "Movies.html#movie-14" },
  { title: "Casino Royale", image: "images/film15.webp", imdb: "8.0", year: 2006, Link: "Movies.html#movie-15" },
  { title: "The Matrix", image: "images/film16.webp", imdb: "8.7", year: 1999, Link: "Movies.html#movie-16" },
];

// Animation movies list
const animationlist = [
  // Animation movies with same structure
  { title: "Spirited Away", image: "images/film17.webp", imdb: "8.6", year: 2001, Link: "Movies.html#movie-17" },
  { title: "Shrek", image: "images/film18.webp", imdb: "7.9", year: 2001, Link: "Movies.html#movie-18" },
  { title: "How to Train Your Dragon", image: "images/film19.webp", imdb: "8.1", year: 2010, Link: "Movies.html#movie-19" },
  { title: "Up", image: "images/film20.webp", imdb: "8.2", year: 2009, Link: "Movies.html#movie-20" },
  { title: "Ratatouille", image: "images/film21.webp", imdb: "8.0", year: 2007, Link: "Movies.html#movie-21" },
  { title: "Despicable Me", image: "images/film22.webp", imdb: "7.6", year: 2010, Link: "Movies.html#movie-22" },
  { title: "WALL·E", image: "images/film23.webp", imdb: "8.4", year: 2008, Link: "Movies.html#movie-23" },
  { title: "Kung Fu Panda", image: "images/film24.webp", imdb: "7.5", year: 2008, Link: "Movies.html#movie-24" },
];

// Fantasy movies list
const fantasylist = [
  // Fantasy genre movies details
  { title: "Harry Potter and the Sorcerer's Stone", image: "images/film25.webp", imdb: "7.6", year: 2001, Link: "Movies.html#movie-25" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", image: "images/film26.webp", imdb: "8.8", year: 2001, Link: "Movies.html#movie-26" },
  { title: "Pan's Labyrinth", image: "images/film27.webp", imdb: "8.2", year: 2006, Link: "Movies.html#movie-27" },
  { title: "The Shape of Water", image: "images/film28.webp", imdb: "7.3", year: 2017, Link: "Movies.html#movie-28" },
  { title: "Fantastic Beasts and Where to Find Them", image: "images/film29.webp", imdb: "7.3", year: 2016, Link: "Movies.html#movie-29" },
  { title: "Stardust", image: "images/film30.webp", imdb: "7.6", year: 2007, Link: "Movies.html#movie-30" },
  { title: "The Chronicles of Narnia", image: "images/film31.webp", imdb: "6.9", year: 2005, Link: "Movies.html#movie-31" },
  { title: "The Hobbit: An Unexpected Journey", image: "images/film32.webp", imdb: "7.8", year: 2012, Link: "Movies.html#movie-32" },
];

// Comedy movies list
const comedylist = [
  // Comedy movies with details and category links
  { title: "Superbad", image: "images/film33.webp", imdb: "7.6", year: 2007, Link: "Movies.html#movie-33" },
  { title: "The Hangover", image: "images/film34.webp", imdb: "7.7", year: 2009, Link: "Movies.html#movie-34" },
  { title: "Step Brothers", image: "images/film35.webp", imdb: "6.9", year: 2008, Link: "Movies.html#movie-35" },
  { title: "Anchorman", image: "images/film36.webp", imdb: "7.2", year: 2004, Link: "Movies.html#movie-36" },
  { title: "Bridesmaids", image: "images/film37.webp", imdb: "6.8", year: 2011, Link: "Movies.html#movie-37" },
  { title: "Zoolander", image: "images/film38.webp", imdb: "6.6", year: 2001, Link: "Movies.html#movie-38" },
  { title: "Ghostbusters", image: "images/film39.webp", imdb: "7.8", year: 1984, Link: "Movies.html#movie-39" },
  { title: "Tropic Thunder", image: "images/film40.webp", imdb: "7.0", year: 2008, Link: "Movies.html#movie-40" },
];

// Horror movies list
const horrorlist = [
  // Horror genre movies with details
  { title: "The Conjuring", image: "images/film41.webp", imdb: "7.5", year: 2013, Link: "Movies.html#movie-41" },
  { title: "Get Out", image: "images/film42.webp", imdb: "7.7", year: 2017, Link: "Movies.html#movie-42" },
  { title: "A Quiet Place", image: "images/film43.webp", imdb: "7.5", year: 2018, Link: "Movies.html#movie-43" },
  { title: "Hereditary", image: "images/film44.webp", imdb: "7.3", year: 2018, Link: "Movies.html#movie-44" },
  { title: "It", image: "images/film45.webp", imdb: "7.3", year: 2017, Link: "Movies.html#movie-45" },
  { title: "The Babadook", image: "images/film46.webp", imdb: "6.8", year: 2014, Link: "Movies.html#movie-46" },
  { title: "Insidious", image: "images/film47.webp", imdb: "6.8", year: 2010, Link: "Movies.html#movie-47" },
  { title: "The Ring", image: "images/film48.webp", imdb: "7.1", year: 2002, Link: "Movies.html#movie-48" },
];

// Romantic movies list
const romanticlist = [
  // Romantic genre movies
  { title: "The Notebook", image: "images/film49.webp", imdb: "7.8", year: 2004, Link: "Movies.html#movie-49" },
  { title: "La La Land", image: "images/film50.webp", imdb: "8.0", year: 2016, Link: "Movies.html#movie-50" },
  { title: "Titanic", image: "images/film51.webp", imdb: "7.8", year: 1997, Link: "Movies.html#movie-51" },
  { title: "Pride & Prejudice", image: "images/film52.webp", imdb: "7.8", year: 2005, Link: "Movies.html#movie-52" },
  { title: "A Star is Born", image: "images/film53.webp", imdb: "7.6", year: 2018, Link: "Movies.html#movie-53" },
  { title: "Before Sunrise", image: "images/film54.webp", imdb: "8.1", year: 1995, Link: "Movies.html#movie-54" },
  { title: "Eternal Sunshine of the Spotless Mind", image: "images/film55.webp", imdb: "8.3", year: 2004, Link: "Movies.html#movie-55" },
  { title: "The Fault in Our Stars", image: "images/film56.webp", imdb: "7.7", year: 2014, Link: "Movies.html#movie-56" },
];



const serieslist = [
  { title: "Breaking Bad", image: "images/dizi1.webp", imdb: "9.5", year: 2008, Link: "Series.html#series-1" },
  { title: "Game of Thrones", image: "images/dizi2.webp", imdb: "9.3", year: 2011, Link: "Series.html#series-2" },
  { title: "Stranger Things", image: "images/dizi3.webp", imdb: "8.7", year: 2016, Link: "Series.html#series-3" },
  { title: "The Witcher", image: "images/dizi4.webp", imdb: "8.2", year: 2019, Link: "Series.html#series-4" },
  { title: "Friends", image: "images/dizi5.webp", imdb: "8.9", year: 1994, Link:  "Series.html#series-5"},
  { title: "The Office", image: "images/dizi6.webp", imdb: "8.9", year: 2005, Link:  "Series.html#series-6"},
  { title: "Sherlock", image: "images/dizi7.webp", imdb: "9.1", year: 2010, Link:  "Series.html#series-7"},
  { title: "Black Mirror", image: "images/dizi8.webp", imdb: "8.8", year: 2011, Link:  "Series.html#series-8"},
  { title: "Narcos", image: "images/dizi9.webp", imdb: "8.8", year: 2015, Link:  "Series.html#series-9"},
  { title: "The Mandalorian", image: "images/dizi10.webp", imdb: "8.8", year: 2019, Link:  "Series.html#series-10"},
  { title: "Peaky Blinders", image: "images/dizi11.webp", imdb: "8.8", year: 2013, Link: "Series.html#series-11"},
  { title: "Dexter", image: "images/dizi12.webp", imdb: "8.6", year: 2006, Link:  "Series.html#series-12"},
  { title: "The Boys", image: "images/dizi13.webp", imdb: "8.7", year: 2019, Link:  "Series.html#series-13"},
  { title: "Chernobyl", image: "images/dizi14.webp", imdb: "9.4", year: 2019, Link:  "Series.html#series-14"},
  { title: "You", image: "images/dizi15.webp", imdb: "7.8", year: 2018, Link:  "Series.html#series-15"},
  { title: "Dark", image: "images/dizi16.webp", imdb: "8.8", year: 2017, Link: "Series.html#series-16" },
];


function addCategory(list, categoryName) {
  return list.map(item => ({
    ...item,
    categoryName
  }));
}












function renderFilmCards(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  movies.forEach(movie => {
    const cardHTML = `
      <a href="${movie.Link}" class="text-decoration-none">
        <div class="card bg-dark text-white movie-card" style="min-width: 200px;">
          <div class="img-wrapper">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}" />
          </div>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.year} • IMDb ${movie.imdb}</p>
          </div>
        </div>
      </a>
    `;
    container.innerHTML += cardHTML;
  });
}

renderFilmCards(familylist, "FamilyList");
renderFilmCards(actionlist, "ActionList");
renderFilmCards(animationlist, "AnimationList");
renderFilmCards(fantasylist, "FantasyList");
renderFilmCards(comedylist, "ComedyList");
renderFilmCards(horrorlist, "HorrorList");
renderFilmCards(romanticlist, "RomanticList");
renderFilmCards(serieslist, "SeriesList");




