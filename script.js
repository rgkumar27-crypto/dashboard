const schools = [
  {
    id: "SCH-001",
    name: "Northline STEM Academy",
    city: "Houston",
    state: "TX",
    students: 820,
    computers: 620,
    partner: "Houston ISD",
    program: "Device distribution",
    priority: "High",
    note: "Teachers reported stronger homework completion after take-home device access improved.",
    tags: ["Houston", "Title I", "STEM", "Flagship city"]
  },
  {
    id: "SCH-002",
    name: "Gulfton Digital Prep",
    city: "Houston",
    state: "TX",
    students: 540,
    computers: 420,
    partner: "Neighborhood partner campus",
    program: "Family access support",
    priority: "High",
    note: "Family workshops helped increase comfort with school platforms and account access.",
    tags: ["Houston", "Family training", "Bilingual"]
  },
  {
    id: "SCH-003",
    name: "East Dallas College Prep",
    city: "Dallas",
    state: "TX",
    students: 690,
    computers: 540,
    partner: "Dallas ISD",
    program: "Digital literacy lab",
    priority: "High",
    note: "The fictional sample ties improved assignment submission to more reliable device access.",
    tags: ["Dallas", "High school", "College readiness"]
  },
  {
    id: "SCH-004",
    name: "Red River STEM Academy",
    city: "Dallas",
    state: "TX",
    students: 510,
    computers: 395,
    partner: "Community school hub",
    program: "Technology lab refresh",
    priority: "Medium",
    note: "Campus staff used the program to support blended learning and after-school enrichment.",
    tags: ["Dallas", "STEM", "After-school"]
  },
  {
    id: "SCH-005",
    name: "Mission Verde Intermediate",
    city: "San Antonio",
    state: "TX",
    students: 560,
    computers: 410,
    partner: "San Antonio ISD",
    program: "Distribution and training",
    priority: "Medium",
    note: "Parent participation increased after family tech nights were paired with device distribution.",
    tags: ["San Antonio", "Family night", "Middle school"]
  },
  {
    id: "SCH-006",
    name: "Rio Vista Academy",
    city: "El Paso",
    state: "TX",
    students: 420,
    computers: 310,
    partner: "Border region campus",
    program: "Home access support",
    priority: "Medium",
    note: "The fictional case study highlights more consistent homework completion after home device access improved.",
    tags: ["El Paso", "Border region", "Access equity"]
  },
  {
    id: "SCH-007",
    name: "Pacific Horizon Middle",
    city: "Los Angeles",
    state: "CA",
    students: 710,
    computers: 560,
    partner: "LA Unified",
    program: "Classroom device rollout",
    priority: "High",
    note: "Project completion improved in blended learning classes after device shortages were reduced.",
    tags: ["Los Angeles", "Middle school", "Classroom use"]
  },
  {
    id: "SCH-008",
    name: "Laney Bridge Academy",
    city: "Oakland",
    state: "CA",
    students: 510,
    computers: 430,
    partner: "Regional charter network",
    program: "Portfolio and media learning",
    priority: "Medium",
    note: "Students used the donated devices to expand participation in digital portfolio work.",
    tags: ["Oakland", "Portfolio", "Creative tech"]
  },
  {
    id: "SCH-009",
    name: "Little River Tech Academy",
    city: "Miami",
    state: "FL",
    students: 520,
    computers: 430,
    partner: "Miami-Dade partner campus",
    program: "Household access support",
    priority: "High",
    note: "The demo narrative emphasizes less device sharing across households and stronger homework access.",
    tags: ["Miami", "Households", "Tech access"]
  },
  {
    id: "SCH-010",
    name: "Bronx Forward Academy",
    city: "New York City",
    state: "NY",
    students: 520,
    computers: 410,
    partner: "NYC community school partner",
    program: "Attendance and access initiative",
    priority: "High",
    note: "The sample outcome centers on stronger digital attendance and online assignment submission.",
    tags: ["New York City", "Attendance", "Urban campus"]
  },
  {
    id: "SCH-011",
    name: "Liberty Bell Middle",
    city: "Philadelphia",
    state: "PA",
    students: 410,
    computers: 320,
    partner: "District school partner",
    program: "Test readiness support",
    priority: "Medium",
    note: "This fictional school story highlights improved online test readiness and digital practice time.",
    tags: ["Philadelphia", "Assessment", "Middle school"]
  },
  {
    id: "SCH-012",
    name: "Buckeye STEAM Academy",
    city: "Columbus",
    state: "OH",
    students: 300,
    computers: 230,
    partner: "Regional STEAM campus",
    program: "Tutoring and intervention access",
    priority: "Medium",
    note: "Students in the mock dataset accessed tutoring and intervention tools more consistently after device placement.",
    tags: ["Columbus", "STEAM", "Tutoring"]
  }
];

