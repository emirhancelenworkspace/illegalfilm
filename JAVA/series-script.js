document.addEventListener("DOMContentLoaded", () => {
   
const SeriesList = [
// Breaking Bad: 
  {
      id: 1,
      title: "Breaking Bad",
      year: 2008,
      imdb: 9.5,
      image: "images/dizi1.webp",
      description: "Chemistry teacher Walter White starts producing drugs to financially support his family after a terminal cancer diagnosis. A gripping journey between crime and moral dilemmas.",
      seasons: [
        {
          number: 1,
          episodeCount: 7,
          episodes: [
            { number: 1, title: "Pilot", description: "After his cancer diagnosis, Walter White makes a life-changing decision." },
            { number: 2, title: "Cat's in the Bag...", description: "Walter and Jesse start producing drugs for the first time." },
            { number: 3, title: "...And the Bag's in the River", description: "Walter faces the consequences of dangerous choices." },
            { number: 4, title: "Cancer Man", description: "Walter's family begins to feel the effects of his illness." },
            { number: 5, title: "Gray Matter", description: "Walter encounters old friends and questions past opportunities." },
            { number: 6, title: "Crazy Handful of Nothin'", description: "Walter starts to make a name for himself in the drug world." },
            { number: 7, title: "A No-Rough-Stuff-Type Deal", description: "Walter and Jesse plan a big deal." }
          ]
        },
        {
          number: 2,
          episodeCount: 13,
          episodes: [
            { number: 1, title: "Seven Thirty-Seven", description: "Walter and Jesse face new dangers." },
            { number: 2, title: "Grilled", description: "Things take an unexpectedly bad turn." },
            { number: 3, title: "Bit by a Dead Bee", description: "Walter and Jesse try to escape a tough situation." },
            { number: 4, title: "Down", description: "Family problems deepen." },
            { number: 5, title: "Breakage", description: "The drug business becomes more complicated." },
            { number: 6, title: "Peekaboo", description: "Walter faces dangerous truths." },
            { number: 7, title: "Negro y Azul", description: "The outside world grows darker." },
            { number: 8, title: "Better Call Saul", description: "A new lawyer enters the scene." },
            { number: 9, title: "4 Days Out", description: "Walter embarks on a journey of self-reflection." },
            { number: 10, title: "Over", description: "Moments of losing control begin." },
            { number: 11, title: "Mandala", description: "New threats emerge." },
            { number: 12, title: "Phoenix", description: "Losses are ruthless." },
            { number: 13, title: "ABQ", description: "Tragic events occur in the season finale." }
          ]
        },
        {
          number: 3,
          episodeCount: 13,
          episodes: [
            { number: 1, title: "No Más", description: "Walter is forced to return." },
            { number: 2, title: "Caballo Sin Nombre", description: "Jesse tries to start fresh." },
            { number: 3, title: "I.F.T.", description: "Walter's wife faces problems." },
            { number: 4, title: "Green Light", description: "Walter makes dangerous plans." },
            { number: 5, title: "Mas", description: "Gus's plans are revealed." },
            { number: 6, title: "Sunset", description: "The danger keeps growing." },
            { number: 7, title: "One Minute", description: "Dramatic confrontations occur." },
            { number: 8, title: "I See You", description: "Power dynamics shift." },
            { number: 9, title: "Kafkaesque", description: "Walter and Jesse continue their plans." },
            { number: 10, title: "Fly", description: "Walter's obsessive moments." },
            { number: 11, title: "Abiquiu", description: "Gus's trust is tested." },
            { number: 12, title: "Half Measures", description: "Walter makes difficult decisions." },
            { number: 13, title: "Full Measure", description: "Major decisions are made, and consequences follow." }
          ]
        },
        {
          number: 4,
          episodeCount: 13,
          episodes: [
            { number: 1, title: "Box Cutter", description: "Gus uses brutal methods." },
            { number: 2, title: "Thirty-Eight Snub", description: "Walter acquires new weapons." },
            { number: 3, title: "Open House", description: "Skyler fights to protect the family." },
            { number: 4, title: "Bullet Points", description: "Tension rises between Walter and Hank." },
            { number: 5, title: "Shotgun", description: "Jesse and Mike work together." },
            { number: 6, title: "Cornered", description: "Walter is cornered further." },
            { number: 7, title: "Problem Dog", description: "Jesse confronts his past." },
            { number: 8, title: "Hermanos", description: "Gus’s past is revealed." },
            { number: 9, title: "Bug", description: "Tension escalates." },
            { number: 10, title: "Salud", description: "Jesse goes to Mexico." },
            { number: 11, title: "Crawl Space", description: "The situation becomes critical for Walter." },
            { number: 12, title: "End Times", description: "The danger reaches its peak." },
            { number: 13, title: "Face Off", description: "A major showdown takes place." }
          ]
        },
        {
          number: 5,
          episodeCount: 16,
          episodes: [
            { number: 1, title: "Live Free or Die", description: "Walter embarks on a new struggle." },
            { number: 2, title: "Madrigal", description: "Gus's company becomes a target." },
            { number: 3, title: "Hazard Pay", description: "New partnerships are formed." },
            { number: 4, title: "Fifty-One", description: "Walter's life continues to change." },
            { number: 5, title: "Dead Freight", description: "A daring heist is planned." },
            { number: 6, title: "Buyout", description: "Tensions rise among partners." },
            { number: 7, title: "Say My Name", description: "Walter proves himself." },
            { number: 8, title: "Gliding Over All", description: "Walter's business grows." },
            { number: 9, title: "Blood Money", description: "Hank gets closer to Walter." },
            { number: 10, title: "Buried", description: "He tries to hide family secrets." },
            { number: 11, title: "Confessions", description: "Walter reveals his plans." },
            { number: 12, title: "Rabid Dog", description: "Jesse takes action against Walter." },
            { number: 13, title: "To'hajiilee", description: "A major conflict takes place." },
            { number: 14, title: "Ozymandias", description: "Everything collapses for Walter." },
            { number: 15, title: "Granite State", description: "Walter tries to escape." },
            { number: 16, title: "Felina", description: "Walter executes his final plan and the story ends." }
          ]
        }
      ]
  },

// Game of Thrones:
  {
      id: 2,
      title: "Game of Thrones",
      year: 2011,
      imdb: 9.3,
      image: "images/dizi2.webp",
      description: "In the Seven Kingdoms of Westeros, bloody struggles between noble families take place for the Iron Throne. A legendary tale where betrayal, war, and magic intertwine.",
      seasons: [
        {
          number: 1,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "Winter Is Coming", description: "King Robert Baratheon invites his old friend Ned Stark to become the Hand of the King." },
            { number: 2, title: "The Kingsroad", description: "The Stark family departs Winterfell; Jon Snow joins the Night’s Watch." },
            { number: 3, title: "Lord Snow", description: "Ned begins his duties in King’s Landing; Jon Snow makes new friends." },
            { number: 4, title: "Cripples, Bastards, and Broken Things", description: "Tyrion Lannister arrives in King’s Landing; Bran Stark lies in a coma after a mysterious fall." },
            { number: 5, title: "The Wolf and the Lion", description: "Ned causes tension in the Royal Council; Jaime Lannister confronts him." },
            { number: 6, title: "A Golden Crown", description: "Viserys Targaryen meets an unexpected end." },
            { number: 7, title: "You Win or You Die", description: "Ned investigates secrets behind King Robert’s death." },
            { number: 8, title: "The Pointy End", description: "War erupts across Westeros; the Starks begin to fall apart." },
            { number: 9, title: "Baelor", description: "A dramatic trial takes place." },
            { number: 10, title: "Fire and Blood", description: "Power shifts dramatically; dragons are born." }
          ]
        },
        {
          number: 2,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "The North Remembers", description: "A new order begins to form after the war in Westeros." },
            { number: 2, title: "The Night Lands", description: "Jon Snow continues his duties with the Night’s Watch." },
            { number: 3, title: "What Is Dead May Never Die", description: "The Ironborn deal with their political struggles." },
            { number: 4, title: "Garden of Bones", description: "The brutal side of war is revealed." },
            { number: 5, title: "The Ghost of Harrenhal", description: "Arya Stark assumes a new identity." },
            { number: 6, title: "The Old Gods and the New", description: "Characters confront their beliefs." },
            { number: 7, title: "A Man Without Honor", description: "Heroism and betrayal go hand in hand." },
            { number: 8, title: "The Prince of Winterfell", description: "The war spreads to the North of Westeros." },
            { number: 9, title: "Blackwater", description: "The Battle of Blackwater determines fate." },
            { number: 10, title: "Valar Morghulis", description: "New plans are made, betrayal continues." }
          ]
        },
        {
          number: 3,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "Valar Dohaeris", description: "Jon Snow meets a new leader at the Night’s Watch; Daenerys gathers her forces." },
            { number: 2, title: "Dark Wings, Dark Words", description: "Family betrayals deepen; Arya begins training." },
            { number: 3, title: "Walk of Punishment", description: "Preparations for war escalate; Jaime Lannister attempts escape." },
            { number: 4, title: "And Now His Watch Is Ended", description: "A major character dies tragically." },
            { number: 5, title: "Kissed by Fire", description: "Hidden secrets from the past emerge." },
            { number: 6, title: "The Climb", description: "The climb between power and betrayal continues." },
            { number: 7, title: "The Bear and the Maiden Fair", description: "Unexpected alliances are formed." },
            { number: 8, title: "Second Sons", description: "Daenerys expands her army." },
            { number: 9, title: "The Rains of Castamere", description: "The Red Wedding occurs, causing immense tragedy." },
            { number: 10, title: "Mhysa", description: "Daenerys frees the slaves." }
          ]
        },
        {
          number: 4,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "Two Swords", description: "New threats and schemes emerge." },
            { number: 2, title: "The Lion and the Rose", description: "The royal wedding ends in tragedy." },
            { number: 3, title: "Breaker of Chains", description: "Daenerys continues to strengthen her forces." },
            { number: 4, title: "Oathkeeper", description: "Promises are kept, new missions are taken." },
            { number: 5, title: "First of His Name", description: "A new king is crowned." },
            { number: 6, title: "The Laws of Gods and Men", description: "Tyrion is put on trial." },
            { number: 7, title: "Mockingbird", description: "Politics and betrayal intensify." },
            { number: 8, title: "The Mountain and the Viper", description: "A legendary duel takes place." },
            { number: 9, title: "The Watchers on the Wall", description: "The Night’s Watch defends the Wall." },
            { number: 10, title: "The Children", description: "A great battle and heavy losses occur." }
          ]
        },
        {
          number: 5,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "The Wars to Come", description: "New alliances and battles begin for the throne." },
            { number: 2, title: "The House of Black and White", description: "Arya continues her training." },
            { number: 3, title: "High Sparrow", description: "The balance of political power shifts." },
            { number: 4, title: "Sons of the Harpy", description: "Betrayal begins in the crypt." },
            { number: 5, title: "Kill the Boy", description: "Jon Snow makes difficult decisions." },
            { number: 6, title: "Unbowed, Unbent, Unbroken", description: "Betrayal and pain unfold in Dorne." },
            { number: 7, title: "The Gift", description: "New warriors join Daenerys’ army." },
            { number: 8, title: "Hardhome", description: "A great battle against the Night King and the undead army." },
            { number: 9, title: "The Dance of Dragons", description: "The power struggle between dragons continues." },
            { number: 10, title: "Mother's Mercy", description: "Betrayals increase and punishments are dealt." }
          ]
        },
        {
          number: 6,
          episodeCount: 10,
          episodes: [
            { number: 1, title: "The Red Woman", description: "Melisandre’s magic continues." },
            { number: 2, title: "Home", description: "Characters confront their pasts." },
            { number: 3, title: "Oathbreaker", description: "Jon Snow is expelled from the Night’s Watch." },
            { number: 4, title: "Book of the Stranger", description: "Daenerys gathers allies." },
            { number: 5, title: "The Door", description: "A great sacrifice and tragedy unfold." },
            { number: 6, title: "Blood of My Blood", description: "New alliances are forged." },
            { number: 7, title: "The Broken Man", description: "New hope arises after loss." },
            { number: 8, title: "No One", description: "Arya confronts her identity." },
            { number: 9, title: "Battle of the Bastards", description: "An epic battle between Jon Snow and Ramsay Bolton." },
            { number: 10, title: "The Winds of Winter", description: "Major power plays and schemes unfold." }
          ]
        },
        {
          number: 7,
          episodeCount: 7,
          episodes: [
            { number: 1, title: "Dragonstone", description: "Daenerys arrives in Westeros." },
            { number: 2, title: "Stormborn", description: "War preparations accelerate." },
            { number: 3, title: "The Queen's Justice", description: "Old scores are settled." },
            { number: 4, title: "The Spoils of War", description: "Dragons and war bring devastation." },
            { number: 5, title: "Eastwatch", description: "The Night’s Watch prepares for new threats." },
            { number: 6, title: "Beyond the Wall", description: "Jon and his team embark on a dangerous mission." },
            { number: 7, title: "The Dragon and the Wolf", description: "Major alliances are formed." }
          ]
        },
        {
          number: 8,
          episodeCount: 6,
          episodes: [
            { number: 1, title: "Winterfell", description: "Characters gather in Winterfell." },
            { number: 2, title: "A Knight of the Seven Kingdoms", description: "Preparations and farewells before war." },
            { number: 3, title: "The Long Night", description: "A massive battle against the Night King and his army." },
            { number: 4, title: "The Last of the Starks", description: "Post-war losses and new plans." },
            { number: 5, title: "The Bells", description: "A destructive siege on King’s Landing." },
            { number: 6, title: "The Iron Throne", description: "The fate of the throne is decided." }
          ]
        }
      ]
  },

