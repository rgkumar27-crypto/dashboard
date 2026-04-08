const TEXAS_FIPS = "48";

const dashboardMetrics = [
  { value: "24,400", label: "Students reached", note: "fictional donor-facing total" },
  { value: "19,550", label: "Computers distributed", note: "demo distribution figure" },
  { value: "61", label: "Schools impacted", note: "national sample total" },
  { value: "18", label: "Donation sites", note: "collection and warehouse points" },
  { value: "12", label: "Cities served", note: "sample map footprint" },
  { value: "8,300", label: "Families supported", note: "illustrative household estimate" }
];

const stateSummaryData = {
  TX: {
    name: "Texas",
    summary: "Texas is the flagship proof-of-concept state, connecting donation intake, city distribution, and school-level impact in one view.",
    metrics: [
      { label: "Students reached", value: "5,800" },
      { label: "Computers placed", value: "4,650" },
      { label: "Cities featured", value: "4" },
      { label: "Schools supported", value: "14" }
    ],
    chips: ["Houston", "Dallas", "El Paso", "San Antonio"],
    photos: [
      { src: "https://picsum.photos/seed/texas-overview-1/600/400", alt: "Texas classroom technology scene", caption: "Statewide storytelling view: where donations become student access." },
      { src: "https://picsum.photos/seed/texas-overview-2/600/400", alt: "Texas community event", caption: "A donor can immediately connect regional giving to school impact." }
    ]
  },
  CA: {
    name: "California",
    summary: "California illustrates how the platform scales across major metro school partnerships and donor engagement hubs.",
    metrics: [
      { label: "Students reached", value: "3,950" },
      { label: "Computers placed", value: "3,120" },
      { label: "Cities served", value: "3" },
      { label: "Schools supported", value: "7" }
    ],
    chips: ["Los Angeles", "Oakland", "San Diego"],
    photos: [
      { src: "https://picsum.photos/seed/california-overview-1/600/400", alt: "California placeholder school photo", caption: "Sample metro-wide school support story." }
    ]
  },
  FL: {
    name: "Florida",
    summary: "Florida represents a statewide growth market where donor logistics and school distribution can be shown together.",
    metrics: [
      { label: "Students reached", value: "2,600" },
      { label: "Computers placed", value: "2,050" },
      { label: "Cities served", value: "3" },
      { label: "Schools supported", value: "5" }
    ],
    chips: ["Miami", "Orlando", "Tampa"],
    photos: [
      { src: "https://picsum.photos/seed/florida-overview-1/600/400", alt: "Florida placeholder school photo", caption: "Illustrative donor-to-student pathway in Florida." }
    ]
  },
  NY: {
    name: "New York",
    summary: "New York adds an East Coast view, useful for showing urban school impact and donor significance at a glance.",
    metrics: [
      { label: "Students reached", value: "1,930" },
      { label: "Computers placed", value: "1,510" },
      { label: "Cities served", value: "2" },
      { label: "Schools supported", value: "4" }
    ],
    chips: ["New York City", "Buffalo"],
    photos: [
      { src: "https://picsum.photos/seed/newyork-overview-1/600/400", alt: "New York placeholder school photo", caption: "A compact state summary that still communicates significance." }
    ]
  },
  PA: {
    name: "Pennsylvania",
    summary: "Pennsylvania shows how the same dashboard model can compare multiple regions while keeping reporting readable.",
    metrics: [
      { label: "Students reached", value: "1,610" },
      { label: "Computers placed", value: "1,220" },
      { label: "Cities served", value: "2" },
      { label: "Schools supported", value: "4" }
    ],
    chips: ["Philadelphia", "Pittsburgh"],
    photos: [
      { src: "https://picsum.photos/seed/pennsylvania-overview-1/600/400", alt: "Pennsylvania placeholder school photo", caption: "Dashboard-ready summary for state comparison." }
    ]
  },
  OH: {
    name: "Ohio",
    summary: "Ohio supports a balanced Midwest view and demonstrates how new partner regions can be reported consistently.",
    metrics: [
      { label: "Students reached", value: "1,130" },
      { label: "Computers placed", value: "880" },
      { label: "Cities served", value: "2" },
      { label: "Schools supported", value: "3" }
    ],
    chips: ["Columbus", "Cleveland"],
    photos: [
      { src: "https://picsum.photos/seed/ohio-overview-1/600/400", alt: "Ohio placeholder school photo", caption: "Regional impact can stay easy to digest with the same dashboard logic." }
    ]
  }
};

