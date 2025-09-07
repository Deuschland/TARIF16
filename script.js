// Єдина структура з усіма даними
const categories = {
  "SCHMIEDER KLINIK": {
    icon: "fa-hospital",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "3491",
      "Kostenträger - Name / Ort": "SCHMIEDER KLINIK",
      "Von Objekt / Ort": "SCHM. GAILINGEN",
      "Nach Objekt / Ort": "SCHM. ALLENSBACH / MRT",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "",
      "Zusatztext für Rechnung": ""
    },
    subOptions: [
      { label: "3 - Tragestuhl", Tarif: "9211", icon: "" }, // fa-wheelchair
      { label: "4 - gehfähig", Tarif: "9111", icon: "fa-person-walking" },
      { label: "5 - Rollstuhl", Tarif: "9711", icon: "fa-wheelchair-move" }
    ]
  },
  "PRIVAT": {
    icon: "fa-user",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "1",
      "Kostenträger - Name / Ort": "PRIVAT",
      "Von Objekt / Ort": "WHG",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "6600",
      "Zusatztext für Rechnung": ""
    }
  },
  "Hilfeleistung bzw. Tragehilfen/privat": {
    icon: "fa-hands-helping",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "1",
      "Kostenträger - Name / Ort": "Hilfeleistung bzw. Tragehilfen/privat",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "WHG",
      "Statistik": "93",
      "Zusatzfeld": "",
      "Tarif": "2800",
      "Zusatztext для Rechnung": "HOCH HELFЕН"
    }
  },
  "HAUSNOTRUF": {
    icon: "fa-phone-volume",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "8",
      "Kostenträger - Name / Ort": "HAUSNOTRUF",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "WHG",
      "Statistik": "89",
      "Zusatzfeld": "8",
      "Tarif": "8609",
      "Zusatztext для Rechnung": "HNR NR."
    }
  },
  "ZFP Reichenau": {
    icon: "fa-clinic-medical",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "2775",
      "Kostenträger - Name / Ort": "ZFP Reichenau",
      "Von Objekt / Ort": "ZFP ST. 92",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "9301",
      "Zusatztext для Rechnung": ""
    }
  },
  "LEERFAHRT": {
    icon: "fa-car-side",
    data: {
      "Name": "DIENSTFAHRT",
      "Kostenträger-Nr.": "9",
      "Kostenträger - Name / Ort": "LEERFAHRT",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "4202 / 4203 / 4205 / 4206",
      "Statistik": "91",
      "Zusatzfeld": "7",
      "Tarif": "Kein",
      "Zusatztext для Rechnung": ""
    }
  },
  "FEHLFAHRT": {
    icon: "fa-exclamation-triangle",
    data: {
      "Name": "FEHLFAHRT",
      "Kostenträger-Nr.": "9",
      "Kostenträger - Name / Ort": "LEERFAHRT",
      "Von Objekt / Ort": "4204",
      "Nach Objekt / Ort": "",
      "Statistik": "81",
      "Zusatzfeld": "6",
      "Tarif": "Kein",
      "Zusatztext для Rechnung": ""
    }
  },
  "KRANKENHAUS": {
    icon: "fa-hospital-user",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "",
      "Kostenträger - Name / Ort": "",
      "Von Objekt / Ort": "",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "",
      "Zusatztext для Rechnung": ""
    },
    subOptions: [
      { label: "KH - KONSTANZ", "Kostenträger - Name / Ort": "KH - KONSTANZ", "Von Objekt / Ort": "ZNA MED KONSTANZ", "Nach Objekt / Ort": "ZNA MED SINGEN", "Statistik": "21", "Kostenträger-Nr.": "1203", Tarif: "9101", icon: "fa-hospital" },
      { label: "DR. ZWICKER", "Kostenträger - Name / Ort": "KH - KN", "Von Objekt / Ort": "PO3", "Nach Objekt / Ort": "ZWICKER", "Statistik": "23 / 24", "Kostenträger-Nr.": "1203", Tarif: "9101", icon: "fa-user-doctor" },
      { label: "KH - SINGEN", "Kostenträger - Name / Ort": "KH - SINGEN", "Von Objekt / Ort": "ZNA MED SINGEN", "Nach Objekt / Ort": "ZNA MED KONSTANZ", "Statistik": "21", "Kostenträger-Nr.": "3214", Tarif: "9201", icon: "fa-hospital" },
      { label: "KH - STOCKACH", "Kostenträger - Name / Ort": "KH - STOCKACH", "Von Objekt / Ort": "ZNA MED STOCKACH", "Nach Objekt / Ort": "ZNA MED KONSTANZ", "Statistik": "21", "Kostenträger-Nr.": "3151", Tarif: "9301", icon: "fa-hospital" }
    ]
  },
  "HEGAU JUGENDWERК": {
    icon: "fa-user-md",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "3472",
      "Kostenträger - Name / Ort": "",
      "Von Objekt / Ort": "",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "9201",
      "Zusatztext для Rechnung": ""
    }
  },
  "Tarife für Rollstuhlfahrten": {
    icon: "fa-notes-medical",
    data: {
      "Name": "",
      "Kostenträger-Nr.": "",
      "Kostenträger - Name / Ort": "",
      "Von Objekt / Ort": "",
      "Nach Objekt / Ort": "",
      "Statistik": "",
      "Zusatzfeld": "",
      "Tarif": "",
      "Zusatztext для Rechnung": ""
    },
    subOptions: [
      { label: "DAK", "Kostenträger - Name / Ort": "DAK", "Kostenträger-Nr.": "600", Tarif: "7611", icon: "fa-wheelchair" },
      { label: "TK", "Kostenträger - Name / Ort": "TK", "Kostenträger-Nr.": "163", Tarif: "7611", icon: "fa-wheelchair" },
      { label: "BEK", "Kostenträger - Name / Ort": "BEK", "Kostenträger-Nr.": "748", Tarif: "7611", icon: "fa-wheelchair" },
      { label: "KKH", "Kostenträger - Name / Ort": "KKH", "Kostenträger-Nr.": "590", Tarif: "7611", icon: "fa-wheelchair" },
      { label: "hkk", "Kostenträger - Name / Ort": "hkk", "Kostenträger-Nr.": "1602", Tarif: "7611", icon: "fa-wheelchair" },
      { label: "HEK", "Kostenträger - Name / Ort": "HEK", "Kostenträger-Nr.": "175", Tarif: "7611", icon: "fa-wheelchair" },
       { label: "IKK", "Kostenträger - Name / Ort": "IKK", "Kostenträger-Nr.": "1770", Tarif: "7621", icon: "fa-wheelchair" }
    ]
  }
};