// Stranger Things:
  {
    id: 3,
    title: "Stranger Things",
    year: 2016,
    imdb: 8.7,
    image: "images/dizi3.webp",
    description: "In the town of Hawkins, a boy mysteriously disappears. His friends and family discover a dangerous world filled with supernatural events.",
    seasons: [
      {
        number: 1,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "Chapter One: The Vanishing of Will Byers", description: "Will Byers mysteriously disappears." },
          { number: 2, title: "Chapter Two: The Weirdo on Maple Street", description: "A mysterious girl named Eleven appears." },
          { number: 3, title: "Chapter Three: Holly, Jolly", description: "Will’s friends and family come together to find him." },
          { number: 4, title: "Chapter Four: The Body", description: "Dark secrets are revealed in the town." },
          { number: 5, title: "Chapter Five: The Flea and the Acrobat", description: "Eleven uses her powers." },
          { number: 6, title: "Chapter Six: The Monster", description: "The supernatural creature threat grows." },
          { number: 7, title: "Chapter Seven: The Bathtub", description: "Eleven’s past slowly comes to light." },
          { number: 8, title: "Chapter Eight: The Upside Down", description: "The final battle and major secrets are revealed." }
        ]
      },
      {
        number: 2,
        episodeCount: 9,
        episodes: [
          { number: 1, title: "Chapter One: MADMAX", description: "New characters and new dangers emerge." },
          { number: 2, title: "Chapter Two: Trick or Treat, Freak", description: "A Halloween night full of fear." },
          { number: 3, title: "Chapter Three: The Pollywog", description: "Mysteries and dangers increase." },
          { number: 4, title: "Chapter Four: Will the Wise", description: "Will’s condition becomes critical." },
          { number: 5, title: "Chapter Five: Dig Dug", description: "Escape plans are made." },
          { number: 6, title: "Chapter Six: The Spy", description: "Eleven takes on a secret mission." },
          { number: 7, title: "Chapter Seven: The Lost Sister", description: "Eleven confronts her past." },
          { number: 8, title: "Chapter Eight: The Mind Flayer", description: "A new enemy emerges." },
          { number: 9, title: "Chapter Nine: The Gate", description: "A great battle begins for the town." }
        ]
      }
    ]
  },