const texasImpactData = {
  summary: "Texas is the featured state in this demo. Hover or click the state to zoom in, then click a city flag to view fictional school-level distributions.",
  metrics: [
    { label: "Students reached", value: "5,800" },
    { label: "Computers placed", value: "4,650" },
    { label: "Cities featured", value: "4" },
    { label: "Schools supported", value: "14" }
  ],
  cities: [
    {
      key: "el-paso",
      name: "El Paso",
      coordinates: [-106.4850, 31.7619],
      schoolCount: 3,
      summary: "El Paso highlights a border-region expansion story with device access and family support.",
      schools: [
        { name: "Rio Vista Academy", students: 420, computers: 310, impact: "Homework completion rose in the fictional case study after home device access improved." },
        { name: "Franklin Tech Middle", students: 360, computers: 280, impact: "Digital project participation increased across eighth grade classrooms." },
        { name: "Desert Trails Prep", students: 290, computers: 215, impact: "Teachers reported better student consistency on online assignments." }
      ],
      photos: [
        { src: "https://picsum.photos/seed/elpaso-1/600/400", alt: "Students using computers in El Paso", caption: "Mock El Paso classroom technology rollout." },
        { src: "https://picsum.photos/seed/elpaso-2/600/400", alt: "Family workshop in El Paso", caption: "Sample family digital access event in El Paso." }
      ]
    },
    {
      key: "dallas",
      name: "Dallas",
      coordinates: [-96.7970, 32.7767],
      schoolCount: 4,
      summary: "Dallas demonstrates how a metro hub can distribute technology across multiple campuses.",
      schools: [
        { name: "East Dallas College Prep", students: 690, computers: 540, impact: "A fictional digital literacy lab helped ninth graders complete more online coursework independently." },
        { name: "Red River STEM Academy", students: 510, computers: 395, impact: "The demo case links device access to stronger attendance in blended-learning periods." },
        { name: "Oak Cliff Future Leaders", students: 430, computers: 330, impact: "Families in the mock program had more reliable access to school platforms." },
        { name: "North Dallas Pathways", students: 320, computers: 250, impact: "Students showed improved submission rates on digital homework." }
      ],
      photos: [
        { src: "https://picsum.photos/seed/dallas-1/600/400", alt: "Students in Dallas classroom", caption: "Mock Dallas student device distribution." },
        { src: "https://picsum.photos/seed/dallas-2/600/400", alt: "Dallas computer lab", caption: "Sample Dallas digital learning lab." }
      ]
    },
    {
      key: "houston",
      name: "Houston",
      coordinates: [-95.3698, 29.7604],
      schoolCount: 5,
      summary: "Houston is framed as Compudopt's flagship city in this proposal, with broad school and family engagement.",
      schools: [
        { name: "Northline STEM Academy", students: 820, computers: 620, impact: "Teachers reported stronger homework completion after students received take-home devices." },
        { name: "Gulfton Digital Prep", students: 540, computers: 420, impact: "The sample narrative highlights better participation in online tutoring." },
        { name: "Third Ward Innovation School", students: 470, computers: 360, impact: "Students used devices to complete collaborative projects more consistently." },
        { name: "Aldine Futures Campus", students: 390, computers: 300, impact: "Families in the demo had increased engagement during technology workshops." },
        { name: "East End Learning Hub", students: 310, computers: 240, impact: "School staff described stronger confidence using digital learning platforms." }
      ],
      photos: [
        { src: "https://picsum.photos/seed/houston-1/600/400", alt: "Students using laptops in Houston", caption: "Mock Houston classroom technology rollout." },
        { src: "https://picsum.photos/seed/houston-2/600/400", alt: "Houston family tech workshop", caption: "Sample Houston family digital access workshop." }
      ]
    },
    {
      key: "san-antonio",
      name: "San Antonio",
      coordinates: [-98.4936, 29.4241],
      schoolCount: 2,
      summary: "San Antonio shows how a smaller cluster can still deliver visible school-level outcomes.",
      schools: [
        { name: "Mission Verde Intermediate", students: 560, computers: 410, impact: "Device distribution paired with family tech nights raised parent engagement in the demo scenario." },
        { name: "River City Scholars", students: 380, computers: 290, impact: "The fictional case ties device access to improved class participation and research skills." }
      ],
      photos: [
        { src: "https://picsum.photos/seed/sanantonio-1/600/400", alt: "Students in San Antonio school", caption: "Mock San Antonio campus technology story." },
        { src: "https://picsum.photos/seed/sanantonio-2/600/400", alt: "San Antonio school workshop", caption: "Sample San Antonio family tech night." }
      ]
    }
  ]
};