const donations = [
  {
    id: "DON-101",
    site: "Houston Warehouse Hub",
    city: "Houston",
    state: "TX",
    type: "Warehouse",
    devices: 2200,
    status: "Active",
    partner: "Corporate logistics partner",
    note: "Primary staging and sorting location for Greater Houston distribution activity.",
    tags: ["Warehouse", "Houston", "High volume"]
  },
  {
    id: "DON-102",
    site: "Dallas Community Drive",
    city: "Dallas",
    state: "TX",
    type: "Drop-off site",
    devices: 980,
    status: "Active",
    partner: "Corporate volunteer network",
    note: "Recurring community collection point tied to school-year donation drives.",
    tags: ["Drop-off", "Dallas", "Recurring"]
  },
  {
    id: "DON-103",
    site: "San Antonio Partner Site",
    city: "San Antonio",
    state: "TX",
    type: "Partner pickup",
    devices: 610,
    status: "Active",
    partner: "Neighborhood nonprofit partner",
    note: "Smaller-volume partner location supporting local intake and family pickup coordination.",
    tags: ["Partner site", "San Antonio", "Pickup"]
  },
  {
    id: "DON-104",
    site: "El Paso Mobile Pickup",
    city: "El Paso",
    state: "TX",
    type: "Mobile site",
    devices: 430,
    status: "Pilot",
    partner: "Regional outreach team",
    note: "Flexible pilot model designed to improve access in harder-to-serve neighborhoods.",
    tags: ["Mobile", "El Paso", "Pilot"]
  },
  {
    id: "DON-105",
    site: "Los Angeles Tech Collection",
    city: "Los Angeles",
    state: "CA",
    type: "Drop-off site",
    devices: 1250,
    status: "Active",
    partner: "Corporate campus partner",
    note: "High-visibility donor location supporting metro-wide collection campaigns.",
    tags: ["Los Angeles", "Corporate", "Collection"]
  },
  {
    id: "DON-106",
    site: "Miami Family Access Depot",
    city: "Miami",
    state: "FL",
    type: "Distribution center",
    devices: 870,
    status: "Active",
    partner: "Community access coalition",
    note: "Distribution-focused site supporting family events and recurring handoff days.",
    tags: ["Miami", "Distribution", "Family access"]
  },
  {
    id: "DON-107",
    site: "NYC Borough Intake Point",
    city: "New York City",
    state: "NY",
    type: "Drop-off site",
    devices: 930,
    status: "Active",
    partner: "Civic technology partner",
    note: "Urban donation site used for recurring borough-level collection activity.",
    tags: ["NYC", "Drop-off", "Urban"]
  },
  {
    id: "DON-108",
    site: "Philadelphia Regional Pickup",
    city: "Philadelphia",
    state: "PA",
    type: "Partner pickup",
    devices: 540,
    status: "Planning",
    partner: "Education nonprofit partner",
    note: "Future-facing site that demonstrates where the dashboard can show planned network growth.",
    tags: ["Philadelphia", "Planning", "Regional"]
  }
];