// The Witcher:
  {
    id: 4,
    title: "The Witcher",
    year: 2019,
    imdb: 8.2,
    image: "images/dizi4.webp",
    description: "Geralt of Rivia is a monster hunter who battles supernatural creatures. Fate intertwines his path with the sorceress Yennefer and the young princess Ciri.",
    seasons: [
      {
        number: 1,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "The End's Beginning", description: "Geralt embarks on his first major monster-hunting mission." },
          { number: 2, title: "Four Marks", description: "Yennefer's past and her journey to become a sorceress are revealed." },
          { number: 3, title: "Betrayer Moon", description: "Geralt faces a difficult monster." },
          { number: 4, title: "Of Banquets, Bastards and Burials", description: "Political intrigues intensify among the kingdoms." },
          { number: 5, title: "Bottled Appetites", description: "Yennefer must use her powers." },
          { number: 6, title: "Rare Species", description: "Geralt and Ciri begin to discover their destinies." },
          { number: 7, title: "Before a Fall", description: "The signs of a great war begin to emerge." },
          { number: 8, title: "Much More", description: "The fates of the trio intertwine." }
        ]
      },
      {
        number: 2,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "A Grain of Truth", description: "New monsters and dangers emerge." },
          { number: 2, title: "Kaer Morhen", description: "Geralt returns for training with the other witchers." },
          { number: 3, title: "What Is Lost", description: "Clues of destiny are pursued." },
          { number: 4, title: "Redanian Intelligence", description: "Political intrigues deepen." },
          { number: 5, title: "Turn Your Back", description: "Geralt confronts his allies." },
          { number: 6, title: "Dear Friend", description: "The bond between Yennefer and Ciri grows stronger." },
          { number: 7, title: "Voleth Meir", description: "A battle against dark magic begins." },
          { number: 8, title: "Family", description: "The trio of destiny unites." }
        ]
      }
    ]
  },