const donationSites = [
  {
    key: "houston-warehouse",
    name: "Houston Warehouse Hub",
    coordinates: [-95.375, 29.74],
    type: "Warehouse",
    contribution: "4,200 devices processed",
    summary: "Primary fictional staging point for intake, refurbishment, and redistribution across Southeast Texas.",
    photos: [
      { src: "https://picsum.photos/seed/donation-houston-1/600/400", alt: "Warehouse placeholder photo", caption: "Mock Houston warehouse and sorting center." }
    ]
  },
  {
    key: "dallas-drives",
    name: "Dallas Community Drive",
    coordinates: [-96.82, 32.80],
    type: "Collection Drive",
    contribution: "1,150 devices collected",
    summary: "Fictional recurring community drive supported by local corporate volunteers and school district partners.",
    photos: [
      { src: "https://picsum.photos/seed/donation-dallas-1/600/400", alt: "Community drive placeholder photo", caption: "Sample Dallas donation collection event." }
    ]
  },
  {
    key: "san-antonio-partner",
    name: "San Antonio Partner Site",
    coordinates: [-98.5, 29.41],
    type: "Partner Drop-Off",
    contribution: "620 devices accepted",
    summary: "A fictional neighborhood partner location showing how local donation access can expand supply.",
    photos: [
      { src: "https://picsum.photos/seed/donation-sanantonio-1/600/400", alt: "Partner drop-off placeholder photo", caption: "Mock San Antonio donor drop-off location." }
    ]
  },
  {
    key: "elpaso-mobile",
    name: "El Paso Mobile Pickup",
    coordinates: [-106.48, 31.77],
    type: "Mobile Pickup",
    contribution: "300 devices recovered",
    summary: "Illustrative mobile intake model for reaching regions beyond a fixed warehouse footprint.",
    photos: [
      { src: "https://picsum.photos/seed/donation-elpaso-1/600/400", alt: "Mobile pickup placeholder photo", caption: "Sample El Paso mobile donation pickup event." }
    ]
  }
];

const impactStates = new Set(["TX", "CA", "FL", "NY", "PA", "OH"]);
const kpiGrid = document.querySelector("#kpi-grid");
const detailKicker = document.querySelector("#detail-kicker");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailMetrics = document.querySelector("#detail-metrics");
const detailListTitle = document.querySelector("#detail-list-title");
const detailListCount = document.querySelector("#detail-list-count");
const detailChipList = document.querySelector("#detail-chip-list");
const detailCardTitle = document.querySelector("#detail-card-title");
const detailCardCount = document.querySelector("#detail-card-count");
const detailCardList = document.querySelector("#detail-card-list");
const photoGrid = document.querySelector("#photo-grid");
const photoCount = document.querySelector("#photo-count");
const layerButtons = Array.from(document.querySelectorAll(".toggle-button"));

let currentLayer = "impact";

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function renderKpis() {
  kpiGrid.innerHTML = dashboardMetrics.map((metric) => `
    <article class="kpi-card">
      <span class="kpi-value">${metric.value}</span>
      <span class="kpi-label">${metric.label}</span>
      <span class="kpi-note">${metric.note}</span>
    </article>
  `).join("");
}

function renderPhotoGrid(items) {
  const photos = items && items.length ? items : [
    {
      src: "https://picsum.photos/seed/dashboard-default-photo/600/400",
      alt: "Placeholder impact photo",
      caption: "A donor-facing dashboard can pair every metric view with a photo or story card."
    }
  ];

  photoCount.textContent = `${photos.length} ${photos.length === 1 ? "photo" : "photos"}`;
  photoGrid.innerHTML = photos.map((photo) => `
    <article class="photo-card">
      <img src="${photo.src}" alt="${photo.alt}">
      <p>${photo.caption}</p>
    </article>
  `).join("");
}

