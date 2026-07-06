/**
 * mapping.js
 * ---------------------------------------------------------------------------
 * MASTER STORE MAPPING CONFIGURATION
 * ---------------------------------------------------------------------------
 * Maintain the organisational hierarchy and store assignment here:
 *   RM  (Regional Manager)            - oversees several ROMs
 *   ROM (Regional Operations Manager) - oversees several stores
 *   SD  (Store Development lead)      - the on-ground store-in-charge
 *
 * This is the single source of truth the dashboard uses to:
 *   - Identify which RM / ROM / SD owns a store
 *   - Compute total stores assigned per RM / per ROM / per SD
 *   - Enrich every audit record coming from data.json with rm / rom / sd
 *
 * TO ADD / EDIT / REMOVE A STORE:
 *   Add, edit or remove an object in the storeMapping array below.
 *   siteCode must be unique and must match the "Site Code" column used in
 *   the daily Excel audit report (compared as text, e.g. "THD8").
 *
 * No other file needs to change when the store list changes - every chart,
 * KPI, table and filter reads from this array automatically.
 * ---------------------------------------------------------------------------
 */

const storeMapping = [
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Divya Lakshmi", siteCode: "THD8", siteName: "Express Avenue Chennai" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "THE0", siteName: "PMC Bangalore" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "THE1", siteName: "Elante Chandigarh" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THE2", siteName: "Alpha One Ahmedabad" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "THE9", siteName: "Viviana Thane" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "THF0", siteName: "PMC Chennai" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "THF1", siteName: "Brookfields Coimbatore" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "THF2", siteName: "Logix Mall Noida" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THF4", siteName: "Quest Kolkatta" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Nasir Shaikh", siteCode: "THF6", siteName: "Mumbai T2D Airport" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "THF9", siteName: "Amb Gurg Delhi" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Divya Lakshmi", siteCode: "THG0", siteName: "Lulu Mall" },
  { rm: "Yogesh", rom: "Chetan", sd: "Chetan", siteCode: "THG2", siteName: "Treasure Island Indore" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "THG3", siteName: "Forum Sujana Hyderabad" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "THG4", siteName: "1MG Bangalore" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THG5", siteName: "Vadodara" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "THG7", siteName: "Forum Chennai" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Lalit Mohan", siteCode: "THG8", siteName: "Pavilion Ludhiana" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "THH3", siteName: "Delhi Selectcity" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "THH8", siteName: "L&T Seawoods" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "THF8", siteName: "Delhi T3A Airport" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "THH2", siteName: "Delhi Pacific" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THI5", siteName: "Vega Siliguri" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Nasir Shaikh", siteCode: "THI8", siteName: "Mumbai Airport T1 Arrival" },
  { rm: "Yogesh", rom: "Chetan", sd: "Subodh", siteCode: "THI2", siteName: "ICC Pune" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Ajay Gill", siteCode: "THI7", siteName: "WTP Jaipur" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "THJ0", siteName: "Inorbit Mall, Hyderabad" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "THI9", siteName: "Xperia Mall, Dombivali" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "THI3", siteName: "Prozone Coimbatore" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Lalit Mohan", siteCode: "THJ1", siteName: "Alphaone, Amritsar" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "THJ2", siteName: "Oberoi Mall Mumbai" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THK1", siteName: "VR Surat" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Divya Lakshmi", siteCode: "THP1", siteName: "VR Chennai" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "THO9", siteName: "UB City Bangalore" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "THO8", siteName: "Shantiniketan Bangalore" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "THN3", siteName: "L&T Punjugutta" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "THK0", siteName: "Mall of India, Noida New" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THQ3", siteName: "Forum Esplanadone Bhubn" },
  { rm: "Yogesh", rom: "Chetan", sd: "Chetan", siteCode: "THP2", siteName: "Indore C21" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "THQ2", siteName: "Forum Mysore" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THQ0", siteName: "Ambuja Raipur" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "THR0", siteName: "D Centre Vijaywada" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "THM0", siteName: "Ardee Mall, Gurgaon" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Ashlin Moses", siteCode: "THP5", siteName: "Sarath City Capital" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Nasir Shaikh", siteCode: "THJ4", siteName: "Mumbai T2A" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Lalit Mohan", siteCode: "THP7", siteName: "Wave mall Jammu" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "THS5", siteName: "Brigade Orion" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THS6", siteName: "Golden Icon" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Nasir Shaikh", siteCode: "THM8", siteName: "Mall De Goa" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THS7", siteName: "City Centre Mall AS" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "THM2", siteName: "Z Square Kanpur" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "THS8", siteName: "Gaur Central" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THN2", siteName: "NUCLEUSMALL-JH" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "TJU3", siteName: "GSM Mall Hyd" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "TJU4", siteName: "DSL Mall Hyd" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THN6", siteName: "Utkal Galleria Bhubaneshwar" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Almas", siteCode: "THD9", siteName: "Infiniti Malad" },
  { rm: "Yogesh", rom: "Chetan", sd: "Manmohan", siteCode: "THR3", siteName: "South City Mall" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "TJY4", siteName: "Airia mall" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "TJU6", siteName: "Palassio Lucknow" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "TLX5", siteName: "Vegas dwarka" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "TPV5", siteName: "Bangalore Departure" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "TXPH", siteName: "Ambala" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "TWR1", siteName: "Vizag" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "TXGB", siteName: "HSR" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "TY4T", siteName: "JWD" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Ajay Gill", siteCode: "TXUT", siteName: "VAISHALI" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Almas", siteCode: "TMA0", siteName: "H N Hospital" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "TXYT", siteName: "Good Earth" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "TXSG", siteName: "Indiranagar" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "TZ8A", siteName: "Dehradun" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Ashlin Moses", siteCode: "TXSI", siteName: "HYD BANJARA HILLS" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Sarath", siteCode: "TUW4", siteName: "Gokulam" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Sarath", siteCode: "TY7V", siteName: "Hilite" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "TZ8Z", siteName: "Vega City" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "TASG", siteName: "Delhi Airport T1A" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Ajay Gill", siteCode: "TAUN", siteName: "Udhaipur Celebration" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Sarath", siteCode: "T42A", siteName: "Lulu Trivandrum" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "TXR2", siteName: "Zirakpur" },
  { rm: "Yogesh", rom: "Chetan", sd: "Chetan", siteCode: "T34O", siteName: "Citadel" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Nasir Shaikh", siteCode: "T42C", siteName: "Goa Airport" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Ashish Juyal", siteCode: "T38E", siteName: "Lulu Lko" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "T36H", siteName: "Falcon City Bangalore" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "TLY7", siteName: "JWD Play" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "T61F", siteName: "PMC CHENNAI Play" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "TAHY", siteName: "WMG Play" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "T77X", siteName: "Palladium Ahmedabad" },
  { rm: "Yogesh", rom: "Chetan", sd: "Subodh", siteCode: "T26L", siteName: "Kopa Pune" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "T36O", siteName: "Bangalore Airport T2" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Ajay Gill", siteCode: "T2DD", siteName: "CP67" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "T2DE", siteName: "Lucknow Airport Departure" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "T2DK", siteName: "Lucknow Airport Arrival" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "T2MI", siteName: "MALL OF ASIA" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "T5PF", siteName: "Ahmd T1A" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Sarath", siteCode: "T2WF", siteName: "Forum Kochi" },
  { rm: "Yogesh", rom: "Chetan", sd: "Subodh", siteCode: "T6AA", siteName: "PROZONE" },
  { rm: "Yogesh", rom: "Chetan", sd: "Subodh", siteCode: "T2UO", siteName: "Wakad PUNE MOM" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "T7UJ", siteName: "Chennai T1A" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Khubaib", siteCode: "T0ZV", siteName: "Delhi T1D" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "T3AA", siteName: "Rajkot" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Almas", siteCode: "TB2N", siteName: "Palladium, Mumbai (Relocation)" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "THG9", siteName: "DB City Bhopal" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "T7ZN", siteName: "R City Ghatkopar" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Almas", siteCode: "TB2O", siteName: "Rise-2, Palladium" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Almas", siteCode: "T8LI", siteName: "PMCK Kurla" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Khubaib", siteCode: "TF5T", siteName: "Hamleys Pacific D21" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "TL6O", siteName: "Hamleys IRIS(TASD)" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Harnest", siteCode: "TK0G", siteName: "Rowan garuda( T9MV" },
  { rm: "Yogesh", rom: "Divya Lakshmi", sd: "Damodharan", siteCode: "TL6C", siteName: "Rowan Marina Mall- T4IS" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "TL6N", siteName: "Rowan Jamnagar" },
  { rm: "Yogesh", rom: "Chetan", sd: "Subodh", siteCode: "THE4", siteName: "PMC Pune" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Ajay Gill", siteCode: "THE8", siteName: "AVK Delhi" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Harsh Sharma", siteCode: "TB6V", siteName: "Unity Elegante" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Sudhir", siteCode: "TF5Y", siteName: "Oberoi Borivali" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Umesh", siteCode: "TL9A", siteName: "Lullu Bangalore" },
  { rm: "Yogesh", rom: "Shirish Mastud", sd: "Virendra Rahevar", siteCode: "TBIM", siteName: "Zora Mall" },
  { rm: "Bipro", rom: "Ashlin Moses", sd: "Narayana", siteCode: "TBAV", siteName: "LAKESHORE" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Lalit Mohan", siteCode: "TM1F", siteName: "Model Town Jalandhar" },
  { rm: "Bipro", rom: "Ajay Gill", sd: "Paramjeet", siteCode: "TM1H", siteName: "Pacific Faridabad" },
  { rm: "Bipro", rom: "Lalit Mohan", sd: "Lalit Mohan", siteCode: "TBC7", siteName: "Creekside Doraha" }
];

// Business rule: total store count is fixed at 120 regardless of how many
// rows exist in the mapping table. Exposed separately so admin-generator.html
// can warn if the mapping table doesn't add up to 120.
const TOTAL_STORES_TARGET = 120;

/**
 * Finds the mapping row for a given site code.
 * @param {string|number} siteCode
 * @returns {object|null}
 */
function getStoreBySiteCode(siteCode) {
  const code = String(siteCode).trim();
  return storeMapping.find(function (s) { return String(s.siteCode).trim() === code; }) || null;
}

/** Returns the RM (Regional Manager) name that owns a given site code, or "Unmapped". */
function getRmBySiteCode(siteCode) {
  const store = getStoreBySiteCode(siteCode);
  return store ? store.rm : "Unmapped";
}

/** Returns the ROM name that owns a given site code, or "Unmapped". */
function getRomBySiteCode(siteCode) {
  const store = getStoreBySiteCode(siteCode);
  return store ? store.rom : "Unmapped";
}

/** Returns the SD name that owns a given site code, or "Unmapped". */
function getSdBySiteCode(siteCode) {
  const store = getStoreBySiteCode(siteCode);
  return store ? store.sd : "Unmapped";
}

/** Sorted, de-duplicated list of every RM (Regional Manager) name in the mapping. */
function getAllRMs() {
  return Array.from(new Set(storeMapping.map(function (s) { return s.rm; }))).sort();
}

/** Sorted, de-duplicated list of every ROM name in the mapping. */
function getAllRoms() {
  return Array.from(new Set(storeMapping.map(function (s) { return s.rom; }))).sort();
}

/**
 * Sorted, de-duplicated list of every genuine SD (Store Development) name in
 * the mapping. A handful of stores have their ROM's own name entered in the
 * "SD" column (the ROM is personally covering that store with no dedicated
 * SD assigned yet) - those are ROM names, not SD names, so they are
 * excluded here to keep SD-wise reporting (filters, table, KPI, charts)
 * limited to actual Store Development leads only.
 */
function getAllSds() {
  const romNames = new Set(storeMapping.map(function (s) { return s.rom; }));
  return Array.from(new Set(storeMapping.map(function (s) { return s.sd; })))
    .filter(function (sd) { return !romNames.has(sd); })
    .sort();
}

/** Count of stores assigned to a given RM. */
function countStoresByRM(rm) {
  return storeMapping.filter(function (s) { return s.rm === rm; }).length;
}

/** Count of stores assigned to a given ROM. */
function countStoresByRom(rom) {
  return storeMapping.filter(function (s) { return s.rom === rom; }).length;
}

/** Count of stores assigned to a given SD. */
function countStoresBySd(sd) {
  return storeMapping.filter(function (s) { return s.sd === sd; }).length;
}

/** All mapping rows belonging to a given RM. */
function getStoresByRM(rm) {
  return storeMapping.filter(function (s) { return s.rm === rm; });
}

/** All mapping rows belonging to a given ROM. */
function getStoresByRom(rom) {
  return storeMapping.filter(function (s) { return s.rom === rom; });
}

/** All mapping rows belonging to a given SD. */
function getStoresBySd(sd) {
  return storeMapping.filter(function (s) { return s.sd === sd; });
}

// Expose on window for browser use (plain script tags, no bundler/build step).
if (typeof window !== "undefined") {
  window.storeMapping = storeMapping;
  window.TOTAL_STORES_TARGET = TOTAL_STORES_TARGET;
  window.getStoreBySiteCode = getStoreBySiteCode;
  window.getRmBySiteCode = getRmBySiteCode;
  window.getRomBySiteCode = getRomBySiteCode;
  window.getSdBySiteCode = getSdBySiteCode;
  window.getAllRMs = getAllRMs;
  window.getAllRoms = getAllRoms;
  window.getAllSds = getAllSds;
  window.countStoresByRM = countStoresByRM;
  window.countStoresByRom = countStoresByRom;
  window.countStoresBySd = countStoresBySd;
  window.getStoresByRM = getStoresByRM;
  window.getStoresByRom = getStoresByRom;
  window.getStoresBySd = getStoresBySd;
}