// Friends: 
  {
    id: 5,
    title: "Friends",
    year: 1994,
    imdb: 8.9,
    image: "images/dizi5.webp",
    description: "The funny and emotional lives of Rachel, Ross, Monica, Chandler, Joey, and Phoebe in New York.",
    seasons: [
      {
        number: 1,
        episodeCount: 24,
        episodes: [
          {
            number: 1,
            title: "The One Where Monica Gets a Roommate",
            description: "Rachel moves in with Monica, and the friend group begins to take shape."
          },
          {
            number: 2,
            title: "The One with the Sonogram at the End",
            description: "Ross finds out his ex-wife is pregnant."
          },
          {
            number: 3,
            title: "The One with the Thumb",
            description: "Phoebe tries to quit smoking."
          },
          {
            number: 4,
            title: "The One with George Stephanopoulos",
            description: "The friends gossip about George Stephanopoulos."
          }
        ]
      },
      {
        number: 2,
        episodeCount: 24,
        episodes: [
          {
            number: 1,
            title: "The One with Ross's New Girlfriend",
            description: "Ross is back with his new girlfriend, Julie."
          },
          {
            number: 2,
            title: "The One with the Breast Milk",
            description: "Rachel struggles at her new job."
          },
          {
            number: 3,
            title: "The One Where Heckles Dies",
            description: "After their neighbor dies, the friends discover his belongings."
          },
          {
            number: 4,
            title: "The One with Phoebe's Husband",
            description: "Phoebe’s past marriage is revealed."
          }
        ]
      },
      {
        number: 3,
        episodeCount: 25,
        episodes: [
          {
            number: 1,
            title: "The One with the Princess Leia Fantasy",
            description: "Ross opens up to Rachel about his fantasies."
          },
          {
            number: 2,
            title: "The One Where No One's Ready",
            description: "Everyone prepares for an event, but ends up running late."
          },
          {
            number: 3,
            title: "The One with the Jam",
            description: "Monica tries making jam."
          },
          {
            number: 4,
            title: "The One with the Metaphorical Tunnel",
            description: "Rachel and Ross's relationship progresses."
          }
        ]
      }
      // Other seasons can be added similarly
    ]
  },