function renderStateOverview(code) {
  const state = stateSummaryData[code];
  if (!state) return;

  detailKicker.textContent = "State snapshot";
  detailTitle.textContent = state.name;
  detailSummary.textContent = state.summary;
  detailMetrics.innerHTML = state.metrics.map((metric) => `
    <div class="detail-metric">
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `).join("");

  detailListTitle.textContent = "Cities and regions";
  detailListCount.textContent = `${state.chips.length} locations`;
  detailChipList.innerHTML = state.chips.map((chip) => `<span class="chip">${chip}</span>`).join("");

  detailCardTitle.textContent = "Why this matters";
  detailCardCount.textContent = "1 summary";
  detailCardList.innerHTML = `
    <article class="detail-item-card">
      <h4>Dashboard takeaway</h4>
      <p>This view turns state-level spreadsheet totals into a map-based story that is much easier for donors and judges to interpret quickly.</p>
    </article>
  `;

  renderPhotoGrid(state.photos);
}

function renderTexasOverview() {
  detailKicker.textContent = "State snapshot";
  detailTitle.textContent = "Texas";
  detailSummary.textContent = texasImpactData.summary;
  detailMetrics.innerHTML = texasImpactData.metrics.map((metric) => `
    <div class="detail-metric">
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `).join("");

  detailListTitle.textContent = "Available cities";
  detailListCount.textContent = `${texasImpactData.cities.length} cities`;
  detailChipList.innerHTML = texasImpactData.cities.map((city) => `<span class="chip">${city.name}</span>`).join("");

  detailCardTitle.textContent = "School distributions";
  detailCardCount.textContent = "Select a city";
  detailCardList.innerHTML = `
    <article class="detail-item-card">
      <h4>Choose a city flag</h4>
      <p>Click a Texas city flag on the map to load fictional school-level impact distributions for that metro area.</p>
    </article>
  `;

  renderPhotoGrid([
    {
      src: "https://picsum.photos/seed/texas-dashboard-overview/600/400",
      alt: "Texas overview placeholder photo",
      caption: "Texas functions as the proof-of-concept for city and school drilldown reporting."
    }
  ]);
}

function renderCity(cityKey) {
  const city = texasImpactData.cities.find((item) => item.key === cityKey);
  if (!city) return;

  detailKicker.textContent = "City drilldown";
  detailTitle.textContent = `${city.name}, Texas`;
  detailSummary.textContent = city.summary;

  const students = city.schools.reduce((sum, school) => sum + school.students, 0);
  const computers = city.schools.reduce((sum, school) => sum + school.computers, 0);

  detailMetrics.innerHTML = `
    <div class="detail-metric"><strong>${city.schoolCount}</strong><span>Schools impacted</span></div>
    <div class="detail-metric"><strong>${formatNumber(students)}</strong><span>Students reached</span></div>
    <div class="detail-metric"><strong>${formatNumber(computers)}</strong><span>Computers placed</span></div>
    <div class="detail-metric"><strong>${city.name}</strong><span>Featured city</span></div>
  `;

  detailListTitle.textContent = "Available cities";
  detailListCount.textContent = `${texasImpactData.cities.length} cities`;
  detailChipList.innerHTML = texasImpactData.cities.map((item) => `<span class="chip">${item.name} (${item.schoolCount})</span>`).join("");

  detailCardTitle.textContent = "School distributions";
  detailCardCount.textContent = `${city.schools.length} schools`;
  detailCardList.innerHTML = city.schools.map((school) => `
    <article class="detail-item-card">
      <h4>${school.name}</h4>
      <div class="item-meta">
        <span class="item-pill">${formatNumber(school.students)} students</span>
        <span class="item-pill">${formatNumber(school.computers)} computers</span>
      </div>
      <p>${school.impact}</p>
    </article>
  `).join("");

  renderPhotoGrid(city.photos);
}

function renderDonationOverview() {
  detailKicker.textContent = "Donation network";
  detailTitle.textContent = "Donation locations";
  detailSummary.textContent = "This layer shows fictional collection sites, warehouse hubs, and partner drop-off locations so donors can connect their giving to the delivery pipeline.";
  detailMetrics.innerHTML = `
    <div class="detail-metric"><strong>${donationSites.length}</strong><span>Donation sites</span></div>
    <div class="detail-metric"><strong>3</strong><span>Site types</span></div>
    <div class="detail-metric"><strong>6,270</strong><span>Devices collected</span></div>
    <div class="detail-metric"><strong>TX focus</strong><span>Featured logistics state</span></div>
  `;

  detailListTitle.textContent = "Site network";
  detailListCount.textContent = `${donationSites.length} sites`;
  detailChipList.innerHTML = donationSites.map((site) => `<span class="chip">${site.name}</span>`).join("");

  detailCardTitle.textContent = "How donations move";
  detailCardCount.textContent = "1 summary";
  detailCardList.innerHTML = `
    <article class="detail-item-card">
      <h4>Donation insight</h4>
      <p>Adding donation locations helps users understand that impact is not only where devices arrive, but also where they are collected, processed, and distributed.</p>
    </article>
  `;

  renderPhotoGrid([
    {
      src: "https://picsum.photos/seed/donation-network-overview/600/400",
      alt: "Donation network placeholder photo",
      caption: "A donation layer makes the platform more useful for both donors and operations storytelling."
    }
  ]);
}

