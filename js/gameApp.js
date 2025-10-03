import { computed, createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const gameLibrary = [
  {
    id: 'html5',
    title: 'HTML5 Games',
    description: 'Modern, plugin-free experiences that run smoothly on any device.',
    games: [
      { name: '2048', url: 'gfiles/html5games/2048/index.html', tags: ['puzzle'] },
      { name: 'Astray', url: 'gfiles/html5games/astray/index.html', tags: ['maze', '3d'] },
      { name: 'Breaklock', url: 'gfiles/html5games/breaklock/index.html', tags: ['logic'] },
      { name: 'Breakout', url: 'gfiles/html5games/nerd.html', tags: ['arcade', 'classic'] },
      { name: 'Cookie Clicker', url: 'gfiles/cookies/index.html', tags: ['idle'] },
      { name: 'Flappy Bird', url: 'gfiles/html5games/flappybird/index.html', tags: ['arcade'] },
      { name: 'Hextris', url: 'gfiles/html5games/hextris/index.html', tags: ['puzzle'] },
      { name: 'Onslaught! Arena', url: 'gfiles/onslaughtarena.html', tags: ['action'] },
      { name: 'Pac-Man', url: 'gfiles/html5games/pacman/index.htm', tags: ['arcade', 'classic'] },
      { name: 'Radius Raid', url: 'gfiles/html5games/radius-raid/min.html', tags: ['shooter'] },
      { name: 'Space Invaders', url: 'gfiles/html5games/spaceinvaders/index.html', tags: ['arcade', 'classic'] },
      { name: 'Towermaster', url: 'gfiles/html5games/towermaster/index.html', tags: ['strategy'] }
    ]
  },
  {
    id: 'flash',
    title: 'Flash Games',
    description: 'Curated classics preserved with Flash emulation for the full nostalgia trip.',
    games: [
      { name: '1 on 1 Soccer', url: 'gfiles/1-on-1-soccer.html', tags: ['sports'] },
      { name: 'Achievement Unlocked', url: 'gfiles/achievement-unlocked.html', tags: ['platformer'] },
      { name: 'Achievement Unlocked 2', url: 'gfiles/achievementunlocked2.html', tags: ['platformer'] },
      { name: 'Achievement Unlocked 3', url: 'gfiles/achievementunlocked3.html', tags: ['platformer'] },
      { name: 'Action Turnip', url: 'gfiles/action-turnip.html', tags: ['action'] },
      { name: 'Adaran', url: 'gfiles/adaran.html', tags: ['action'] },
      { name: 'Adrenaline', url: 'gfiles/adrenaline.html', tags: ['action'] },
      { name: 'Agar.io', url: 'gfiles/agario.html', tags: ['multiplayer'] },
      { name: 'Arkandian Revenant', url: 'gfiles/arkandianrenevant.html', tags: ['rpg'] },
      { name: 'Awesome Cars', url: 'gfiles/awesome-cars.html', tags: ['racing'] },
      { name: 'Awesome Planes', url: 'gfiles/awesome-planes.html', tags: ['shooter'] },
      { name: 'Bloons Player Pack 2', url: 'gfiles/balloons-player-pack-2.html', tags: ['tower defense'] },
      { name: 'Bloons TD 3', url: 'gfiles/bloonstd3.html', tags: ['tower defense'] },
      { name: 'Bloons TD 4', url: 'gfiles/bloonstd4.html', tags: ['tower defense'] },
      { name: 'Bloons TD 5', url: 'gfiles/balloons-td-5.html', tags: ['tower defense'] },
      { name: 'BoomBot 2', url: 'gfiles/boombot2.html', tags: ['puzzle'] },
      { name: 'Boxhead 2 Player', url: 'gfiles/boxhead2player.html', tags: ['action'] },
      { name: 'Bullet Bill', url: 'gfiles/bulletbill.html', tags: ['arcade'] },
      { name: 'Casualty Chrome', url: 'gfiles/casualty.html', tags: ['puzzle'] },
      { name: 'Computer Smashing', url: 'gfiles/computerbreak.html', tags: ['arcade'] },
      { name: 'Crush the Castle', url: 'gfiles/crushthecastle.html', tags: ['physics'] },
      { name: 'Cubefield', url: 'gfiles/cubefield.html', tags: ['arcade'] },
      { name: 'Cyclomaniacs', url: 'gfiles/cyclomaniacs.html', tags: ['racing'] },
      { name: 'Donkey Kong', url: 'gfiles/donkeykong.html', tags: ['arcade', 'classic'] },
      { name: "Don't Shoot The Puppy", url: 'gfiles/dontshootthepuppy.html', tags: ['strategy'] },
      { name: 'Doodle Defender', url: 'gfiles/doodledefender.html', tags: ['shooter'] },
      { name: 'Doom', url: 'gfiles/doom.html', tags: ['shooter', 'classic'] },
      { name: 'Duck Life 4', url: 'gfiles/ducklife4.html', tags: ['simulation'] },
      { name: 'Earn to Die: Super Wheel', url: 'gfiles/earntodiesw.html', tags: ['racing'] },
      { name: 'Electric Man', url: 'gfiles/electricman.html', tags: ['fighting'] },
      { name: 'Electric Man 2', url: 'gfiles/electricman2.html', tags: ['fighting'] },
      { name: 'Elephant Quest', url: 'gfiles/elephantquest.html', tags: ['platformer'] },
      { name: 'Epic Combo: Redux', url: 'gfiles/epiccomboredux.html', tags: ['arcade'] },
      { name: 'Exit Path', url: 'gfiles/exitpath.html', tags: ['platformer'] },
      { name: 'Fancy Pants World 3', url: 'gfiles/fancypantsworld3.html', tags: ['platformer'] },
      { name: 'Flash Flight Simulator', url: 'gfiles/flashflightsimulator.html', tags: ['simulation'] },
      { name: 'Flight', url: 'gfiles/flight.html', tags: ['arcade'] },
      { name: 'Happy Wheels', url: 'gfiles/happywheels.html', tags: ['ragdoll'] },
      { name: 'Hobo', url: 'gfiles/hobo.html', tags: ['fighting'] },
      { name: 'Hobo: Prison Brawl', url: 'gfiles/hobo2.html', tags: ['fighting'] },
      { name: 'Hobo 3', url: 'gfiles/hobo3.html', tags: ['fighting'] },
      { name: 'Hobo 5', url: 'gfiles/hobo5.html', tags: ['fighting'] },
      { name: 'Hobo 6', url: 'gfiles/hobo6.html', tags: ['fighting'] },
      { name: 'Infector 2', url: 'gfiles/infector2.html', tags: ['strategy'] },
      { name: 'Interactive Buddy', url: 'gfiles/interactivebuddy.html', tags: ['sandbox'] },
      { name: 'Jumpix 2', url: 'gfiles/jumpix2.html', tags: ['platformer'] },
      { name: 'Learn to Fly', url: 'gfiles/learntofly.html', tags: ['arcade'] },
      { name: 'Learn to Fly 2', url: 'gfiles/learntofly2.html', tags: ['arcade'] },
      { name: 'Magnet Face', url: 'gfiles/magnetface.html', tags: ['puzzle'] },
      { name: 'Mario Racing Tournament', url: 'gfiles/marioracingtournament.html', tags: ['racing'] },
      { name: 'Megaman Project X', url: 'gfiles/megamanprojectx.html', tags: ['action'] },
      { name: 'Metroid 2', url: 'gfiles/metroid2.html', tags: ['action'] },
      { name: 'Mineblocks', url: 'gfiles/mineblocks.html', tags: ['sandbox'] },
      { name: 'Millionaire to Billionaire', url: 'gfiles/millionairetobillionaire.html', tags: ['strategy'] },
      { name: "Mirror's Edge", url: 'gfiles/mirrorsedge.html', tags: ['platformer'] },
      { name: 'Motherload', url: 'gfiles/motherload.html', tags: ['mining'] },
      { name: 'Multitask', url: 'gfiles/multitask.html', tags: ['arcade'] },
      { name: 'Mutilate A Doll 2', url: 'gfiles/mutilateadoll.html', tags: ['sandbox'] },
      { name: 'My Angel', url: 'gfiles/myangel.html', tags: ['arcade'] },
      { name: 'Nanotube', url: 'gfiles/nanotube.html', tags: ['arcade'] },
      { name: 'N Game', url: 'gfiles/ngame.html', tags: ['platformer'] },
      { name: 'N Game 2', url: 'gfiles/ngame2.html', tags: ['platformer'] },
      { name: 'Nucleus', url: 'gfiles/nucleus.html', tags: ['puzzle'] },
      { name: 'Nyan Cat: Lost in Space', url: 'gfiles/nyancat.html', tags: ['arcade'] },
      { name: 'One Man Army 2', url: 'gfiles/onemanarmy2.html', tags: ['action'] },
      { name: 'Pandemic', url: 'gfiles/pandemic.html', tags: ['strategy'] },
      { name: 'Pandemic 2', url: 'gfiles/pandemic2.html', tags: ['strategy'] },
      { name: 'Papas Freezeria', url: 'gfiles/papasfreezeria.html', tags: ['simulation'] },
      { name: 'Pause Ahead', url: 'gfiles/pauseahead.html', tags: ['platformer'] },
      { name: 'Portal', url: 'gfiles/portal.html', tags: ['puzzle'] },
      { name: 'Portal 2D', url: 'gfiles/portal2d.html', tags: ['puzzle'] },
      { name: 'Raft Wars', url: 'gfiles/raftwars.html', tags: ['strategy'] },
      { name: 'Raze 2', url: 'gfiles/raze2.html', tags: ['shooter'] },
      { name: 'Redshift', url: 'gfiles/redshift.html', tags: ['shooter'] },
      { name: 'Run 3', url: 'gfiles/run3.html', tags: ['endless runner'] },
      { name: 'Sports Heads Soccer', url: 'gfiles/sportsheadssoccer.html', tags: ['sports'] },
      { name: 'Stick RPG', url: 'gfiles/stickrpg.html', tags: ['rpg'] },
      { name: 'Stick Run 2', url: 'gfiles/stickrun2.html', tags: ['arcade'] },
      { name: 'Stick War', url: 'gfiles/stickwar.html', tags: ['strategy'] },
      { name: 'Stick War 2', url: 'gfiles/stickwar2.html', tags: ['strategy'] },
      { name: 'Strike Force Heroes', url: 'gfiles/strikeforceheroes.html', tags: ['shooter'] },
      { name: 'Strike Force Heroes 2', url: 'gfiles/strikeforceheroes2.html', tags: ['shooter'] },
      { name: 'Strike Force Kitty: Last Stand', url: 'gfiles/strikeforcekittyls.html', tags: ['strategy'] },
      { name: 'Super Mario 63', url: 'gfiles/supermario63.html', tags: ['platformer'] },
      { name: 'Super Smash Flash 2', url: 'gfiles/smashflash2.html', tags: ['fighting'] },
      { name: 'Tactical Assassin', url: 'gfiles/tacticalassassin.html', tags: ['shooter'] },
      { name: 'Tank Trouble', url: 'gfiles/tanktrouble.html', tags: ['strategy'] },
      { name: 'The Binding of Isaac', url: 'gfiles/thebindingofisaac.html', tags: ['roguelike'] }
    ]
  }
];

const normalise = (value) => value.toLowerCase();

const mountGameApp = (mountSelector) => {
  const mountPoint = document.querySelector(mountSelector);
  if (!mountPoint) {
    return;
  }

  const totalGames = gameLibrary.reduce((count, category) => count + category.games.length, 0);

  createApp({
    setup() {
      const searchTerm = ref('');

      const filteredCategories = computed(() => {
        const query = normalise(searchTerm.value.trim());

        return gameLibrary
          .map((category) => {
            const games = !query
              ? category.games
              : category.games.filter((game) => {
                  const haystack = [game.name, ...(game.tags ?? [])]
                    .filter(Boolean)
                    .map((entry) => normalise(entry));

                  return haystack.some((entry) => entry.includes(query));
                });

            return {
              ...category,
              games
            };
          })
          .filter((category) => !query || category.games.length > 0);
      });

      const visibleCount = computed(() =>
        filteredCategories.value.reduce((count, category) => count + category.games.length, 0)
      );

      const hasResults = computed(() => visibleCount.value > 0);

      const clearSearch = () => {
        searchTerm.value = '';
      };

      return {
        clearSearch,
        filteredCategories,
        hasResults,
        searchTerm,
        totalGames,
        visibleCount
      };
    },
    template: /* html */ `
      <div class="game-library d-flex flex-column gap-5">
        <div class="content-card text-white">
          <div class="row g-3 align-items-end">
            <div class="col-12 col-md-8">
              <label class="form-label text-white-50 fw-semibold" for="game-search">Search the library</label>
              <input
                id="game-search"
                class="form-control form-control-lg"
                type="search"
                placeholder="Search by title or tag (e.g. tower defense, racing)"
                v-model.trim="searchTerm"
                autocomplete="off"
              />
            </div>
            <div class="col-12 col-md-4 text-md-end">
              <p class="small text-white-50 mb-0">
                Showing {{ visibleCount }} of {{ totalGames }} games
              </p>
            </div>
          </div>
        </div>

        <div v-if="hasResults" class="row gy-5">
          <div
            v-for="category in filteredCategories"
            :key="category.id"
            class="col-12 col-lg-6"
          >
            <div class="content-card text-white h-100">
              <h2 class="h4 text-uppercase text-white-50 mb-3">{{ category.title }}</h2>
              <p class="small text-white-50 mb-4" v-if="category.description">{{ category.description }}</p>
              <div class="row row-cols-1 row-cols-sm-2 g-3">
                <div v-for="game in category.games" :key="game.name" class="col">
                  <a class="btn btn-outline-white w-100" :href="game.url">
                    {{ game.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="content-card text-white text-center py-5">
          <p class="lead mb-3">No games match that search just yet.</p>
          <button class="btn btn-outline-white btn-lg" type="button" @click="clearSearch">
            Clear search
          </button>
        </div>
      </div>
    `
  }).mount(mountPoint);
};

mountGameApp('#game-app');