// The Office: 
  {
    id: 6,
    title: "The Office",
    year: 2005,
    imdb: 8.9,
    image: "images/dizi6.webp",
    description: "The daily office life and absurd humor of the employees at the Dunder Mifflin paper company in Scranton.",
    seasons: [
      {
        number: 1,
        episodeCount: 6,
        episodes: [
          { number: 1, title: "Pilot", description: "We are introduced to Michael Scott and the team." },
          { number: 2, title: "Diversity Day", description: "Diversity training at the office leads to unexpected reactions." },
          { number: 3, title: "Health Care", description: "Debates arise over the health insurance plan." },
          { number: 4, title: "The Alliance", description: "Alliances begin to form within the office." }
        ]
      },
      {
        number: 2,
        episodeCount: 22,
        episodes: [
          { number: 1, title: "The Dundies", description: "The annual office award ceremony takes place." },
          { number: 2, title: "Sexual Harassment", description: "Inappropriate behavior at the office becomes a topic of concern." },
          { number: 3, title: "Office Olympics", description: "Fun competitions among the employees." },
          { number: 4, title: "Halloween", description: "A costume party is held at the office." }
        ]
      }
    ]
  },
  
// Sherlock:
  {
    id: 7,
    title: "Sherlock",
    year: 2010,
    imdb: 9.1,
    image: "images/dizi7.webp",
    description: "Sherlock Holmes solves complex crimes in London using his intellect and unconventional methods.",
    seasons: [
      {
        number: 1,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "A Study in Pink", description: "Sherlock and Watson solve their first case together." },
          { number: 2, title: "The Blind Banker", description: "Mysterious bank heists and encrypted messages." },
          { number: 3, title: "The Great Game", description: "Sherlock investigates a series of murders." }
        ]
      },
      {
        number: 2,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "A Scandal in Belgravia", description: "Sherlock confronts Irene Adler." },
          { number: 2, title: "The Hounds of Baskerville", description: "A mythical beast legend is investigated." },
          { number: 3, title: "The Reichenbach Fall", description: "Sherlock faces his greatest enemy." }
        ]
      },
      {
        number: 3,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "The Empty Hearse", description: "Sherlock's return and new mysteries arise." },
          { number: 2, title: "The Sign of Three", description: "Watson’s wedding and unexpected events." },
          { number: 3, title: "His Last Vow", description: "A confrontation with a dangerous enemy." }
        ]
      },
      {
        number: 4,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "The Six Thatchers", description: "Sherlock confronts secrets from the past." },
          { number: 2, title: "The Lying Detective", description: "A lie and deepening conspiracies." },
          { number: 3, title: "The Final Problem", description: "Life-changing decisions for Sherlock." }
        ]
      }
    ]
  },
  