const kpis = [
  { value: "24,400", label: "Students reached", note: "sample dashboard total" },
  { value: "19,550", label: "Computers distributed", note: "fictional distributed device figure" },
  { value: "12", label: "Schools tracked", note: "current dashboard record count" },
  { value: "8", label: "Donation sites", note: "visible collection and pickup locations" },
  { value: "10", label: "Cities represented", note: "cross-state sample footprint" },
  { value: "6", label: "States represented", note: "initial proof-of-concept coverage" }
];

const kpiGrid = document.querySelector("#kpi-grid");
const stateBars = document.querySelector("#state-bars");
const searchInput = document.querySelector("#search-input");
const stateFilter = document.querySelector("#state-filter");
const cityFilter = document.querySelector("#city-filter");
const tableHead = document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
const resultCount = document.querySelector("#result-count");
const resultNote = document.querySelector("#result-note");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));

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

let activeTab = "schools";
let activeRecordId = null;

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function buildCitySummaries() {
  const cityMap = new Map();

  schools.forEach((school) => {
    const key = `${school.city}, ${school.state}`;
    if (!cityMap.has(key)) {
      cityMap.set(key, {
        id: `CITY-${school.city}-${school.state}`,
        city: school.city,
        state: school.state,
        schools: 0,
        students: 0,
        computers: 0,
        donationSites: 0,
        note: `City rollup for ${school.city}, ${school.state}.`,
        tags: [school.city, school.state]
      });
    }

    const entry = cityMap.get(key);
    entry.schools += 1;
    entry.students += school.students;
    entry.computers += school.computers;
  });

  donations.forEach((site) => {
    const key = `${site.city}, ${site.state}`;
    if (!cityMap.has(key)) {
      cityMap.set(key, {
        id: `CITY-${site.city}-${site.state}`,
        city: site.city,
        state: site.state,
        schools: 0,
        students: 0,
        computers: 0,
        donationSites: 0,
        note: `City rollup for ${site.city}, ${site.state}.`,
        tags: [site.city, site.state]
      });
    }

    const entry = cityMap.get(key);
    entry.donationSites += 1;
  });

  return Array.from(cityMap.values()).sort((a, b) => b.students - a.students);
}

const citySummaries = buildCitySummaries();

function stateTotals() {
  const totals = new Map();

  schools.forEach((school) => {
    if (!totals.has(school.state)) {
      totals.set(school.state, { students: 0, computers: 0 });
    }
    const entry = totals.get(school.state);
    entry.students += school.students;
    entry.computers += school.computers;
  });

  return Array.from(totals.entries())
    .map(([state, values]) => ({ state, ...values }))
    .sort((a, b) => b.students - a.students);
}

function renderKpis() {
  kpiGrid.innerHTML = kpis.map((metric) => `
    <article class="kpi-card">
      <span class="kpi-value">${metric.value}</span>
      <span class="kpi-label">${metric.label}</span>
      <span class="kpi-note">${metric.note}</span>
    </article>
  `).join("");
}

function renderStateBars() {
  const totals = stateTotals();
  const maxStudents = Math.max(...totals.map((item) => item.students));

  stateBars.innerHTML = totals.map((item) => `
    <article class="bar-row">
      <div class="bar-meta">
        <span>${item.state}</span>
        <span>${formatNumber(item.students)} students</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${(item.students / maxStudents) * 100}%"></div>
      </div>
    </article>
  `).join("");
}

function populateFilters() {
  const stateValues = [...new Set([...schools, ...donations].map((item) => item.state))].sort();
  const cityValues = [...new Set([...schools, ...donations].map((item) => item.city))].sort();

  stateFilter.innerHTML = ['<option value="all">All states</option>', ...stateValues.map((state) => `<option value="${state}">${state}</option>`)].join("");
  cityFilter.innerHTML = ['<option value="all">All cities</option>', ...cityValues.map((city) => `<option value="${city}">${city}</option>`)].join("");
}

