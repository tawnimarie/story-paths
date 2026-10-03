const PUBLIC_KEY = "bbed28c9ff7f7e913c7e486a01278ad964a1ffe9b3f999ad5ea7c089a9bc648f";

const STORY_PATHS = {
  1: {
    locations: {
      1: {
        shortName: "harbor town",
        name: "a foggy harbor town where ships arrive with strange cargo",
        description:
          "salt hangs in the air and gulls cry overhead. lanterns glow along the docks as sailors unload crates filled with curious things from distant shores.",
      },
      2: {
        shortName: "orchard village",
        name: "a quiet village surrounded by orchards and old stone walls",
        description:
          "the scent of apples drifts through narrow lanes. villagers move slowly here, and stories pass between neighbors as easily as baskets of fruit.",
      },
      3: {
        shortName: "woodland crossroads",
        name: "a woodland crossroads where travelers pass through at dusk",
        description:
          "paths wind through tall trees, meeting at a clearing where wanderers pause to rest. fires crackle, and stories are traded beneath the fading light.",
      },
      4: {
        shortName: "mountain settlement",
        name: "a mountain settlement perched along a winding path",
        description:
          "the air is thin and cold, and the road twists along steep cliffs. travelers who arrive here bring tales from far below and far beyond.",
      },
      5: {
        shortName: "roadside inn",
        name: "a lonely roadside inn where rumors drift from table to table",
        description:
          "the hearth burns late into the night as travelers share meals, secrets, and stories from the road.",
      },
      6: {
        shortName: "ancient ruins",
        name: "the edge of ancient ruins where the ground hums with old magic",
        description:
          "broken stone arches and weathered carvings hint at a forgotten age. sometimes, when the wind shifts, the ruins seem to whisper.",
      },
    },

    prompts: {
      1: {
        1: {
          setup:
            "a weather-beaten sailor returns a book claiming it saved him on a long voyage.",
          prompt:
            "share a book that stayed with you long after you finished it.",
        },
        2: {
          setup:
            "a young dock worker asks if you have a story about adventure in distant lands.",
          prompt: "recommend a travel or adventure book.",
        },
        3: {
          setup:
            "a crate of books washes ashore after last night's storm. one catches your eye.",
          prompt: "post the cover of the book you're currently reading.",
        },
        4: {
          setup:
            "a group of sailors argue over which story is the greatest ever told.",
          prompt: "share your all-time favorite book.",
        },
        5: {
          setup:
            "someone asks for a book that feels like the sea—vast, mysterious, a little dangerous.",
          prompt: "recommend a book with strong atmosphere.",
        },
        6: {
          setup:
            "a quiet traveler reads late into the night by lantern light.",
          prompt: "share a book that kept you reading past bedtime.",
        },
      },

      2: {
        1: {
          setup:
            "a villager asks for something comforting to read beneath the orchard trees.",
          prompt: "recommend a cozy book.",
        },
        2: {
          setup:
            "someone returns a book with pressed flowers tucked between the pages.",
          prompt: "share a quote you love from your current book.",
        },
        3: {
          setup:
            "a curious reader admits they haven't finished a book in a long time.",
          prompt: "share a book that helped you break a reading slump.",
        },
        4: {
          setup:
            "a farmer asks for a story to read aloud to their family tonight.",
          prompt: "recommend a book that's great to read with others.",
        },
        5: {
          setup:
            "a basket of fruit arrives with a note asking for your best book suggestion.",
          prompt: "recommend a book you think more people should read.",
        },
        6: {
          setup:
            "a local reader wants to try a new genre but doesn't know where to start.",
          prompt: "recommend a book from your favorite genre.",
        },
      },

      3: {
        1: {
          setup:
            "a traveler asks for a book that changed how you see the world.",
          prompt: "share a book that had a big impact on you.",
        },
        2: {
          setup: "a storyteller offers to trade tales with you by the fire.",
          prompt: "share a short summary of a book you recently finished.",
        },
        3: {
          setup: "a wanderer asks which book you'd bring on a long journey.",
          prompt: "share your ultimate 'desert island' book.",
        },
        4: {
          setup:
            "someone asks for a story that's strange, magical, or unforgettable.",
          prompt: "recommend a book with unusual vibes.",
        },
        5: {
          setup:
            "a traveler says they've lost track of their reading list.",
          prompt: "share one book from your tbr.",
        },
        6: {
          setup:
            "a curious guest wants to know which author you trust to never disappoint.",
          prompt: "share your favorite author.",
        },
      },

      4: {
        1: {
          setup:
            "a reader asks for a story strong enough to survive the long winter nights.",
          prompt: "recommend a long or immersive book.",
        },
        2: {
          setup: "a scholar is searching for a book with big ideas.",
          prompt: "recommend a thought-provoking read.",
        },
        3: {
          setup:
            "a traveler asks which book you'd reread if you had the chance.",
          prompt: "share a book you've reread more than once.",
        },
        4: {
          setup:
            "someone is looking for a book that will make them feel deeply.",
          prompt: "recommend an emotional read.",
        },
        5: {
          setup:
            "a visiting reader wants to try something completely new.",
          prompt: "recommend a book outside your usual genres.",
        },
        6: {
          setup:
            "a stranger asks for the most beautiful book you've read.",
          prompt: "share a beautifully written book.",
        },
      },

      5: {
        1: {
          setup:
            "a lively debate breaks out over which stories are overrated.",
          prompt: "share a popular book you didn't love.",
        },
        2: {
          setup: "a traveler asks which book made you laugh the most.",
          prompt: "recommend a funny book.",
        },
        3: {
          setup:
            "someone asks for a book that feels like a warm fire on a cold night.",
          prompt: "recommend a comfort read.",
        },
        4: {
          setup:
            "a group of travelers exchange book recommendations over dinner.",
          prompt: "share a book you recommended recently.",
        },
        5: {
          setup:
            "a quiet guest is looking for something short to read tonight.",
          prompt: "recommend a short book or novella.",
        },
        6: {
          setup: "someone asks which book surprised you the most.",
          prompt: "share a book that exceeded your expectations.",
        },
      },

      6: {
        1: {
          setup:
            "a mysterious reader asks for the oldest book you've read.",
          prompt: "share a classic you enjoyed.",
        },
        2: {
          setup: "a dusty tome falls open to a passage you can't forget.",
          prompt: "share a memorable quote.",
        },
        3: {
          setup: "a scholar asks for a book that feels timeless.",
          prompt: "recommend a classic or modern classic.",
        },
        4: {
          setup: "a traveler is searching for forgotten stories.",
          prompt: "recommend an underrated book.",
        },
        5: {
          setup:
            "a visitor asks which book you think deserves to become a classic someday.",
          prompt: "share a modern book you think will last.",
        },
        6: {
          setup:
            "a ghost appears asking which book you'd want remembered forever.",
          prompt:
            "share a book you think everyone should read at least once.",
        },
      },
    },
  },

  2: {
    locations: {
      1: {
        shortName: "moonlit marsh",
        name: "a moonlit marsh where lanterns drift without their keepers",
        description:
          "mist hangs low over dark water as pale lanterns drift between the reeds. no one seems to know who lit them, and travelers are warned not to follow the lights too far.",
      },
      2: {
        shortName: "abandoned observatory",
        name: "an abandoned observatory where the stars seem strangely close",
        description:
          "dusty star charts cover the walls and an enormous brass telescope remains pointed toward the heavens. through its lens, the constellations don't look quite the way you remember.",
      },
      3: {
        shortName: "overgrown manor",
        name: "an overgrown manor slowly being reclaimed by its garden",
        description:
          "ivy crawls through shattered windows and wildflowers bloom across forgotten rooms. books remain where their readers left them, though no one remembers who lived here.",
      },
      4: {
        shortName: "midnight market",
        name: "a midnight market where stories are traded instead of coins",
        description:
          "lantern-lit stalls crowd narrow streets that weren't there before sunset. merchants offer peculiar wares, but here stories are worth considerably more than coins.",
      },
      5: {
        shortName: "lighthouse",
        name: "a lighthouse standing at the edge of an endless black sea",
        description:
          "the light sweeps slowly across an endless black sea, illuminating ships too distant to identify. the keeper insists some of them have been sailing for years.",
      },
      6: {
        shortName: "subterranean archive",
        name: "a subterranean archive where forgotten books are kept",
        description:
          "endless shelves descend beneath the earth, holding books forgotten by the world above. the archivists insist nothing written is ever truly lost.",
      },
    },

    prompts: {
      1: {
        1: {
          setup:
            "a lantern flickers beside a half-submerged path, illuminating something unsettling.",
          prompt:
            "recommend a book that gave you the creeps without necessarily being horror.",
        },
        2: {
          setup:
            "a traveler emerges from the mist insisting they've been walking in circles.",
          prompt:
            "share a book that completely lost you at some point, but you kept reading anyway.",
        },
        3: {
          setup:
            "something moves beneath the water and disappears before you can see it clearly.",
          prompt:
            "recommend a book that's better the less you know before reading it.",
        },
        4: {
          setup:
            "a voice somewhere among the reeds begins telling a familiar story differently.",
          prompt:
            "share a retelling or reimagining you think did something interesting with its source.",
        },
        5: {
          setup:
            "a lantern floats toward you carrying a scrap of paper with a single name written on it.",
          prompt:
            "share a fictional character you still think about unexpectedly.",
        },
        6: {
          setup:
            "the path divides beneath the mist, and neither direction appears on your map.",
          prompt:
            "share a book that went somewhere completely different than you expected.",
        },
      },

      2: {
        1: {
          setup:
            "an astronomer asks which story first made your world feel larger.",
          prompt:
            "share a book that introduced you to something you'd never encountered before.",
        },
        2: {
          setup:
            "a constellation has been named after a fictional character.",
          prompt:
            "choose a character you think deserves their own constellation.",
        },
        3: {
          setup:
            "a stack of predictions sits beneath an old star chart. most of them were completely wrong.",
          prompt: "share a book you predicted incorrectly while reading.",
        },
        4: {
          setup:
            "the telescope reveals a distant world that looks strangely inviting.",
          prompt:
            "share a fictional world you'd visit despite knowing it might be a terrible idea.",
        },
        5: {
          setup: "an unfinished chart has room for one final star.",
          prompt:
            "recommend a book you think deserves far more attention than it gets.",
        },
        6: {
          setup:
            "a note in the astronomer's journal describes seeing the same story differently years later.",
          prompt: "share a book your opinion of changed over time.",
        },
      },

      3: {
        1: {
          setup:
            "a book lies open beside a chair as though its reader only just stepped away.",
          prompt:
            "share a book you associate strongly with a particular time in your life.",
        },
        2: {
          setup:
            "you find a children's book tucked behind a loose floorboard.",
          prompt: "share a book you loved when you were younger.",
        },
        3: {
          setup:
            "portraits line the staircase, but one face feels oddly familiar.",
          prompt: "share a character who reminded you of yourself.",
        },
        4: {
          setup:
            "someone has filled the margins of an old novel with furious little notes.",
          prompt: "share a book you have VERY strong opinions about.",
        },
        5: {
          setup:
            "the garden has swallowed an entire room except for one bookshelf.",
          prompt:
            "choose one book from your collection you'd rescue if you could only save one.",
        },
        6: {
          setup:
            "a forgotten letter contains a recommendation that was never delivered.",
          prompt: "recommend a book to your past self.",
        },
      },

      4: {
        1: {
          setup:
            "a bookseller offers you one perfect recommendation in exchange for one of yours.",
          prompt:
            "recommend a book you'd happily press into a stranger's hands.",
        },
        2: {
          setup:
            "a merchant sells books wrapped in paper, with only three words written on each.",
          prompt:
            "describe a book you love in exactly three words and let others guess it.",
        },
        3: {
          setup:
            "a stallholder promises to find exactly what you're looking for.",
          prompt:
            "name one thing you wish you could find more often in books.",
        },
        4: {
          setup:
            "two merchants are loudly arguing over which book has the better ending.",
          prompt: "share a book whose ending you particularly loved.",
        },
        5: {
          setup:
            "a bookseller offers you a story chosen entirely by its appearance.",
          prompt:
            "share a book you originally picked up because of its cover.",
        },
        6: {
          setup:
            "the final stall accepts only unusual recommendations as payment.",
          prompt:
            "recommend a book that doesn't fit neatly into the genres you usually read.",
        },
      },

      5: {
        1: {
          setup:
            "the lighthouse keeper asks what story you'd want during a very long night.",
          prompt: "share a book you find genuinely comforting.",
        },
        2: {
          setup:
            "a bottle washes ashore containing a message from another reader.",
          prompt:
            "share one sentence of advice you'd give someone choosing their next book.",
        },
        3: {
          setup:
            "a ship appears on the horizon carrying characters from the last book you finished.",
          prompt: "tell us whether you'd let them dock.",
        },
        4: {
          setup:
            "the keeper admits there's one book they've started many times but never finished.",
          prompt:
            "share a book you've repeatedly tried (but failed) to get through.",
        },
        5: {
          setup:
            "the sea is perfectly still tonight, and the keeper asks for a story to break the silence.",
          prompt: "recommend a book you could talk about for hours.",
        },
        6: {
          setup:
            "a distant light appears where no land should exist.",
          prompt:
            "share an upcoming or unread book you're especially excited to reach.",
        },
      },

      6: {
        1: {
          setup:
            "an archivist asks you to restore one forgotten book to the world's attention.",
          prompt:
            "recommend an older or overlooked book you wish more people read.",
        },
        2: {
          setup:
            "a shelf is reserved for books whose sentences readers carried with them forever.",
          prompt:
            "share a quote or passage from a book that stayed with you.",
        },
        3: {
          setup:
            "you discover a book you once meant to read and somehow forgot about.",
          prompt:
            "share something that's been buried in your tbr for far too long.",
        },
        4: {
          setup:
            "an archivist asks which writer deserves an entire shelf of their own.",
          prompt:
            "share an author whose work you'd happily keep reading.",
        },
        5: {
          setup:
            "one shelf contains books readers abandoned before discovering what they might become.",
          prompt:
            "share a book you almost gave up on but are glad you finished.",
        },
        6: {
          setup:
            "at the very bottom of the archive stands one empty pedestal. its inscription reads: “for the story that must not be forgotten.”",
          prompt:
            "choose one book you'd preserve for readers hundreds of years from now.",
        },
      },
    },
  },
};
const ALTERNATE_PROMPTS = {
  1: "recommend a book you almost didn't read, but ended up loving.",
  2: "share a book you've been meaning to read for ages but haven't started yet.",
  3: "recommend a book based purely on its vibes (no summary, just feeling).",
  4: "share a character you still think about and why they stayed with you.",
  5: "recommend a book you would give to someone new to your favorite genre.",
  6: "share a book you read at exactly the right time in your life.",
  7: "recommend a book you don't see talked about enough.",
  8: "share a book you finished recently and your one-sentence verdict.",
  9: "recommend a book based only on its opening line or premise.",
  10: "share a book you loved for the writing style alone.",
  11: "share a book that didn't work for you (and why).",
  12: "recommend something unsettling or strange.",
  13: "share a book you wish you could experience again for the first time.",
  14: "recommend a book that surprised you in the best way.",
  15: "share a book you picked up on a whim and ended up loving.",
  16: "recommend a book with a setting you never wanted to leave.",
  17: "share a book that changed your mind about something.",
  18: "recommend a book with a character you became unexpectedly attached to.",
  19: "share a book that was nothing like you expected it to be.",
  20: "recommend a book you think deserves to be rediscovered.",
  21: "share a book you remember more for how it made you feel than what happened.",
  22: "recommend a book you think reveals something new on a reread.",
  23: "share a book you'd leave behind for another traveler to find.",
};
async function getAlternatePrompt(userId, volume, row, column, env) {
  const currentCycleRow = await env.DB.prepare(
    `SELECT COALESCE(MAX(cycle), 1) AS cycle
     FROM alternates
     WHERE user_id = ?`
  )
    .bind(userId)
    .first();

  let cycle = Number(currentCycleRow?.cycle ?? 1);

  const usedRows = await env.DB.prepare(
    `SELECT prompt_id
     FROM alternates
     WHERE user_id = ?
       AND cycle = ?`
  )
    .bind(userId, cycle)
    .all();

  const used = new Set(
    (usedRows.results ?? []).map((row) => Number(row.prompt_id))
  );

  if (used.size >= 23) {
    cycle += 1;
    used.clear();
  }

  const available = [];

  for (let promptId = 1; promptId <= 23; promptId++) {
    if (!used.has(promptId)) {
      available.push(promptId);
    }
  }

  const chosenId =
    available[Math.floor(Math.random() * available.length)];

  await env.DB.prepare(
    `INSERT INTO alternates
      (user_id, prompt_id, cycle, volume, row_num, column_num, given_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      userId,
      chosenId,
      cycle,
      volume,
      row,
      column,
      Date.now()
    )
    .run();

  return {
    id: chosenId,
    prompt: ALTERNATE_PROMPTS[chosenId],
    cycle,
  };
}
const COOLDOWN_MS = 60 * 60 * 1000;

async function getCooldown(userId, env) {
  const latestRoll = await env.DB.prepare(
    `SELECT rolled_at
     FROM rolls
     WHERE user_id = ?
     ORDER BY rolled_at DESC
     LIMIT 1`
  )
    .bind(userId)
    .first();

  if (!latestRoll) {
    return 0;
  }

  const elapsed = Date.now() - Number(latestRoll.rolled_at);
  const remaining = COOLDOWN_MS - elapsed;

  return Math.max(0, remaining);
}

function formatCooldown(remainingMs) {
  const minutes = Math.ceil(remainingMs / 60000);

  if (minutes <= 1) {
    return "less than a minute";
  }

  return `${minutes} minutes`;
}
async function getJournal(userId, env) {
  const totalRow = await env.DB.prepare(
    `SELECT COUNT(*) AS total
     FROM rolls
     WHERE user_id = ?`
  )
    .bind(userId)
    .first();

  const volumeRows = await env.DB.prepare(
    `SELECT
       volume,
       COUNT(*) AS journeys,
       COUNT(DISTINCT row_num || '-' || column_num) AS unique_places
     FROM rolls
     WHERE user_id = ?
     GROUP BY volume`
  )
    .bind(userId)
    .all();

  const alternateRow = await env.DB.prepare(
    `SELECT COUNT(DISTINCT prompt_id) AS discovered
     FROM alternates
     WHERE user_id = ?`
  )
    .bind(userId)
    .first();

  const mostVisitedRow = await env.DB.prepare(
    `SELECT
       volume,
       row_num,
       COUNT(*) AS visits
     FROM rolls
     WHERE user_id = ?
     GROUP BY volume, row_num
     ORDER BY visits DESC, MAX(rolled_at) DESC
     LIMIT 1`
  )
    .bind(userId)
    .first();

  const lastPathRow = await env.DB.prepare(
    `SELECT volume, row_num, column_num
     FROM rolls
     WHERE user_id = ?
     ORDER BY rolled_at DESC
     LIMIT 1`
  )
    .bind(userId)
    .first();

  const volumes = {
    1: { journeys: 0, uniquePlaces: 0 },
    2: { journeys: 0, uniquePlaces: 0 },
  };

  for (const row of volumeRows.results ?? []) {
    const volume = Number(row.volume);

    volumes[volume] = {
      journeys: Number(row.journeys),
      uniquePlaces: Number(row.unique_places),
    };
  }

  let mostVisited = "none yet";

  if (mostVisitedRow) {
    const volume = Number(mostVisitedRow.volume);
    const row = Number(mostVisitedRow.row_num);

    mostVisited = STORY_PATHS[volume].locations[row].shortName;
  }

  let lastPath = "none yet";

  if (lastPathRow) {
    const volume = Number(lastPathRow.volume);
    const row = Number(lastPathRow.row_num);
    const column = Number(lastPathRow.column_num);
    const location = STORY_PATHS[volume].locations[row];

    lastPath =
      `${location.shortName} · vol. ${volume} · ${row} ✦ ${column}`;
  }

  return {
    total: Number(totalRow?.total ?? 0),
    volumes,
    alternates: Number(alternateRow?.discovered ?? 0),
    mostVisited,
    lastPath,
  };
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);

  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return bytes;
}

async function verifyDiscordRequest(request) {
  const signature = request.headers.get("X-Signature-Ed25519");
  const timestamp = request.headers.get("X-Signature-Timestamp");

  if (!signature || !timestamp) return false;

  const body = await request.clone().text();

  const key = await crypto.subtle.importKey(
    "raw",
    hexToBytes(PUBLIC_KEY),
    { name: "Ed25519" },
    false,
    ["verify"]
  );

  return crypto.subtle.verify(
    "Ed25519",
    key,
    hexToBytes(signature),
    new TextEncoder().encode(timestamp + body)
  );
}

function getUserId(interaction) {
  return interaction.member?.user?.id ?? interaction.user?.id;
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

async function registerCommands(env) {
  const url =
    `https://discord.com/api/v10/applications/${env.APPLICATION_ID}` +
    `/guilds/${env.GUILD_ID}/commands`;

  const commands = [
    {
      name: "storypath",
      description: "wander the library or open your Story Paths journal",
      type: 1,
      options: [
        {
          type: 1,
          name: "wander",
          description: "begin a new Story Path",
        },
        {
          type: 1,
          name: "journal",
          description: "open your Story Paths journal",
        },
      ],
    },
  ];

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bot ${env.DISCORD_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}

function volumeButtons(userId) {
  return [
    {
      type: 1,
      components: [
        {
          type: 2,
          style: 2,
          label: "vol. 1",
          custom_id: `storypath_volume_1_${userId}`,
        },
        {
          type: 2,
          style: 2,
          label: "vol. 2",
          custom_id: `storypath_volume_2_${userId}`,
        },
      ],
    },
  ];
}

async function handleVolumeChoice(interaction, env) {
  const userId = getUserId(interaction);
  const customId = interaction.data.custom_id;

  const match = customId.match(/^storypath_volume_([12])_(\d+)$/);

  if (!match) {
    return Response.json({
      type: 4,
      data: {
        content: "✦ the library seems to have misplaced that path.",
        flags: 64,
      },
    });
  }

  const volume = Number(match[1]);
  const ownerId = match[2];

  if (userId !== ownerId) {
    return Response.json({
      type: 4,
      data: {
        content:
          "✦ this path belongs to another traveler. summon the library with `/storypath wander` to find your own.",
        flags: 64,
      },
    });
  }
  const remaining = await getCooldown(userId, env);

if (remaining > 0) {
  return Response.json({
    type: 7,
    data: {
      content: `_ _
✦ t__he library hasn't moved on just ye__t...
_ _
the shelves are still settling around your last path.
_ _
**you can wander again in ${formatCooldown(remaining)}.**`,
      components: [],
    },
  });
}

  const row = rollD6();
  const column = rollD6();

  const location = STORY_PATHS[volume].locations[row];
  const encounter = STORY_PATHS[volume].prompts[row][column];

  const previousVisit = await env.DB.prepare(
    `SELECT id
     FROM rolls
     WHERE user_id = ?
       AND volume = ?
       AND row_num = ?
       AND column_num = ?
     LIMIT 1`
  )
    .bind(userId, volume, row, column)
    .first();

  await env.DB.prepare(
    `INSERT INTO rolls
      (user_id, volume, row_num, column_num, rolled_at)
     VALUES (?, ?, ?, ?, ?)`
  )
    .bind(userId, volume, row, column, Date.now())
    .run();

  if (!previousVisit) {
    return Response.json({
      type: 7,
      data: {
        content: `_ _
✦ y__our story path has been reveale__d...
_ _
**vol. ${volume} · ${row} ✦ ${column}**
_ _
*${location.shortName}*
_ _
${encounter.setup}
**${encounter.prompt}**
_ _
-# find your place on the pinned map · respond with \`.rpg [your response]\``,
        components: [],
      },
    });
  }

  return Response.json({
    type: 7,
    data: {
      content: `_ _
✦ y__ou've wandered this path befor__e...
_ _
**vol. ${volume} · ${row} ✦ ${column}**
_ _
*${location.shortName}*
_ _
${encounter.setup}
**${encounter.prompt}**
_ _
✦ f__ollow the familiar path, or let the library shif__t?
_ _`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 2,
              label: "use original",
              custom_id: `storypath_original_${volume}_${row}_${column}_${userId}`,
            },
            {
              type: 2,
              style: 2,
              label: "give me an alternate",
              custom_id: `storypath_alternate_${volume}_${row}_${column}_${userId}`,
            },
          ],
        },
      ],
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/register") {
      return registerCommands(env);
    }

    if (request.method === "GET") {
      return new Response("story paths is awake. ✦");
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const valid = await verifyDiscordRequest(request);

    if (!valid) {
      return new Response("Invalid request signature", { status: 401 });
    }

    const interaction = await request.json();

    if (interaction.type === 1) {
      return Response.json({ type: 1 });
    }

    // Slash commands
    if (interaction.type === 2 && interaction.data?.name === "storypath") {
      const subcommand = interaction.data?.options?.[0]?.name;
      const userId = getUserId(interaction);

      if (subcommand === "wander") {
        const remaining = await getCooldown(userId, env);

if (remaining > 0) {
  return Response.json({
    type: 4,
    data: {
      content: `_ _
✦ t__he library hasn't moved on just ye__t...
_ _
the shelves are still settling around your last path.
_ _
**you can wander again in ${formatCooldown(remaining)}.**`,
    },
  });
}
        return Response.json({
          type: 4,
          data: {
            content: `_ _
✦ t__he library stir__s...
_ _
shelves shift somewhere beyond sight, and a new path begins to form.
_ _
**choose where you'd like to wander:**
_ _`,
            components: volumeButtons(userId),
          },
        });
      }

      if (subcommand === "journal") {
  const journal = await getJournal(userId, env);

  return Response.json({
    type: 4,
    data: {
      content: `_ _
✦ <@${userId}>'s s__tory path journa__l
_ _
**paths wandered:** ${journal.total}
_ _
**vol. 1:** ${journal.volumes[1].journeys} journeys · ${journal.volumes[1].uniquePlaces} unique places
**vol. 2:** ${journal.volumes[2].journeys} journeys · ${journal.volumes[2].uniquePlaces} unique places
_ _
**alternate paths discovered:** ${journal.alternates} / 23
**most visited:** ${journal.mostVisited}
**last path:** ${journal.lastPath}
_ _
*the library remembers every road, even when the traveler does not.*`,
    },
  });
}
}

    // Button clicks
    if (
      interaction.type === 3 &&
      interaction.data?.custom_id?.startsWith("storypath_volume_")
    ) {
      return handleVolumeChoice(interaction, env);
    }
    // Repeat path: use original
if (
  interaction.type === 3 &&
  interaction.data?.custom_id?.startsWith("storypath_original_")
) {
  const userId = getUserId(interaction);

  const match = interaction.data.custom_id.match(
    /^storypath_original_([12])_([1-6])_([1-6])_(\d+)$/
  );

  if (!match) {
    return Response.json({
      type: 4,
      data: {
        content: "✦ the library seems to have misplaced that path.",
        flags: 64,
      },
    });
  }

  const volume = Number(match[1]);
  const row = Number(match[2]);
  const column = Number(match[3]);
  const ownerId = match[4];

  if (userId !== ownerId) {
    return Response.json({
      type: 4,
      data: {
        content: "✦ this path belongs to another traveler.",
        flags: 64,
      },
    });
  }

  const location = STORY_PATHS[volume].locations[row];
  const encounter = STORY_PATHS[volume].prompts[row][column];

  return Response.json({
    type: 7,
    data: {
      content: `_ _
✦ t__he familiar path opens once mor__e...
_ _
**vol. ${volume} · ${row} ✦ ${column}**
_ _
*${location.shortName}*
_ _
${encounter.setup}
**${encounter.prompt}**
_ _
-# find your place on the pinned map · respond with \`.rpg [your response]\``,
      components: [],
    },
  });
}
// Repeat path: give me an alternate
if (
  interaction.type === 3 &&
  interaction.data?.custom_id?.startsWith("storypath_alternate_")
) {
  const userId = getUserId(interaction);

  const match = interaction.data.custom_id.match(
    /^storypath_alternate_([12])_([1-6])_([1-6])_(\d+)$/
  );

  if (!match) {
    return Response.json({
      type: 4,
      data: {
        content: "✦ the library seems to have misplaced that path.",
        flags: 64,
      },
    });
  }

  const volume = Number(match[1]);
  const row = Number(match[2]);
  const column = Number(match[3]);
  const ownerId = match[4];

  if (userId !== ownerId) {
    return Response.json({
      type: 4,
      data: {
        content: "✦ this path belongs to another traveler.",
        flags: 64,
      },
    });
  }

  const alternate = await getAlternatePrompt(
    userId,
    volume,
    row,
    column,
    env
  );

  return Response.json({
    type: 7,
    data: {
      content: `_ _
✦ t__he path shifts beneath your fee__t...
_ _
something here is different this time.
_ _
**${alternate.prompt}**
_ _
-# alternate prompt · vol. ${volume} · ${row} ✦ ${column}
_ _
-# respond with \`.rpg [your response]\``,
      components: [],
    },
  });
}

    return Response.json({
      type: 4,
      data: {
        content: "✦ the library seems unsure which path you meant to take.",
        flags: 64,
      },
    });
  },
};
