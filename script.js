const listings = [
  {
    id: 1,
    title: "Ocean House",
    location: "Malibu, California",
    country: "United States",
    type: "Ocean house with private deck",
    category: "beachfront",
    price: 412,
    rating: 4.96,
    guests: 6,
    bedrooms: 3,
    amenities: ["wifi", "kitchen", "parking"],
    tags: ["beachfront", "views", "trending"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Pine Ridge Cabin",
    location: "Asheville, North Carolina",
    country: "United States",
    type: "Forest cabin under the pines",
    category: "cabins",
    price: 238,
    rating: 4.91,
    guests: 4,
    bedrooms: 2,
    amenities: ["wifi", "kitchen", "parking"],
    tags: ["cabins", "off-grid", "views"],
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Market Loft",
    location: "Tokyo, Japan",
    country: "Japan",
    type: "Quiet loft near night markets",
    category: "city",
    price: 169,
    rating: 4.88,
    guests: 3,
    bedrooms: 1,
    amenities: ["wifi", "kitchen"],
    tags: ["city", "trending"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Stone River Home",
    location: "Porto, Portugal",
    country: "Portugal",
    type: "Historic home above the river",
    category: "views",
    price: 184,
    rating: 4.94,
    guests: 5,
    bedrooms: 2,
    amenities: ["wifi", "kitchen"],
    tags: ["views", "city"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Alpine Lodge",
    location: "Banff, Canada",
    country: "Canada",
    type: "Alpine lodge with sauna",
    category: "views",
    price: 327,
    rating: 4.99,
    guests: 8,
    bedrooms: 4,
    amenities: ["wifi", "kitchen", "parking"],
    tags: ["views", "cabins", "trending"],
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Dune Cottage",
    location: "Tulum, Mexico",
    country: "Mexico",
    type: "Beach cottage by the water",
    category: "beachfront",
    price: 221,
    rating: 4.87,
    guests: 2,
    bedrooms: 1,
    amenities: ["wifi", "kitchen", "pool"],
    tags: ["beachfront", "pools"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    title: "Canyon Pool Villa",
    location: "Sedona, Arizona",
    country: "United States",
    type: "Private villa with red rock views",
    category: "pools",
    price: 356,
    rating: 4.93,
    guests: 6,
    bedrooms: 3,
    amenities: ["wifi", "kitchen", "pool", "parking"],
    tags: ["pools", "views", "trending"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    title: "Glass Desert Hideout",
    location: "Joshua Tree, California",
    country: "United States",
    type: "Off-grid stay for stargazing",
    category: "off-grid",
    price: 294,
    rating: 4.9,
    guests: 2,
    bedrooms: 1,
    amenities: ["wifi", "parking"],
    tags: ["off-grid", "views"],
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"
  }
];

const footerData = {
  popular: ["Dallas stays", "Barcelona apartments", "Kauai homes", "London cabins", "Tokyo condos", "Charleston villas", "Miami beach homes", "Rome retreats"],
  beach: ["Malibu beach homes", "Tulum cottages", "Kauai villas", "Miami condos", "Nice apartments", "Cancun houses", "Oahu condos", "San Diego stays"],
  mountains: ["Banff lodges", "Asheville cabins", "Sedona homes", "Big Bear cottages", "Salt Lake cabins", "Poconos houses", "Lake Tahoe stays", "Denver retreats"],
  city: ["Tokyo lofts", "Porto homes", "Barcelona flats", "New York stays", "London rooms", "Rome villas", "Chicago apartments", "Lisbon homes"]
};

const hostLocations = {
  "United States": {
    currency: "USD",
    cities: ["Austin", "Malibu", "New York", "Miami", "Asheville", "Sedona", "Joshua Tree"]
  },
  Pakistan: {
    currency: "PKR",
    cities: ["Karachi", "Lahore", "Islamabad", "Murree", "Hunza", "Skardu"]
  },
  Canada: {
    currency: "CAD",
    cities: ["Toronto", "Vancouver", "Banff", "Montreal", "Calgary"]
  },
  Japan: {
    currency: "JPY",
    cities: ["Tokyo", "Kyoto", "Osaka", "Sapporo", "Fukuoka"]
  },
  Portugal: {
    currency: "EUR",
    cities: ["Porto", "Lisbon", "Lagos", "Sintra", "Madeira"]
  },
  Mexico: {
    currency: "MXN",
    cities: ["Tulum", "Mexico City", "Cancun", "Oaxaca", "Puerto Vallarta"]
  }
};

const state = {
  category: "all",
  view: "homes",
  query: "",
  guests: 1,
  checkIn: "",
  checkOut: "",
  maxPrice: 500,
  amenities: [],
  saved: new Set(JSON.parse(localStorage.getItem("staynestSaved") || "[]")),
  currency: "USD"
};

const currencyRates = { USD: 1, EUR: 0.92, PKR: 278 };
const currencySymbols = { USD: "$", EUR: "EUR ", PKR: "PKR ", CAD: "CAD ", JPY: "JPY ", MXN: "MXN " };

const listingGrid = document.querySelector("#listingGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchForm = document.querySelector("#searchForm");
const destinationInput = document.querySelector("#destinationInput");
const checkInInput = document.querySelector("#checkInInput");
const checkOutInput = document.querySelector("#checkOutInput");
const guestInput = document.querySelector("#guestInput");
const filterDrawer = document.querySelector("#filterDrawer");
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");
const dialog = document.querySelector("#listingDialog");
const dialogContent = document.querySelector("#listingDialogContent");
const messageDialog = document.querySelector("#messageDialog");
const messageContent = document.querySelector("#messageContent");
const authDialog = document.querySelector("#authDialog");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authSubmit = document.querySelector("#authSubmit");
const hostDialog = document.querySelector("#hostDialog");
const hostForm = document.querySelector("#hostForm");
const hostSummary = document.querySelector("#hostSummary");
const hostPhotoPreview = document.querySelector("#hostPhotoPreview");
const hostCurrencyLabel = document.querySelector("#hostCurrencyLabel");
const profileMenu = document.querySelector("#profileMenu");
const languageMenu = document.querySelector("#languageMenu");
const toast = document.querySelector("#toast");
const themeToggle = document.querySelector("[data-theme-toggle]");
let hostStep = 0;
let authMode = "login";
let currentUser = JSON.parse(localStorage.getItem("staynestUser") || "null");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("staynestTheme", theme);
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

function money(amount) {
  const converted = Math.round(amount * currencyRates[state.currency]);
  return `${currencySymbols[state.currency]}${converted.toLocaleString()}`;
}

function hostMoney(amount) {
  const country = hostForm?.querySelector('[name="propertyCountry"]')?.value;
  const currency = hostLocations[country]?.currency || "USD";
  return `${currencySymbols[currency] || `${currency} `}${Number(amount || 0).toLocaleString()}`;
}

function nightsBetween(start, end) {
  if (!start || !end) return 3;
  const ms = new Date(end) - new Date(start);
  return Math.max(1, Math.round(ms / 86400000));
}

function getFilteredListings() {
  return listings.filter((listing) => {
    const query = state.query.toLowerCase();
    const matchesQuery = !query ||
      listing.location.toLowerCase().includes(query) ||
      listing.country.toLowerCase().includes(query) ||
      listing.title.toLowerCase().includes(query);
    const matchesCategory = state.category === "all" || listing.tags.includes(state.category);
    const matchesGuests = listing.guests >= state.guests;
    const matchesPrice = listing.price <= state.maxPrice;
    const matchesAmenities = state.amenities.every((item) => listing.amenities.includes(item));
    return matchesQuery && matchesCategory && matchesGuests && matchesPrice && matchesAmenities;
  });
}

function renderListings() {
  const results = getFilteredListings();
  listingGrid.innerHTML = results.map((listing) => {
    const saved = state.saved.has(listing.id);
    return `
      <article class="listing-card" data-listing="${listing.id}">
        <div class="listing-media">
          <img src="${listing.image}" alt="${listing.type}">
          <button class="save-button ${saved ? "saved" : ""}" type="button" aria-label="${saved ? "Remove saved stay" : "Save stay"}" data-save="${listing.id}">${saved ? "Saved" : "Save"}</button>
        </div>
        <button class="listing-card listing-card-button" type="button" data-open-listing="${listing.id}">
          <div class="listing-copy">
            <div><h2>${listing.location}</h2><span>* ${listing.rating}</span></div>
            <p>${listing.type}</p>
            <strong>${money(listing.price)} night</strong>
            <div class="amenity-row">${listing.amenities.map((item) => `<span>${item}</span>`).join("")}</div>
          </div>
        </button>
      </article>
    `;
  }).join("");

  resultCount.textContent = `${results.length} ${results.length === 1 ? "stay" : "stays"} available`;
  emptyState.hidden = results.length > 0;
}

function renderFooter(group = "popular") {
  document.querySelectorAll("#footerTabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.footer === group);
  });
  document.querySelector("#destinationLinks").innerHTML = footerData[group].map((item) => (
    `<button type="button" data-destination="${item.split(" ")[0]}">${item}</button>`
  )).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

function openModal(modal) {
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  document.body.classList.add("dialog-open");
}

function closeModal(modal) {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
    modal.dispatchEvent(new Event("close"));
  }
  document.body.classList.remove("dialog-open");
}

function openMessage(title, body) {
  messageContent.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
  openModal(messageDialog);
}

function userInitials(nameOrEmail) {
  const value = nameOrEmail || "Guest";
  const words = value.includes("@") ? [value[0]] : value.trim().split(/\s+/);
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function updateAuthUi() {
  const avatar = document.querySelector(".avatar");
  const loginButton = document.querySelector("[data-open-auth]");
  const logoutButton = document.querySelector("[data-logout]");
  if (currentUser) {
    avatar.classList.add("signed-in");
    avatar.textContent = userInitials(currentUser.name || currentUser.email);
    loginButton.textContent = currentUser.name || currentUser.email;
    logoutButton.hidden = false;
  } else {
    avatar.classList.remove("signed-in");
    avatar.textContent = "";
    loginButton.textContent = "Log in or sign up";
    logoutButton.hidden = true;
  }
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authTab === mode);
  });
  const isSignup = mode === "signup";
  authTitle.textContent = isSignup ? "Create your account" : "Log in to StayNest";
  authSubmit.textContent = isSignup ? "Create account" : "Log in";
  authForm.fullName.parentElement.hidden = !isSignup;
  authForm.terms.parentElement.hidden = !isSignup;
  authForm.fullName.required = isSignup;
  authForm.terms.required = isSignup;
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  authForm.reset();
  openModal(authDialog);
}

function saveUser(user) {
  currentUser = user;
  localStorage.setItem("staynestUser", JSON.stringify(user));
  updateAuthUi();
}

function socialSignIn(provider) {
  saveUser({
    name: `${provider} user`,
    email: `${provider.toLowerCase()}@demo.staynest`,
    provider
  });
  closeModal(authDialog);
  showToast(`Signed in with ${provider}`);
}

function openHostFlow() {
  hostStep = 0;
  updateHostCities();
  updateHostStep();
  openModal(hostDialog);
}

function updateHostStep() {
  document.querySelectorAll(".host-step").forEach((step, index) => {
    step.classList.toggle("active", index === hostStep);
  });
  document.querySelectorAll(".host-progress span").forEach((item, index) => {
    item.classList.toggle("active", index <= hostStep);
  });
  document.querySelector("[data-host-back]").disabled = hostStep === 0;
  document.querySelector("[data-host-next]").hidden = hostStep === 4;
  document.querySelector("[data-host-submit]").hidden = hostStep !== 4;
  if (hostStep === 4) updateHostSummary();
}

function currentHostStepValid() {
  const step = document.querySelector(`.host-step[data-step="${hostStep}"]`);
  const controls = [...step.querySelectorAll("input, select, textarea")];
  const validControls = controls.every((control) => control.reportValidity());
  if (!validControls) return false;
  if (hostStep === 1) {
    const galleryCount = hostForm.querySelector('[name="galleryPhotos"]').files.length;
    if (galleryCount > 10) {
      showToast("Please upload 10 or fewer extra photos");
      return false;
    }
  }
  return true;
}

function updateHostSummary() {
  const data = new FormData(hostForm);
  const amenities = data.getAll("hostAmenities");
  const country = data.get("propertyCountry");
  const city = data.get("propertyCity");
  const cover = hostForm.querySelector('[name="coverPhoto"]').files[0];
  const galleryCount = hostForm.querySelector('[name="galleryPhotos"]').files.length;
  const photoLine = `${cover ? "1 cover photo" : "No cover photo"} + ${galleryCount} gallery photo${galleryCount === 1 ? "" : "s"}`;
  hostSummary.innerHTML = `
    <strong>${data.get("propertyTitle") || "Untitled stay"}</strong><br>
    ${data.get("propertyType") || "Property"} in ${city || "city"}, ${country || "country"}<br>
    ${hostMoney(data.get("hostPrice"))} per night &middot; ${data.get("hostGuests") || 1} guests<br>
    Available ${data.get("availableFrom") || "soon"} to ${data.get("availableUntil") || "later"}<br>
    Photos: ${photoLine}<br>
    Amenities: ${amenities.length ? amenities.join(", ") : "None selected"}<br>
    Payout notices: ${data.get("payoutEmail") || "not set"}
  `;
}

function updateHostCities() {
  const countrySelect = hostForm.querySelector('[name="propertyCountry"]');
  const citySelect = hostForm.querySelector('[name="propertyCity"]');
  const country = countrySelect.value;
  const location = hostLocations[country];
  citySelect.innerHTML = location
    ? `<option value="">Select city</option>${location.cities.map((city) => `<option value="${city}">${city}</option>`).join("")}`
    : `<option value="">Select country first</option>`;
  citySelect.disabled = !location;
  hostCurrencyLabel.textContent = location?.currency || "USD";
}

function renderHostPhotoPreview() {
  const cover = hostForm.querySelector('[name="coverPhoto"]').files[0];
  const gallery = [...hostForm.querySelector('[name="galleryPhotos"]').files];
  const files = [cover, ...gallery].filter(Boolean);
  hostPhotoPreview.innerHTML = "";
  files.slice(0, 11).forEach((file, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    image.src = URL.createObjectURL(file);
    image.alt = index === 0 ? "Cover photo preview" : `Gallery photo ${index}`;
    image.onload = () => URL.revokeObjectURL(image.src);
    caption.textContent = index === 0 ? `Cover: ${file.name}` : file.name;
    figure.append(image, caption);
    hostPhotoPreview.append(figure);
  });
}

function openListing(id) {
  const listing = listings.find((item) => item.id === Number(id));
  if (!listing) return;
  const nights = nightsBetween(state.checkIn, state.checkOut);
  const subtotal = listing.price * nights;
  const fee = Math.round(subtotal * 0.12);
  const total = subtotal + fee;

  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-gallery"><img src="${listing.image}" alt="${listing.type}"></div>
      <div class="dialog-info">
        <h2>${listing.title}</h2>
        <strong>${listing.location} &middot; * ${listing.rating}</strong>
        <p>${listing.type}. Sleeps ${listing.guests} guests across ${listing.bedrooms} bedroom${listing.bedrooms > 1 ? "s" : ""}.</p>
        <div class="amenity-row">${listing.amenities.map((item) => `<span>${item}</span>`).join("")}</div>
        <form class="booking-box" data-booking="${listing.id}">
          <h3>${money(listing.price)} night</h3>
          <div class="booking-grid">
            <label>Check in <input type="date" name="checkIn" value="${state.checkIn}" required></label>
            <label>Check out <input type="date" name="checkOut" value="${state.checkOut}" required></label>
          </div>
          <label>Guests <input type="number" name="guests" min="1" max="${listing.guests}" value="${Math.min(state.guests, listing.guests)}" required></label>
          <div class="booking-total">
            <div><span>${money(listing.price)} x ${nights} nights</span><strong>${money(subtotal)}</strong></div>
            <div><span>Service fee</span><strong>${money(fee)}</strong></div>
            <div><span>Total</span><strong>${money(total)}</strong></div>
          </div>
          <button class="primary-button" type="submit">Reserve</button>
        </form>
      </div>
    </div>
  `;
  openModal(dialog);
}

function saveState() {
  localStorage.setItem("staynestSaved", JSON.stringify([...state.saved]));
}

function applySearch() {
  state.query = destinationInput.value.trim();
  state.guests = Math.max(1, Number(guestInput.value || 1));
  state.checkIn = checkInInput.value;
  state.checkOut = checkOutInput.value;
  renderListings();
}

function resetSearch() {
  state.category = "all";
  state.query = "";
  state.guests = 1;
  state.checkIn = "";
  state.checkOut = "";
  state.maxPrice = 500;
  state.amenities = [];
  destinationInput.value = "";
  guestInput.value = "1";
  checkInInput.value = "";
  checkOutInput.value = "";
  priceRange.value = "500";
  document.querySelectorAll(".amenity-filter").forEach((item) => {
    item.checked = false;
  });
  document.querySelectorAll(".category").forEach((item) => {
    item.classList.toggle("active", item.dataset.category === "all");
  });
  updatePriceLabel();
  renderListings();
}

function updatePriceLabel() {
  priceValue.textContent = state.maxPrice >= 500 ? `${money(500)}+` : `${money(state.maxPrice)}`;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  const viewCopy = {
    homes: ["Fresh picks for summer", "Find a place that feels made for the trip."],
    experiences: ["Local experiences", "Book memorable days with people who know the place."],
    services: ["Travel services", "Add a chef, photographer, trainer, or local helper."]
  };
  document.querySelector("#viewLabel").textContent = viewCopy[view][0];
  document.querySelector("#viewTitle").textContent = viewCopy[view][1];
  showToast(`${viewCopy[view][0]} loaded`);
}

document.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  const openButton = event.target.closest("[data-open-listing]");
  const categoryButton = event.target.closest("[data-category]");
  const destinationButton = event.target.closest("[data-destination]");

  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    if (state.saved.has(id)) {
      state.saved.delete(id);
      showToast("Removed from your wishlist");
    } else {
      state.saved.add(id);
      showToast("Saved to your wishlist");
    }
    saveState();
    renderListings();
    return;
  }

  if (openButton) {
    openListing(openButton.dataset.openListing);
    return;
  }

  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    document.querySelectorAll(".category").forEach((item) => item.classList.remove("active"));
    categoryButton.classList.add("active");
    renderListings();
    return;
  }

  if (destinationButton) {
    destinationInput.value = destinationButton.dataset.destination;
    applySearch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll(".nav-tab").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applySearch();
  showToast("Search updated");
});

document.querySelector("#clearFilters").addEventListener("click", resetSearch);
document.querySelector("[data-reset-search]").addEventListener("click", resetSearch);

document.querySelector("[data-open-filters]").addEventListener("click", () => {
  filterDrawer.hidden = false;
  document.body.classList.add("drawer-open");
});

document.querySelector("[data-close-filters]").addEventListener("click", () => {
  filterDrawer.hidden = true;
  document.body.classList.remove("drawer-open");
});

document.querySelector("[data-apply-filters]").addEventListener("click", () => {
  state.maxPrice = Number(priceRange.value);
  state.amenities = [...document.querySelectorAll(".amenity-filter:checked")].map((item) => item.value);
  document.querySelector("[data-open-filters]").setAttribute("aria-pressed", String(state.maxPrice < 500 || state.amenities.length > 0));
  filterDrawer.hidden = true;
  document.body.classList.remove("drawer-open");
  renderListings();
  showToast("Filters applied");
});

priceRange.addEventListener("input", () => {
  state.maxPrice = Number(priceRange.value);
  updatePriceLabel();
});

document.querySelector("[data-flexible]").addEventListener("click", () => {
  const today = new Date();
  const checkIn = new Date(today);
  const checkOut = new Date(today);
  checkIn.setDate(today.getDate() + 14);
  checkOut.setDate(today.getDate() + 18);
  checkInInput.value = checkIn.toISOString().slice(0, 10);
  checkOutInput.value = checkOut.toISOString().slice(0, 10);
  applySearch();
  showToast("Flexible dates added");
});

document.querySelectorAll("[data-open-host]").forEach((button) => {
  button.addEventListener("click", openHostFlow);
});

document.querySelector("[data-toggle-menu]").addEventListener("click", () => {
  profileMenu.hidden = !profileMenu.hidden;
  languageMenu.hidden = true;
});

document.querySelector("[data-toggle-language]").addEventListener("click", () => {
  languageMenu.hidden = !languageMenu.hidden;
  profileMenu.hidden = true;
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  showToast(`${nextTheme === "dark" ? "Dark" : "Light"} mode on`);
});

document.querySelectorAll("[data-currency]").forEach((button) => {
  button.addEventListener("click", () => {
    state.currency = button.dataset.currency;
    languageMenu.hidden = true;
    updatePriceLabel();
    renderListings();
    showToast(`Currency set to ${state.currency}`);
  });
});

document.querySelector("[data-open-auth]").addEventListener("click", () => {
  profileMenu.hidden = true;
  openAuth(currentUser ? "login" : "signup");
});

document.querySelector("[data-logout]").addEventListener("click", () => {
  profileMenu.hidden = true;
  currentUser = null;
  localStorage.removeItem("staynestUser");
  updateAuthUi();
  showToast("Logged out");
});

document.querySelector("[data-open-trips]").addEventListener("click", () => {
  profileMenu.hidden = true;
  openMessage("Trips", "You do not have any upcoming trips yet. Reserve a stay to create one.");
});

document.querySelector("[data-open-wishlist]").addEventListener("click", () => {
  profileMenu.hidden = true;
  const savedListings = listings.filter((item) => state.saved.has(item.id));
  openMessage("Wishlists", savedListings.length ? savedListings.map((item) => item.title).join("<br>") : "No saved stays yet.");
});

document.querySelector("[data-close-dialog]").addEventListener("click", () => {
  closeModal(dialog);
});

document.querySelector("[data-close-message]").addEventListener("click", () => {
  closeModal(messageDialog);
});

document.querySelector("[data-close-auth]").addEventListener("click", () => {
  closeModal(authDialog);
});

document.querySelector("[data-close-host]").addEventListener("click", () => {
  closeModal(hostDialog);
});

dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
messageDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
authDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
hostDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

document.querySelectorAll("[data-auth-tab]").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authTab));
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!authForm.reportValidity()) return;
  const data = new FormData(authForm);
  const email = data.get("email");
  const name = authMode === "signup" ? data.get("fullName") : email.split("@")[0];
  saveUser({ name, email, provider: "email" });
  closeModal(authDialog);
  showToast(authMode === "signup" ? "Account created" : "Logged in");
});

document.querySelectorAll("[data-social-auth]").forEach((button) => {
  button.addEventListener("click", () => socialSignIn(button.dataset.socialAuth));
});

document.querySelector("[data-host-back]").addEventListener("click", () => {
  hostStep = Math.max(0, hostStep - 1);
  updateHostStep();
});

document.querySelector("[data-host-next]").addEventListener("click", () => {
  if (!currentHostStepValid()) return;
  hostStep = Math.min(4, hostStep + 1);
  updateHostStep();
});

hostForm.querySelector('[name="propertyCountry"]').addEventListener("change", updateHostCities);
hostForm.querySelector('[name="coverPhoto"]').addEventListener("change", renderHostPhotoPreview);
hostForm.querySelector('[name="galleryPhotos"]').addEventListener("change", () => {
  if (hostForm.querySelector('[name="galleryPhotos"]').files.length > 10) {
    showToast("You can upload up to 10 more photos");
  }
  renderHostPhotoPreview();
});

hostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentHostStepValid()) return;
  const data = new FormData(hostForm);
  const coverPhoto = hostForm.querySelector('[name="coverPhoto"]').files[0];
  const galleryPhotos = [...hostForm.querySelector('[name="galleryPhotos"]').files];
  const submittedListings = JSON.parse(localStorage.getItem("staynestHostListings") || "[]");
  const listing = {
    title: data.get("propertyTitle"),
    country: data.get("propertyCountry"),
    city: data.get("propertyCity"),
    location: `${data.get("propertyCity")}, ${data.get("propertyCountry")}`,
    type: data.get("propertyType"),
    currency: hostLocations[data.get("propertyCountry")]?.currency || "USD",
    price: Number(data.get("hostPrice")),
    guests: Number(data.get("hostGuests")),
    bedrooms: Number(data.get("hostBedrooms")),
    coverPhotoName: coverPhoto?.name || "",
    galleryPhotoNames: galleryPhotos.map((file) => file.name),
    description: data.get("description"),
    availableFrom: data.get("availableFrom"),
    availableUntil: data.get("availableUntil"),
    amenities: data.getAll("hostAmenities"),
    legalName: data.get("legalName"),
    payoutEmail: data.get("payoutEmail"),
    submittedAt: new Date().toISOString()
  };
  submittedListings.push(listing);
  localStorage.setItem("staynestHostListings", JSON.stringify(submittedListings));
  closeModal(hostDialog);
  hostForm.reset();
  hostPhotoPreview.innerHTML = "";
  updateHostCities();
  openMessage("Listing submitted", `${listing.title} has been sent for demo review. Property details, photos, availability, payout setup, and identity checks were collected.`);
});

dialog.addEventListener("submit", (event) => {
  const bookingForm = event.target.closest("[data-booking]");
  if (!bookingForm) return;
  event.preventDefault();
  const data = new FormData(bookingForm);
  const listing = listings.find((item) => item.id === Number(bookingForm.dataset.booking));
  const guests = Number(data.get("guests"));
  if (new Date(data.get("checkOut")) <= new Date(data.get("checkIn"))) {
    showToast("Check-out must be after check-in");
    return;
  }
  closeModal(dialog);
  openMessage("Reservation requested", `Your request for ${listing.title} was created for ${guests} guest${guests > 1 ? "s" : ""}. This is a front-end demo, so no payment was taken.`);
});

document.querySelector("#footerTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-footer]");
  if (button) renderFooter(button.dataset.footer);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    profileMenu.hidden = true;
    languageMenu.hidden = true;
    filterDrawer.hidden = true;
    document.body.classList.remove("drawer-open");
  }
});

applyTheme(localStorage.getItem("staynestTheme") || "light");
setAuthMode("login");
updateAuthUi();
renderFooter();
updatePriceLabel();
renderListings();