function getActiveDataset() {
  if (activeTab === "schools") return schools;
  if (activeTab === "donations") return donations;
  return citySummaries;
}

function getTableConfig() {
  if (activeTab === "schools") {
    return {
      note: "School-level records showing student reach, device placement, and support notes.",
      columns: [
        { key: "name", label: "School" },
        { key: "city", label: "City" },
        { key: "state", label: "State" },
        { key: "students", label: "Students" },
        { key: "computers", label: "Computers" },
        { key: "program", label: "Program" }
      ]
    };
  }

  if (activeTab === "donations") {
    return {
      note: "Donation network records showing collection, pickup, and distribution locations.",
      columns: [
        { key: "site", label: "Site" },
        { key: "city", label: "City" },
        { key: "state", label: "State" },
        { key: "type", label: "Type" },
        { key: "devices", label: "Devices" },
        { key: "status", label: "Status" }
      ]
    };
  }

  return {
    note: "City rollups combining school reach and donation network visibility.",
    columns: [
      { key: "city", label: "City" },
      { key: "state", label: "State" },
      { key: "schools", label: "Schools" },
      { key: "students", label: "Students" },
      { key: "computers", label: "Computers" },
      { key: "donationSites", label: "Donation sites" }
    ]
  };
}

function matchesFilters(item) {
  const query = searchInput.value.trim().toLowerCase();
  const stateValue = stateFilter.value;
  const cityValue = cityFilter.value;

  const haystack = Object.values(item).join(" ").toLowerCase();
  const queryMatch = !query || haystack.includes(query);
  const stateMatch = stateValue === "all" || item.state === stateValue;
  const cityMatch = cityValue === "all" || item.city === cityValue;

  return queryMatch && stateMatch && cityMatch;
}

function filteredRows() {
  return getActiveDataset().filter(matchesFilters);
}