// Black Mirror: 
  {
    id: 8,
    title: "Black Mirror",
    year: 2011,
    imdb: 8.8,
    image: "images/dizi8.webp",
    description: "Independent stories exploring the impact of technology on human life through dark scenarios.",
    seasons: [
      {
        number: 1,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "The National Anthem", description: "An unexpected demand arises to resolve a national crisis." },
          { number: 2, title: "Fifteen Million Merits", description: "A talent competition in a dystopian future." },
          { number: 3, title: "The Entire History of You", description: "The recording and playback of human memory." }
        ]
      },
      {
        number: 2,
        episodeCount: 3,
        episodes: [
          { number: 1, title: "Be Right Back", description: "An attempt to bring back a deceased lover using artificial intelligence." },
          { number: 2, title: "White Bear", description: "A shocking experiment on the justice system." },
          { number: 3, title: "The Waldo Moment", description: "Political satire spiraling out of control." }
        ]
      },
      {
        number: 3,
        episodeCount: 6,
        episodes: [
          { number: 1, title: "Nosedive", description: "A world where social rating determines one's life." },
          { number: 2, title: "Playtest", description: "The thin line between reality and gaming." },
          { number: 3, title: "Shut Up and Dance", description: "Cyber blackmail and dark secrets." },
          { number: 4, title: "San Junipero", description: "A romantic story themed around immortality and virtual reality." }
        ]
      }
    ]
  },
  
// Narcos: 
  {
    id: 9,
    title: "Narcos",
    year: 2015,
    imdb: 8.8,
    image: "images/dizi9.webp",
    description: "A realistic story detailing Colombia's fight against drug cartels and the rise of Pablo Escobar.",
    seasons: [
      {
        number: 1,
        episodeCount: 10,
        episodes: [
          { number: 1, title: "Descenso", description: "Pablo Escobar gains power and DEA agents start their mission." },
          { number: 2, title: "The Sword of Simón Bolívar", description: "Escobar's influence grows as the fight intensifies." },
          { number: 3, title: "The Men of Always", description: "The complex structure of drug trafficking is revealed." },
          { number: 4, title: "The Palace in Flames", description: "The war between Escobar and the government escalates." }
        ]
      },
      {
        number: 2,
        episodeCount: 10,
        episodes: [
          { number: 1, title: "Free at Last", description: "Escobar escapes prison and makes new plans." },
          { number: 2, title: "Cambalache", description: "The lines between friends and enemies blur." },
          { number: 3, title: "Our Man in Madrid", description: "Escobar's international connections increase." },
          { number: 4, title: "Los Pepes", description: "Betrayals and struggles within the cartel." }
        ]
      }
      // More seasons and episodes can be added.
    ]
  },

