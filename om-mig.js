/* =========================
   ERFARING (data-cv)
========================= */
(() => {
  const root = document.querySelector("[data-cv]");
  if (!root) return;

  const dotEl = root.querySelector("[data-cv-dot]");
  const metaEl = root.querySelector("[data-cv-meta]");
  const titleEl = root.querySelector("[data-cv-title]");
  const descEl = root.querySelector("[data-cv-desc]");
  const countEl = root.querySelector("[data-cv-count]");

  const prevBtn = root.querySelector(".cv-carousel__btn--prev");
  const nextBtn = root.querySelector(".cv-carousel__btn--next");

  const cvItems = [
    {
      start: "2025-04",
      meta: "APR 2025 – JUN 2025",
      title: "Assisterende butikschef – Basic & More, Amager Centret",
      desc: "Ansvar for daglig drift, overblik i butikken og støtte til teamet i en travl hverdag."
    },
    {
      start: "2024-01",
      meta: "JAN 2024 – OKT 2024",
      title: "Frivillig – CISV Danmark",
      desc: "Deltager og frivillig i CISV Danmark – fokus på fredsuddannelse, kulturforståelse og menneskerettigheder."
    },
    {
      start: "2024-01",
      meta: "JAN 2024 – OKT 2024",
      title: "Ufaglært plejehjælper – Sct. Jørgensbjerg Plejecenter",
      desc: "Fast aftenvagt. Selvstændigt arbejde, ansvar og hurtige beslutninger."
    },
    {
      start: "2023-07",
      meta: "JUL 2023 – APR 2024",
      title: "Tilkaldevikar – Børnehuset Fjordly",
      desc: "Konflikthåndtering, relationsarbejde og tålmodighed i arbejdet med børn."
    },
    {
      start: "2023-06",
      meta: "JUN 2023 – NOV 2023",
      title: "Sælger – Storm Group (Red Barnet)",
      desc: "Kommunikation og salg. Erfaring med dialog på både dansk og engelsk."
    },
    {
      start: "2022-02",
      meta: "FEB 2022 – FEB 2023",
      title: "Over 18 leder – Coop 365, Hvalsø",
      desc: "Ansvarshavende. Overblik og uddelegering af opgaver."
    },
    {
      start: "2017-01",
      meta: "JAN 2017 – DEC 2020",
      title: "Spejderleder – KFUM",
      desc: "Leder for børn (8–11 år). Planlægning, ansvar og ledererfaring."
    },
    {
      start: "2017-01",
      meta: "JAN 2017 – APR 2020",
      title: "Ungarbejder – Spar Borrevejle",
      desc: "Kassemedarbejder. Kundeservice og ro i pressede situationer."
    },
    {
      start: "2015-02",
      meta: "FEB 2015 – DEC 2017",
      title: "Avisomdeler – FK Distribution",
      desc: "Ansvar og planlægning fra ung alder. Planlagde selv ruter og levering."
    }
  ];

  // Sortér nyeste først
  cvItems.sort((a, b) => b.start.localeCompare(a.start));

  // Dot som 01, 02, 03...
  cvItems.forEach((item, i) => {
    item.dot = String(i + 1).padStart(2, "0");
  });

  let index = 0;

  function render() {
    const item = cvItems[index];
    if (!item) return;

    dotEl.textContent = item.dot;
    metaEl.textContent = item.meta;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;

    if (countEl) countEl.textContent = `${index + 1} / ${cvItems.length}`;
  }

  function prev() {
    index = (index - 1 + cvItems.length) % cvItems.length;
    render();
  }

  function next() {
    index = (index + 1) % cvItems.length;
    render();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  render();
})();


/* =========================
   UDDANNELSE (data-edu)
========================= */
(() => {
  const eduRoot = document.querySelector("[data-edu]");
  if (!eduRoot) return;

  const eduDot   = eduRoot.querySelector("[data-edu-dot]");
  const eduMeta  = eduRoot.querySelector("[data-edu-meta]");
  const eduTitle = eduRoot.querySelector("[data-edu-title]");
  const eduDesc  = eduRoot.querySelector("[data-edu-desc]");
  const eduCount = eduRoot.querySelector("[data-edu-count]");

  const prevBtn = eduRoot.querySelector("[data-edu-prev]");
  const nextBtn = eduRoot.querySelector("[data-edu-next]");

  const eduItems = [
    {
      start: "2025-08",
      meta: "AUG 2025 – NU",
      title: "Multimediedesigner – KEA/EK",
      desc: "I gang med uddannelsen (start sommer 2025)."
    },
    {
      start: "2020-08",
      meta: "AUG 2020 – JUN 2023",
      title: "Roskilde Handelsskole",
      desc: "Handelsskole (gymnasial uddannelse)."
    },
    {
      start: "2008-08",
      meta: "AUG 2008 – JUN 2019",
      title: "Skt. Josefs Skole",
      desc: "Folkeskole."
    }
  ];

  eduItems.sort((a, b) => b.start.localeCompare(a.start));
  eduItems.forEach((item, i) => {
    item.dot = String(i + 1).padStart(2, "0");
  });

  let index = 0;

  function render() {
    const item = eduItems[index];
    if (!item) return;

    eduDot.textContent = item.dot;
    eduMeta.textContent = item.meta;
    eduTitle.textContent = item.title;
    eduDesc.textContent = item.desc;

    if (eduCount) eduCount.textContent = `${index + 1} / ${eduItems.length}`;
  }

  function prev() {
    index = (index - 1 + eduItems.length) % eduItems.length;
    render();
  }

  function next() {
    index = (index + 1) % eduItems.length;
    render();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  render();
})();