function selectRecord(record) {
  activeRecordId = record.id;

  if (activeTab === "schools") {
    detailKicker.textContent = "School record";
    detailTitle.textContent = record.name;
    detailSummary.textContent = record.note;
    detailMetrics.innerHTML = `
      <div class="detail-metric"><strong>${formatNumber(record.students)}</strong><span>Students reached</span></div>
      <div class="detail-metric"><strong>${formatNumber(record.computers)}</strong><span>Computers distributed</span></div>
      <div class="detail-metric"><strong>${record.program}</strong><span>Program type</span></div>
      <div class="detail-metric"><strong>${record.priority}</strong><span>Priority level</span></div>
    `;
    detailListTitle.textContent = "Tags";
    detailListCount.textContent = `${record.tags.length} items`;
    detailChipList.innerHTML = record.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
    detailCardTitle.textContent = "Context";
    detailCardCount.textContent = "2 entries";
    detailCardList.innerHTML = `
      <article class="detail-item-card">
        <h4>${record.partner}</h4>
        <div class="item-meta">
          <span class="item-pill">${record.city}, ${record.state}</span>
          <span class="item-pill">${record.id}</span>
        </div>
        <p>Partner or district relationship associated with the school record.</p>
      </article>
      <article class="detail-item-card">
        <h4>Outcome note</h4>
        <div class="item-meta">
          <span class="item-pill">Program insight</span>
        </div>
        <p>${record.note}</p>
      </article>
    `;
    return;
  }

  if (activeTab === "donations") {
    detailKicker.textContent = "Donation record";
    detailTitle.textContent = record.site;
    detailSummary.textContent = record.note;
    detailMetrics.innerHTML = `
      <div class="detail-metric"><strong>${formatNumber(record.devices)}</strong><span>Devices collected</span></div>
      <div class="detail-metric"><strong>${record.type}</strong><span>Location type</span></div>
      <div class="detail-metric"><strong>${record.status}</strong><span>Current status</span></div>
      <div class="detail-metric"><strong>${record.city}</strong><span>City</span></div>
    `;
    detailListTitle.textContent = "Tags";
    detailListCount.textContent = `${record.tags.length} items`;
    detailChipList.innerHTML = record.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
    detailCardTitle.textContent = "Operational notes";
    detailCardCount.textContent = "2 entries";
    detailCardList.innerHTML = `
      <article class="detail-item-card">
        <h4>${record.partner}</h4>
        <div class="item-meta">
          <span class="item-pill">${record.city}, ${record.state}</span>
          <span class="item-pill">${record.id}</span>
        </div>
        <p>Primary partner or channel connected to this donation location.</p>
      </article>
      <article class="detail-item-card">
        <h4>Site note</h4>
        <div class="item-meta">
          <span class="item-pill">Network operations</span>
        </div>
        <p>${record.note}</p>
      </article>
    `;
    return;
  }

  detailKicker.textContent = "City summary";
  detailTitle.textContent = `${record.city}, ${record.state}`;
  detailSummary.textContent = record.note;
  detailMetrics.innerHTML = `
    <div class="detail-metric"><strong>${record.schools}</strong><span>Schools tracked</span></div>
    <div class="detail-metric"><strong>${formatNumber(record.students)}</strong><span>Students reached</span></div>
    <div class="detail-metric"><strong>${formatNumber(record.computers)}</strong><span>Computers distributed</span></div>
    <div class="detail-metric"><strong>${record.donationSites}</strong><span>Donation sites</span></div>
  `;
  detailListTitle.textContent = "City tags";
  detailListCount.textContent = `${record.tags.length} items`;
  detailChipList.innerHTML = record.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
  detailCardTitle.textContent = "Rollup notes";
  detailCardCount.textContent = "2 entries";
  detailCardList.innerHTML = `
    <article class="detail-item-card">
      <h4>Why this city matters</h4>
      <div class="item-meta">
        <span class="item-pill">Cross-record summary</span>
      </div>
      <p>This rollup combines school records and donation network visibility to show how the platform can connect operations and impact in one place.</p>
    </article>
    <article class="detail-item-card">
      <h4>Readout</h4>
      <div class="item-meta">
        <span class="item-pill">${record.city}</span>
      </div>
      <p>${record.schools} schools, ${record.donationSites} donation sites, and ${formatNumber(record.students)} students reached in this fictional city summary.</p>
    </article>
  `;
}

function renderTable() {
  const rows = filteredRows();
  const config = getTableConfig();

  tableHead.innerHTML = `
    <tr>
      ${config.columns.map((column) => `<th>${column.label}</th>`).join("")}
    </tr>
  `;

  resultCount.textContent = `${rows.length} ${rows.length === 1 ? "record" : "records"}`;
  resultNote.textContent = config.note;

  if (!rows.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="${config.columns.length}" class="empty-state">No records match the current filters.</td>
      </tr>
    `;
    return;
  }

  if (!rows.some((row) => row.id === activeRecordId)) {
    activeRecordId = rows[0].id;
    selectRecord(rows[0]);
  }

  tableBody.innerHTML = rows.map((row) => `
    <tr data-id="${row.id}" class="${row.id === activeRecordId ? "is-selected" : ""}">
      ${config.columns.map((column) => `<td>${typeof row[column.key] === "number" ? formatNumber(row[column.key]) : row[column.key]}</td>`).join("")}
    </tr>
  `).join("");

  tableBody.querySelectorAll("tr[data-id]").forEach((tr) => {
    tr.addEventListener("click", () => {
      const record = rows.find((row) => row.id === tr.dataset.id);
      if (record) {
        selectRecord(record);
        renderTable();
      }
    });
  });
}

function setActiveTab(tab) {
  activeTab = tab;
  activeRecordId = null;
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tab);
  });
  renderTable();
}

searchInput.addEventListener("input", renderTable);
stateFilter.addEventListener("change", renderTable);
cityFilter.addEventListener("change", renderTable);
tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

renderKpis();
renderStateBars();
populateFilters();
setActiveTab("schools");