// The Mandalorian:
  {
    id: 10,
    title: "The Mandalorian",
    year: 2019,
    imdb: 8.8,
    image: "images/dizi10.webp",
    description: "The dangerous journey of bounty hunter Mandalorian in a remote corner of the galaxy and his relationship with 'The Child'.",
    seasons: [
      {
        number: 1,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "Chapter 1: The Mandalorian", description: "The Mandalorian takes on a mission and discovers a mysterious child." },
          { number: 2, title: "Chapter 2: The Child", description: "A bond forms with the child taken under protection." },
          { number: 3, title: "Chapter 3: The Sin", description: "Facing difficult decisions." },
          { number: 4, title: "Chapter 4: Sanctuary", description: "The Mandalorian meets new allies." }
        ]
      },
      {
        number: 2,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "Chapter 9: The Marshal", description: "New enemies and alliances emerge." },
          { number: 2, title: "Chapter 10: The Passenger", description: "Taking on a risky mission." },
          { number: 3, title: "Chapter 11: The Heiress", description: "The Mandalorian reunites with old friends." },
          { number: 4, title: "Chapter 12: The Siege", description: "A dangerous attack is planned." }
        ]
      }
    ]
  },
  
// Peaky Blinders:
  {
    id: 11,
    title: "Peaky Blinders",
    year: 2013,
    imdb: 8.8,
    image: "images/dizi11.webp",
    description: "The relentless struggle of the Shelby family for power and revenge after World War I.",
    seasons: [
      {
        number: 1,
        episodeCount: 6,
        episodes: [
          { number: 1, title: "Episode 1", description: "Tommy Shelby rises in the criminal underworld." },
          { number: 2, title: "Episode 2", description: "Family tensions increase." },
          { number: 3, title: "Episode 3", description: "The police and enemies pose threats." }
        ]
      },
      {
        number: 2,
        episodeCount: 6,
        episodes: [
          { number: 1, title: "Episode 1", description: "New enemies target the Shelby family." },
          { number: 2, title: "Episode 2", description: "Things get even more complicated." },
          { number: 3, title: "Episode 3", description: "Revenge plans take shape." }
        ]
      }
    ]
  },

// Dexter: 
  {
    id: 12,
    title: "Dexter",
    year: 2006,
    imdb: 8.6,
    image: "images/dizi12.webp",
    description: "The dark and mysterious world of Dexter Morgan, who enforces his own rules of justice.",
    seasons: [
      {
        number: 1,
        episodeCount: 12,
        episodes: [
          { number: 1, title: "Dexter", description: "Dexter’s secret life is revealed." },
          { number: 2, title: "Crocodile", description: "New victims and dangers emerge." },
          { number: 3, title: "Popping Cherry", description: "Dexter faces difficult choices." }
        ]
      },
      {
        number: 2,
        episodeCount: 12,
        episodes: [
          { number: 1, title: "It's Alive!", description: "Secrets from the past resurface." },
          { number: 2, title: "Waiting to Exhale", description: "Dexter battles new enemies." },
          { number: 3, title: "An Inconvenient Lie", description: "Double lives become more complicated." }
        ]
      }
    ]
  },

// The Boys: 
  {
    id: 13,
    title: "The Boys",
    year: 2019,
    imdb: 8.7,
    image: "images/dizi13.webp",
    description: "The dark secrets of superheroes and the struggle of ordinary people trying to stop them.",
    seasons: [
      {
        number: 1,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "The Name of the Game", description: "The Boys investigate the true faces of superheroes." },
          { number: 2, title: "Cherry", description: "New alliances and threats emerge." },
          { number: 3, title: "Get Some", description: "Violence and intrigues escalate." }
        ]
      },
      {
        number: 2,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "The Big Ride", description: "The group targets new goals." },
          { number: 2, title: "Proper Preparation and Planning", description: "Plans take shape and risks increase." },
          { number: 3, title: "Over the Hill", description: "Tough choices and losses are experienced." }
        ]
      }
    ]
  },