// DOM елементи
const resetBtn = document.getElementById("reset-button");
const menuContainer = document.getElementById("menu-buttons");
const subOptions = document.getElementById("sub-options");
const output = document.getElementById("output");
const resetContainer = document.getElementById("reset-container");

// Універсальна функція створення кнопок
function createButton(text, iconClass, onClick, extraClass = "") {
  const btn = document.createElement("button");
  btn.className = `icon-button ${extraClass}`.trim();
  btn.innerHTML = iconClass ? `<i class="fas ${iconClass}"></i> ${text}` : text;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

// Очищення контейнерів
function clearContainers() {
  menuContainer.textContent = "";
  subOptions.textContent = "";
  output.textContent = "";
}

// Рендер категорії
function renderView(name) {
  clearContainers();
  const category = categories[name];

  // Додаємо кнопку вибраної категорії у верх списку
  menuContainer.appendChild(
    createButton(
      name, // тепер завжди використовуємо ім’я категорії
      category.icon,
      null,
      "selected"
    )
  );

  resetContainer.style.display = "block";

  if (category.subOptions) {
    category.subOptions.forEach(opt => {
      subOptions.appendChild(
        createButton(opt.label, opt.icon || null, () => renderSubSelection(opt, category.data))
      );
    });
  } else {
    renderTable(category.data);
  }
}

// Рендер підкатегорії
function renderSubSelection(option, baseData) {
  subOptions.textContent = "";
  subOptions.appendChild(createButton(option.label, option.icon || null, null, "sub-selected"));
  renderTable({ ...baseData, ...option });
}

// Рендер таблиці
function renderTable(entry) {
  const fields = [
    "Name", "Kostenträger-Nr.", "Kostenträger - Name / Ort",
    "Von Objekt / Ort", "Nach Objekt / Ort", "Statistik",
    "Zusatzfeld", "Tarif", "Zusatztext für Rechnung"
  ];

  output.innerHTML = `<div class="vertical-table">${
    fields
      .filter(f => entry[f] && String(entry[f]).trim() !== "")
      .map(f => {
        const extraClass = (f === "Kostenträger-Nr." || f === "Tarif") ? "highlight" : "";
        return `<div class="row">
                  <div class="label">${f}</div>
                  <div class="value ${extraClass}">${entry[f]}</div>
                </div>`;
      }).join("")
  }</div>`;
}

// Скидання вибору
function resetView() {
  clearContainers();
  resetContainer.style.display = "none";

  const categoryNames = Object.keys(categories);

  // Додаємо першу кнопку у список (без класу selected)
  if (categoryNames.length > 0) {
    const firstName = categoryNames[0];
    menuContainer.appendChild(
      createButton(
        firstName,
        categories[firstName].icon,
        () => renderView(firstName)
      )
    );
  }

  // Додаємо решту кнопок
  categoryNames.slice(1).forEach(name => {
    menuContainer.appendChild(
      createButton(name, categories[name].icon, () => renderView(name))
    );
  });
}

// Події
resetBtn.addEventListener("click", resetView);

// Ініціалізація
resetView();

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('Service Worker error:', err));
}