function renderDonationSite(siteKey) {
  const site = donationSites.find((item) => item.key === siteKey);
  if (!site) return;

  detailKicker.textContent = "Donation site detail";
  detailTitle.textContent = site.name;
  detailSummary.textContent = site.summary;
  detailMetrics.innerHTML = `
    <div class="detail-metric"><strong>${site.type}</strong><span>Location type</span></div>
    <div class="detail-metric"><strong>${site.contribution}</strong><span>Contribution estimate</span></div>
    <div class="detail-metric"><strong>Texas</strong><span>State</span></div>
    <div class="detail-metric"><strong>Active</strong><span>Demo status</span></div>
  `;

  detailListTitle.textContent = "Donation network";
  detailListCount.textContent = `${donationSites.length} sites`;
  detailChipList.innerHTML = donationSites.map((item) => `<span class="chip">${item.name}</span>`).join("");

  detailCardTitle.textContent = "Why this site matters";
  detailCardCount.textContent = "1 location";
  detailCardList.innerHTML = `
    <article class="detail-item-card">
      <h4>${site.type}</h4>
      <p>This fictional site shows how a donor dashboard can make the logistics side of impact more visible and understandable.</p>
    </article>
  `;

  renderPhotoGrid(site.photos);
}

async function drawMap() {
  const svg = d3.select("#usa-map");
  const width = 975;
  const height = 610;

  svg.selectAll("*").remove();

  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "stateGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%");

  gradient.append("stop").attr("offset", "0%").attr("stop-color", "#8ec341");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", "#1d76bb");

  const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json");
  const states = topojson.feature(us, us.objects.states).features;
  const nation = topojson.feature(us, us.objects.nation);

  const projection = d3.geoAlbersUsa().fitSize([width, height], nation);
  const path = d3.geoPath(projection);

  const zoomLayer = svg.append("g").attr("class", "zoom-layer");
  const statesLayer = zoomLayer.append("g").attr("class", "states-layer");
  const impactMarkerLayer = zoomLayer.append("g").attr("class", "impact-marker-layer");
  const donationMarkerLayer = zoomLayer.append("g").attr("class", "donation-marker-layer");

  const texasFeature = states.find((d) => String(d.id).padStart(2, "0") === TEXAS_FIPS);

  statesLayer.selectAll("path")
    .data(states)
    .join("path")
    .attr("class", (d) => {
      const code = String(d.id).padStart(2, "0") === TEXAS_FIPS ? "TX" : Object.keys(stateSummaryData).find((key) => key === (codeFromFips(String(d.id).padStart(2, "0"))));
      return `state ${impactStates.has(codeFromFips(String(d.id).padStart(2, "0"))) ? "state-impact" : "state-neutral"}`;
    })
    .attr("data-code", (d) => codeFromFips(String(d.id).padStart(2, "0")))
    .attr("d", path)
    .on("mouseenter", (event, d) => {
      const code = codeFromFips(String(d.id).padStart(2, "0"));
      if (currentLayer === "impact") {
        if (code === "TX") {
          zoomTexas();
        } else if (stateSummaryData[code]) {
          renderStateOverview(code);
        }
      }
    })
    .on("click", (event, d) => {
      const code = codeFromFips(String(d.id).padStart(2, "0"));
      if (currentLayer === "impact") {
        if (code === "TX") {
          zoomTexas();
        } else if (stateSummaryData[code]) {
          resetMap();
          renderStateOverview(code);
        }
      }
    });

  const texasBounds = path.bounds(texasFeature);
  const dx = texasBounds[1][0] - texasBounds[0][0];
  const dy = texasBounds[1][1] - texasBounds[0][1];
  const x = (texasBounds[0][0] + texasBounds[1][0]) / 2;
  const y = (texasBounds[0][1] + texasBounds[1][1]) / 2;
  const scale = Math.min(5.2, 1.18 / Math.max(dx / width, dy / height));
  const translateX = width / 2 - scale * x - 8;
  const translateY = height / 2 - scale * y + 18;

  function showImpactFlags(show) {
    impactMarkerLayer.selectAll(".city-marker")
      .interrupt()
      .transition()
      .duration(250)
      .style("opacity", show && currentLayer === "impact" ? 1 : 0)
      .style("pointer-events", show && currentLayer === "impact" ? "auto" : "none");
  }

  function showDonationPins(show) {
    donationMarkerLayer.selectAll(".donation-marker")
      .interrupt()
      .transition()
      .duration(250)
      .style("opacity", show && currentLayer === "donations" ? 1 : 0)
      .style("pointer-events", show && currentLayer === "donations" ? "auto" : "none");
  }

  function zoomTexas() {
    zoomLayer.interrupt()
      .transition()
      .duration(700)
      .ease(d3.easeCubicOut)
      .attr("transform", `translate(${translateX},${translateY}) scale(${scale})`);

    showImpactFlags(true);
    showDonationPins(false);
    renderTexasOverview();
  }

  function resetMap() {
    zoomLayer.interrupt()
      .transition()
      .duration(500)
      .ease(d3.easeCubicOut)
      .attr("transform", "translate(0,0) scale(1)");

    showImpactFlags(false);
    showDonationPins(true);
  }

  const impactMarkers = impactMarkerLayer.selectAll(".city-marker")
    .data(texasImpactData.cities)
    .join("g")
    .attr("class", "city-marker")
    .attr("transform", (d) => {
      const [mx, my] = projection(d.coordinates);
      return `translate(${mx},${my})`;
    })
    .style("opacity", 0)
    .style("pointer-events", "none")
    .on("click", (event, d) => {
      event.stopPropagation();
      renderCity(d.key);
    });

  impactMarkers.append("line")
    .attr("class", "flag-pole")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", -34);

  impactMarkers.append("rect")
    .attr("class", "flag-body")
    .attr("x", 0)
    .attr("y", -34)
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("width", 26)
    .attr("height", 18);

  impactMarkers.append("text")
    .attr("class", "flag-count")
    .attr("x", 13)
    .attr("y", -22)
    .text((d) => d.schoolCount);

  impactMarkers.append("text")
    .attr("class", "flag-label")
    .attr("x", 13)
    .attr("y", -42)
    .text((d) => d.name);

  const donationMarkers = donationMarkerLayer.selectAll(".donation-marker")
    .data(donationSites)
    .join("g")
    .attr("class", "donation-marker")
    .attr("transform", (d) => {
      const [mx, my] = projection(d.coordinates);
      return `translate(${mx},${my})`;
    })
    .style("opacity", 0)
    .style("pointer-events", "none")
    .on("click", (event, d) => {
      event.stopPropagation();
      renderDonationSite(d.key);
    });

  donationMarkers.append("circle")
    .attr("class", "donation-pin")
    .attr("r", 14)
    .attr("cx", 0)
    .attr("cy", 0);

  donationMarkers.append("text")
    .attr("class", "donation-count")
    .attr("x", 0)
    .attr("y", 1)
    .text((d, i) => i + 1);

  donationMarkers.append("text")
    .attr("class", "donation-label")
    .attr("x", 0)
    .attr("y", -22)
    .text((d) => shortSiteLabel(d.name));

  layerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLayer = button.dataset.layer;
      layerButtons.forEach((item) => item.classList.toggle("is-active", item === button));

      if (currentLayer === "impact") {
        renderTexasOverview();
        showDonationPins(false);
        resetMap();
      } else {
        resetMap();
        renderDonationOverview();
        showDonationPins(true);
      }
    });
  });

  renderKpis();
  renderTexasOverview();
}

function codeFromFips(fips) {
  const map = {
    "06": "CA",
    "12": "FL",
    "36": "NY",
    "39": "OH",
    "42": "PA",
    "48": "TX"
  };
  return map[fips] || "";
}

function shortSiteLabel(name) {
  if (name.includes("Houston")) return "Houston";
  if (name.includes("Dallas")) return "Dallas";
  if (name.includes("San Antonio")) return "SA";
  if (name.includes("El Paso")) return "El Paso";
  return "Site";
}

drawMap();