// Chernobyl: 
  {
    id: 14,
    title: "Chernobyl",
    year: 2019,
    imdb: 9.4,
    image: "images/dizi14.webp",
    description: "The truth behind the Chernobyl nuclear disaster and the struggle for humanity.",
    seasons: [
      {
        number: 1,
        episodeCount: 5,
        episodes: [
          { number: 1, title: "1:23:45", description: "The start of the disaster and initial reactions." },
          { number: 2, title: "Please Remain Calm", description: "Crisis management and hidden truths." },
          { number: 3, title: "Open Wide, O Earth", description: "The sacrifices of heroes." }
        ]
      }
    ]
  },

// You: 
  {
    id: 15,
    title: "You",
    year: 2018,
    imdb: 7.8,
    image: "images/dizi15.webp",
    description: "The obsessive love and dark secrets of Joe Goldberg unfold.",
    seasons: [
      {
        number: 1,
        episodeCount: 10,
        episodes: [
          { number: 1, title: "Pilot", description: "Joe sets his sights on a new target." },
          { number: 2, title: "The Last Nice Guy in New York", description: "Joe's dark side is revealed." },
          { number: 3, title: "Maybe", description: "Obsession deepens." }
        ]
      },
      {
        number: 2,
        episodeCount: 10,
        episodes: [
          { number: 1, title: "A Fresh Start", description: "Joe begins a new life." },
          { number: 2, title: "Just the Tip", description: "Old habits don't die easily." },
          { number: 3, title: "What Are Friends For?", description: "Trust is tested." }
        ]
      }
    ]
  },

// Dark: 
  {
    id: 16,
    title: "Dark",
    year: 2017,
    imdb: 8.8,
    image: "images/dizi16.webp",
    description: "Secrets in a small town, family ties, and the complex cycles of time.",
    seasons: [
      {
        number: 1,
        episodeCount: 10,
        episodes: [
          { number: 1, title: "Secrets", description: "Mysterious disappearances begin in the town." },
          { number: 2, title: "Lies", description: "Truths slowly come to light." },
          { number: 3, title: "Past and Present", description: "First signs of time travel." }
        ]
      },
      {
        number: 2,
        episodeCount: 8,
        episodes: [
          { number: 1, title: "Beginnings and Endings", description: "The time loop expands." },
          { number: 2, title: "Dark Matter", description: "Family secrets deepen." },
          { number: 3, title: "Ghosts", description: "Confrontations with the past." }
        ]
      }
    ]
  },

];

  
const container = document.getElementById("series-list");
    container.innerHTML = SeriesList.map(series => `
            <div id="series-${series.id}" class="d-flex bg-dark text-white rounded overflow-hidden mb-3 p-3" style="min-width: 300px;">
              <div class="series-image-wrapper">
                <img src="${series.image}" alt="${series.title}" class="img-fluid h-100 w-100" style="object-fit: cover;" />
              </div>
              <div class="ms-3 flex-grow-1 d-flex flex-column">
                <h3 class="text-warning mb-2">${series.title} (${series.year})</h3>
                <p><strong>IMDb:</strong> ${series.imdb}</p>
                <p>${series.description}</p>

                <div class="accordion" id="accordionSeries-${series.id}">
                  ${series.seasons.map(season => `
                    <div class="accordion-item bg-secondary text-white mb-2">
                      <h2 class="accordion-header" id="heading-${series.id}-${season.number}">
                        <button class="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${series.id}-${season.number}" aria-expanded="false" aria-controls="collapse-${series.id}-${season.number}">
                          Season ${season.number} (${season.episodeCount} episodes)
                        </button>
                      </h2>
                      <div id="collapse-${series.id}-${season.number}" class="accordion-collapse collapse" aria-labelledby="heading-${series.id}-${season.number}" data-bs-parent="#accordionSeries-${series.id}">
                        <div class="accordion-body p-0">
                          <ul class="list-group list-group-flush">
                            ${season.episodes.map(episode => `
                              <li class="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                                <span>
                                  Episode ${episode.number}: ${episode.title}
                                </span>
                                <button class="btn btn-sm btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#episode-desc-${series.id}-${season.number}-${episode.number}" aria-expanded="false" aria-controls="episode-desc-${series.id}-${season.number}-${episode.number}">
                                  Description
                                </button>
                              </li>
                              <li class="collapse ps-3 pe-3 bg-secondary text-white" id="episode-desc-${series.id}-${season.number}-${episode.number}">
                                <small>${episode.description || 'No description.'}</small>
                              </li>
                            `).join('')}
                          </ul>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
      `).join('');

});
  