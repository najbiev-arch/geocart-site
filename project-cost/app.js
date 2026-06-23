const state = {
  catalog: null,
  items: [],
  coefficients: {
    urban: [{ id: "urban-default", name: "Общий коэффициент", value: 1 }],
    topo: [{ id: "topo-default", name: "Общий коэффициент", value: 1 }],
  },
};

const els = {
  estimateNo: document.querySelector("#estimateNo"),
  estimateDate: document.querySelector("#estimateDate"),
  estimateSubtitle: document.querySelector("#estimateSubtitle"),
  stageName: document.querySelector("#stageName"),
  customer: document.querySelector("#customer"),
  objectName: document.querySelector("#objectName"),
  designer: document.querySelector("#designer"),
  note: document.querySelector("#note"),
  urbanType: document.querySelector("#urbanType"),
  urbanIndicator: document.querySelector("#urbanIndicator"),
  urbanCoefficients: document.querySelector("#urbanCoefficients"),
  addUrbanCoefBtn: document.querySelector("#addUrbanCoefBtn"),
  seoOvosBox: document.querySelector("#seoOvosBox"),
  urbanSeoOvos: document.querySelector("#urbanSeoOvos"),
  urbanPreview: document.querySelector("#urbanPreview"),
  urbanSource: document.querySelector("#urbanSource"),
  addUrbanBtn: document.querySelector("#addUrbanBtn"),
  topoScale: document.querySelector("#topoScale"),
  topoRelief: document.querySelector("#topoRelief"),
  topoTerritory: document.querySelector("#topoTerritory"),
  topoCategory: document.querySelector("#topoCategory"),
  topoArea: document.querySelector("#topoArea"),
  topoCoefficients: document.querySelector("#topoCoefficients"),
  addTopoCoefBtn: document.querySelector("#addTopoCoefBtn"),
  topoField: document.querySelector("#topoField"),
  topoOffice: document.querySelector("#topoOffice"),
  topoPreview: document.querySelector("#topoPreview"),
  topoCount: document.querySelector("#topoCount"),
  addTopoBtn: document.querySelector("#addTopoBtn"),
  expertisePirCost: document.querySelector("#expertisePirCost"),
  useEstimateTotalBtn: document.querySelector("#useEstimateTotalBtn"),
  expertiseYear: document.querySelector("#expertiseYear"),
  expertisePirYear: document.querySelector("#expertisePirYear"),
  expertiseFactorYear: document.querySelector("#expertiseFactorYear"),
  expertiseFactorPirYear: document.querySelector("#expertiseFactorPirYear"),
  expertiseVatPercent: document.querySelector("#expertiseVatPercent"),
  expertiseTotalMode: document.querySelector("#expertiseTotalMode"),
  expertisePreview: document.querySelector("#expertisePreview"),
  addExpertiseBtn: document.querySelector("#addExpertiseBtn"),
  itemsBody: document.querySelector("#itemsBody"),
  grandTotal: document.querySelector("#grandTotal"),
  clearBtn: document.querySelector("#clearBtn"),
  printBtn: document.querySelector("#printBtn"),
  exportDocxBtn: document.querySelector("#exportDocxBtn"),
  exportXlsxBtn: document.querySelector("#exportXlsxBtn"),
  smetaTitleView: document.querySelector("#smetaTitleView"),
  smetaSubtitleView: document.querySelector("#smetaSubtitleView"),
  smetaWorkNameView: document.querySelector("#smetaWorkNameView"),
  smetaStageView: document.querySelector("#smetaStageView"),
  smetaDesignerView: document.querySelector("#smetaDesignerView"),
  smetaCustomerView: document.querySelector("#smetaCustomerView"),
};

const GENPLAN_SEO_OVOS_TYPES = new Set([
  "city_general_plan",
  "city_general_plan_teo",
  "rural_general_plan",
]);
const SEO_OVOS_RATE = 0.3;
const EXPERTISE_YEAR_FACTORS = [
  { year: 2028, mrp: 4573 },
  { year: 2027, mrp: 4355 },
  { year: 2026, mrp: 4325 },
  { year: 2025, mrp: 3932 },
  { year: 2024, mrp: 3692 },
  { year: 2023, mrp: 3450 },
  { year: 2022, mrp: 3063 },
  { year: 2022, mrp: 3180 },
  { year: 2021, mrp: 2917 },
  { year: 2020, mrp: 2651 },
  { year: 2020, mrp: 2778 },
  { year: 2019, mrp: 2525 },
  { year: 2018, mrp: 2405 },
  { year: 2017, mrp: 2269 },
  { year: 2016, mrp: 2121 },
  { year: 2015, mrp: 1982 },
  { year: 2014, mrp: 1852 },
  { year: 2014, mrp: 1912 },
  { year: 2013, mrp: 1731 },
  { year: 2012, mrp: 1618 },
  { year: 2011, mrp: 1512 },
  { year: 2010, mrp: 1413 },
  { year: 2009, mrp: 1296 },
  { year: 2009, mrp: 1273 },
  { year: 2008, mrp: 1168 },
  { year: 2007, mrp: 1092 },
  { year: 2006, mrp: 1030 },
  { year: 2005, mrp: 971 },
  { year: 2004, mrp: 919 },
  { year: 2003, mrp: 872 },
  { year: 2002, mrp: 823 },
  { year: 2001, mrp: 775 },
  { year: 2000, mrp: 725 },
];
const EXPERT_VERIFICATION_FACTORS = [
  { cost: 0.93, value: 0.1728 },
  { cost: 1.86, value: 0.1727 },
  { cost: 2.79, value: 0.1354 },
  { cost: 4.65, value: 0.0996 },
  { cost: 7.43, value: 0.0751 },
  { cost: 8.36, value: 0.07 },
  { cost: 12.08, value: 0.0561 },
  { cost: 15.79, value: 0.0478 },
  { cost: 19.51, value: 0.0421 },
  { cost: 23.23, value: 0.0379 },
  { cost: 26.94, value: 0.0346 },
  { cost: 38.09, value: 0.0281 },
  { cost: 46.45, value: 0.025 },
  { cost: 69.68, value: 0.023 },
  { cost: 92.9, value: 0.0211 },
  { cost: 139.35, value: 0.0174 },
  { cost: 185.81, value: 0.0152 },
  { cost: 278.71, value: 0.0128 },
  { cost: 418.06, value: 0.0108 },
  { cost: 557.42, value: 0.0096 },
  { cost: 706.06, value: 0.0087 },
  { cost: 836.13, value: 0.0082 },
  { cost: 1021.94, value: 0.0077 },
  { cost: 1207.74, value: 0.0073 },
  { cost: 1393.55, value: 0.007 },
  { cost: 1579.35, value: 0.0068 },
  { cost: 1765.16, value: 0.0066 },
  { cost: 1950.97, value: 0.0064 },
  { cost: 2136.77, value: 0.0063 },
  { cost: 2322.58, value: 0.0061 },
  { cost: 2573.55, value: 0.0058 },
];

function assertRequiredElements() {
  const missing = Object.entries(els)
    .filter(([, element]) => !element)
    .map(([key]) => key);
  if (missing.length) {
    throw new Error(`Не найдены элементы интерфейса: ${missing.join(", ")}`);
  }
}

function money(value) {
  return Number(value || 0).toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function numberText(value, digits = 2) {
  return Number(value || 0).toLocaleString("ru-RU", {
    maximumFractionDigits: digits,
  });
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function optionValue(item) {
  return `${item.year}|${item.mrp}`;
}

function selectedYearFactor(select) {
  const [year, mrp] = String(select.value || "").split("|").map(Number);
  return { year, mrp };
}

function vatPercentForYear(year) {
  return Number(year) > 2025 ? 16 : 12;
}

function normalizeEstimateNo(value) {
  const number = String(value || "")
    .trim()
    .replace(/^смета\s*[-№#]*/i, "")
    .trim();
  return number || "1";
}

function syncEstimateForm() {
  els.smetaTitleView.textContent = `СМЕТА № ${normalizeEstimateNo(els.estimateNo.value)}`;
  els.smetaSubtitleView.textContent = els.estimateSubtitle.value.trim() || "на проектные работы";
  els.smetaWorkNameView.textContent = els.objectName.value.trim();
  els.smetaStageView.textContent = els.stageName.value.trim();
  els.smetaDesignerView.textContent = els.designer.value.trim();
  els.smetaCustomerView.textContent = els.customer.value.trim();
}

function unique(values) {
  return [...new Set(values)].filter((value) => value !== undefined && value !== null);
}

function newCoefficient(scope) {
  const id = crypto.randomUUID ? crypto.randomUUID() : `${scope}-${Date.now()}-${Math.random()}`;
  return { id, name: "", value: 1 };
}

function coefficientSummary(scope) {
  const entries = state.coefficients[scope]
    .map((item) => ({
      id: item.id,
      name: String(item.name || "").trim(),
      value: Number(item.value || 1),
    }))
    .filter((item) => Number.isFinite(item.value) && item.value > 0);
  const product = entries.reduce((total, item) => total * item.value, 1);
  const factorText = entries.map((item) => numberText(item.value, 4)).join(" × ") || "1";
  const text = entries
    .map((item) => `${item.name || "коэффициент"} = ${numberText(item.value, 4)}`)
    .join("; ");

  return {
    entries,
    product,
    factorText,
    text: text || "коэффициенты не применялись",
  };
}

function coefficientContainer(scope) {
  return scope === "urban" ? els.urbanCoefficients : els.topoCoefficients;
}

function renderCoefficients(scope) {
  const container = coefficientContainer(scope);
  container.innerHTML = "";

  state.coefficients[scope].forEach((coefficient, index) => {
    const row = document.createElement("div");
    row.className = "coefficient-row";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Наименование / основание";
    nameInput.value = coefficient.name;
    nameInput.setAttribute("aria-label", "Наименование коэффициента");

    const valueInput = document.createElement("input");
    valueInput.type = "number";
    valueInput.min = "0";
    valueInput.step = "0.01";
    valueInput.value = coefficient.value;
    valueInput.setAttribute("aria-label", "Значение коэффициента");

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "danger mini";
    removeButton.textContent = "×";
    removeButton.title = "Удалить коэффициент";
    removeButton.disabled = state.coefficients[scope].length === 1;

    nameInput.addEventListener("input", () => {
      coefficient.name = nameInput.value;
      renderScopePreview(scope);
    });
    valueInput.addEventListener("input", () => {
      coefficient.value = valueInput.value;
      renderScopePreview(scope);
    });
    removeButton.addEventListener("click", () => {
      state.coefficients[scope] = state.coefficients[scope].filter((item) => item.id !== coefficient.id);
      if (!state.coefficients[scope].length) {
        state.coefficients[scope].push(newCoefficient(scope));
      }
      renderCoefficients(scope);
      renderScopePreview(scope);
    });

    row.append(nameInput, valueInput, removeButton);
    container.append(row);
  });
}

function renderScopePreview(scope) {
  if (scope === "urban") {
    renderUrbanPreview();
  } else {
    renderTopoPreview();
  }
}

function setOptions(select, values, label = (value) => value) {
  const previous = select.value;
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = label(value);
    select.append(option);
  });
  if (values.map(String).includes(previous)) {
    select.value = previous;
  }
}

function selectedUrbanType() {
  return state.catalog.urban.find((item) => item.id === els.urbanType.value);
}

function supportsSeoOvos(type) {
  return type && GENPLAN_SEO_OVOS_TYPES.has(type.id);
}

function syncSeoOvosVisibility() {
  const enabled = supportsSeoOvos(selectedUrbanType());
  els.seoOvosBox.hidden = !enabled;
  if (!enabled) {
    els.urbanSeoOvos.checked = false;
  }
}

function findUrbanRow(type, indicator) {
  return type.rows.find((row) => {
    const minOk = row.minExclusive ? indicator > row.min : indicator >= row.min;
    return minOk && indicator <= row.max;
  });
}

function firstUrbanRow(type) {
  return type.rows.reduce((selected, row) => {
    if (!selected) return row;
    return Number(row.min) < Number(selected.min) ? row : selected;
  }, null);
}

function lastUrbanRow(type) {
  return type.rows.reduce((selected, row) => {
    if (!selected) return row;
    return Number(row.max) > Number(selected.max) ? row : selected;
  }, null);
}

function urbanPricingRow(type, indicator) {
  const row = findUrbanRow(type, indicator);
  if (row) {
    return {
      row,
      mode: "table",
      calculationIndicator: indicator,
      sourceSuffix: "",
      rowLabel: row.label,
    };
  }

  const firstRow = firstUrbanRow(type);
  if (firstRow && indicator < Number(firstRow.min)) {
    const min = Number(firstRow.min);
    return {
      row: firstRow,
      mode: "below",
      boundary: min,
      calculationIndicator: 0.4 * min + 0.6 * indicator,
      sourceSuffix: "; Общие положения по применению цен на проектные работы, формула (2)",
      rowLabel: `${firstRow.label}; показатель ниже минимального табличного`,
    };
  }

  const lastRow = lastUrbanRow(type);
  if (lastRow && indicator > Number(lastRow.max)) {
    const max = Number(lastRow.max);
    return {
      row: lastRow,
      mode: "above",
      boundary: max,
      calculationIndicator: 0.4 * max + 0.6 * indicator,
      sourceSuffix: "; Общие положения по применению цен на проектные работы, формула (3)",
      rowLabel: `${lastRow.label}; показатель выше максимального табличного`,
    };
  }

  return null;
}

function urbanFormula(row, pricing, indicator, coefficients) {
  if (row.fixed && pricing.mode === "table") {
    return `${numberText(row.a)} × 1000 × (${coefficients.factorText})`;
  }

  if (pricing.mode === "below") {
    return `(${numberText(row.a)} + ${numberText(row.b)} × (0,4 × ${numberText(pricing.boundary)} + 0,6 × ${numberText(indicator)})) × 1000 × (${coefficients.factorText}); Xрасч = ${numberText(pricing.calculationIndicator)}`;
  }

  if (pricing.mode === "above") {
    return `(${numberText(row.a)} + ${numberText(row.b)} × (0,4 × ${numberText(pricing.boundary)} + 0,6 × ${numberText(indicator)})) × 1000 × (${coefficients.factorText}); Xрасч = ${numberText(pricing.calculationIndicator)}`;
  }

  return `(${numberText(row.a)} + ${numberText(row.b)} × ${numberText(indicator)}) × 1000 × (${coefficients.factorText})`;
}

function calcUrban() {
  const type = selectedUrbanType();
  if (!type) return null;

  const indicator = Number(els.urbanIndicator.value);
  const coefficients = coefficientSummary("urban");
  const coefficient = coefficients.product;
  if (!Number.isFinite(indicator) || indicator <= 0) {
    return {
      ok: false,
      message: "Введите положительный показатель для расчета.",
      type,
    };
  }

  const pricing = urbanPricingRow(type, indicator);
  if (!pricing) {
    return {
      ok: false,
      message: `Показатель должен попасть в диапазон таблицы ${type.table}.`,
      type,
    };
  }

  const row = pricing.row;
  const baseThousand = Number(row.a) + Number(row.b || 0) * pricing.calculationIndicator;
  const total = baseThousand * 1000 * coefficient;
  const indicatorText = `${type.indicatorLabel}: ${numberText(indicator)} ${type.indicatorUnit}`;
  const formula = urbanFormula(row, pricing, indicator, coefficients);

  return {
    ok: true,
    kind: "urban",
    typeId: type.id,
    title: type.title,
    source: `${type.source}, поз. ${row.pos}${pricing.sourceSuffix}`,
    indicator,
    indicatorText,
    coefficient,
    coefficients: coefficients.entries,
    coefficientText: coefficients.text,
    total,
    formula,
    rowLabel: pricing.rowLabel,
    baseCostText: `${money(baseThousand * 1000)} тг`,
    seoOvosSelected: supportsSeoOvos(type) && els.urbanSeoOvos.checked,
  };
}

function buildSeoOvosItem(baseItem) {
  const total = baseItem.total * SEO_OVOS_RATE;
  return {
    kind: "seo_ovos",
    title: "СЭО/ОВОС",
    source: "СЦП РК 8.03-01-2025, раздел 6, таблица 1706-0102-01, примечание 10; принято 0,3 от стоимости генплана/ТЭО генплана",
    indicator: baseItem.indicator,
    indicatorText: `0,3 от полной стоимости: ${baseItem.title}`,
    coefficient: SEO_OVOS_RATE,
    coefficients: [{ name: "СЭО/ОВОС", value: SEO_OVOS_RATE }],
    coefficientText: "СЭО/ОВОС = 0,3 от стоимости генплана",
    total,
    formula: `${money(baseItem.total)} × 0,3`,
  };
}

function renderUrbanPreview() {
  const result = calcUrban();
  if (!result) return;
  els.urbanSource.textContent = result.type ? result.type.table : selectedUrbanType()?.table || "";

  if (!result.ok) {
    els.urbanPreview.className = "preview error";
    els.urbanPreview.innerHTML = `<strong>${result.message}</strong><small>${result.type.source}</small>`;
    if (els.addUrbanBtn) els.addUrbanBtn.disabled = true;
    return;
  }

  els.urbanPreview.className = "preview";
  els.urbanPreview.innerHTML = `
    <strong>${money(result.total)} тг</strong>
    <small>${result.rowLabel}</small>
    <small>${result.coefficientText}</small>
    ${result.seoOvosSelected ? `<small>Дополнительно будет добавлена строка СЭО/ОВОС: ${money(result.total * SEO_OVOS_RATE)} тг</small>` : ""}
    <small>${result.formula}</small>
  `;
  if (els.addUrbanBtn) els.addUrbanBtn.disabled = false;
}

function filteredTopoRates(partial = {}) {
  const rates = state.catalog.topoRates || [];
  return rates.filter((rate) => {
    if (partial.scale && String(rate.scale) !== String(partial.scale)) return false;
    if (partial.relief && String(rate.relief) !== String(partial.relief)) return false;
    if (partial.territory && rate.territory !== partial.territory) return false;
    if (partial.category && rate.category !== partial.category) return false;
    return true;
  });
}

function refreshTopoOptions(changed) {
  const current = {
    scale: els.topoScale.value,
    relief: els.topoRelief.value,
    territory: els.topoTerritory.value,
    category: els.topoCategory.value,
  };

  if (!changed || changed === "scale") {
    const scales = unique(filteredTopoRates().map((rate) => rate.scale)).sort((a, b) => a - b);
    setOptions(els.topoScale, scales, (value) => `1:${value}`);
    current.scale = els.topoScale.value;
  }

  const reliefs = unique(filteredTopoRates({ scale: current.scale }).map((rate) => rate.relief)).sort((a, b) => a - b);
  setOptions(els.topoRelief, reliefs, (value) => String(value).replace(".", ","));
  current.relief = els.topoRelief.value;

  const territories = unique(filteredTopoRates({ scale: current.scale, relief: current.relief }).map((rate) => rate.territory));
  setOptions(els.topoTerritory, territories, (value) => state.catalog.territoryLabels[value] || value);
  current.territory = els.topoTerritory.value;

  const categories = unique(
    filteredTopoRates({ scale: current.scale, relief: current.relief, territory: current.territory }).map((rate) => rate.category),
  ).sort((a, b) => ["I", "II", "III"].indexOf(a) - ["I", "II", "III"].indexOf(b));
  setOptions(els.topoCategory, categories);
}

function calcTopo() {
  const scale = Number(els.topoScale.value);
  const relief = Number(els.topoRelief.value);
  const territory = els.topoTerritory.value;
  const category = els.topoCategory.value;
  const area = Number(els.topoArea.value);
  const coefficients = coefficientSummary("topo");
  const coefficient = coefficients.product;
  const selectedWorks = [];
  if (els.topoField.checked) selectedWorks.push("field");
  if (els.topoOffice.checked) selectedWorks.push("office");

  if (!area || area <= 0 || selectedWorks.length === 0) {
    return { ok: false, message: "Укажите площадь и состав работ." };
  }

  const rates = filteredTopoRates({ scale, relief, territory, category }).filter((rate) => selectedWorks.includes(rate.work));
  if (rates.length !== selectedWorks.length) {
    return { ok: false, message: "Для выбранной комбинации нет полной ставки." };
  }

  const rateSum = rates.reduce((sum, rate) => sum + rate.price, 0);
  const total = rateSum * area * coefficient;
  const workText = rates.map((rate) => rate.workLabel).join(" + ");
  const source = rates.map((rate) => `${rate.source}`).join("; ");
  const indicatorText = `Площадь: ${numberText(area)} га; масштаб 1:${scale}; сечение ${String(relief).replace(".", ",")} м; ${state.catalog.territoryLabels[territory]}; категория ${category}`;

  return {
    ok: true,
    kind: "topo",
    title: `Топографическая съемка: ${workText}`,
    source,
    indicator: area,
    indicatorText,
    coefficient,
    coefficients: coefficients.entries,
    coefficientText: coefficients.text,
    total,
    formula: `(${rates.map((rate) => numberText(rate.price, 0)).join(" + ")}) × ${numberText(area)} × (${coefficients.factorText})`,
    rateText: `${money(rateSum)} тг/га`,
  };
}

function renderTopoPreview() {
  const result = calcTopo();
  if (!result.ok) {
    els.topoPreview.className = "preview error";
    els.topoPreview.innerHTML = `<strong>${result.message}</strong>`;
    if (els.addTopoBtn) els.addTopoBtn.disabled = true;
    return;
  }

  els.topoPreview.className = "preview";
  els.topoPreview.innerHTML = `
    <strong>${money(result.total)} тг</strong>
    <small>${result.rateText}</small>
    <small>${result.coefficientText}</small>
    <small>${result.formula}</small>
  `;
  if (els.addTopoBtn) els.addTopoBtn.disabled = false;
}

function expertiseFactor(costByMrp) {
  const roundedCost = Number(Number(costByMrp).toFixed(2));
  const factors = EXPERT_VERIFICATION_FACTORS;

  if (roundedCost >= 2573.55) {
    return {
      ok: true,
      value: 0.0058,
      method: "верхний порог EPSD",
      costByMrp,
    };
  }

  for (let index = 0; index < factors.length; index += 1) {
    const factor = factors[index];
    if (factor.cost === roundedCost) {
      return {
        ok: true,
        value: factor.value,
        method: `табличное значение ${numberText(factor.cost)}`,
        costByMrp,
      };
    }

    if (factor.cost > roundedCost) {
      if (index === 0) {
        return {
          ok: true,
          value: factors[0].value,
          method: `минимальное табличное значение ${numberText(factors[0].cost)}`,
          costByMrp,
        };
      }

      if (index < factors.length - 1) {
        const previous = factors[index - 1];
        const current = factor;
        const value = ((previous.value - current.value) * (current.cost - costByMrp)) / (current.cost - previous.cost) + current.value;
        return {
          ok: true,
          value,
          method: `интерполяция между ${numberText(previous.cost)} и ${numberText(current.cost)}`,
          costByMrp,
        };
      }

      return {
        ok: false,
        message: "Для такого отношения стоимости ПИР к МРП портал EPSD показывает ошибку расчета.",
      };
    }
  }

  return {
    ok: false,
    message: "Не удалось определить коэффициент экспертизы.",
  };
}

function calcExpertise() {
  const pirCost = Number(els.expertisePirCost.value);
  const expertiseYear = selectedYearFactor(els.expertiseYear);
  const pirYear = selectedYearFactor(els.expertisePirYear);

  if (!Number.isFinite(pirCost) || pirCost <= 0) {
    return { ok: false, message: "Введите стоимость ПИР в тыс. тенге без НДС." };
  }

  if (!Number.isFinite(expertiseYear.mrp) || !Number.isFinite(pirYear.mrp) || expertiseYear.mrp <= 0 || pirYear.mrp <= 0) {
    return { ok: false, message: "Выберите годы для расчета МРП." };
  }

  const factorResult = expertiseFactor(pirCost / pirYear.mrp);
  if (!factorResult.ok) return factorResult;

  const vatPercent = vatPercentForYear(expertiseYear.year);
  const totalWithoutVat = Number((pirCost * factorResult.value * expertiseYear.mrp / pirYear.mrp * 1000).toFixed(0));
  const vatCost = totalWithoutVat * vatPercent / 100;
  const totalWithVat = totalWithoutVat + vatCost;
  const includeVat = els.expertiseTotalMode.value === "with_vat";
  const total = includeVat ? totalWithVat : totalWithoutVat;
  const source = "Единый портал комплексной экспертизы проектов EPSD, расчет стоимости экспертизы";
  const indicatorText = [
    `Стоимость ПИР: ${numberText(pirCost)} тыс. тг без НДС`,
    `год экспертизы: ${expertiseYear.year}, МРП ${numberText(expertiseYear.mrp, 0)}`,
    `год ПИР: ${pirYear.year}, МРП ${numberText(pirYear.mrp, 0)}`,
  ].join("; ");
  const formula = `${numberText(pirCost)} × ${numberText(factorResult.value, 6)} × ${numberText(expertiseYear.mrp, 0)} / ${numberText(pirYear.mrp, 0)} × 1000`;

  return {
    ok: true,
    kind: "expertise",
    title: `Экспертиза проектной документации, ${includeVat ? "с НДС" : "без НДС"}`,
    source,
    indicator: pirCost,
    indicatorText,
    coefficient: factorResult.value,
    coefficientText: `Кэв = ${numberText(factorResult.value, 6)}; ${includeVat ? `НДС = ${numberText(vatPercent, 0)}%` : "НДС не включен"}`,
    total,
    totalWithoutVat,
    totalWithVat,
    vatCost,
    vatPercent,
    formula: includeVat ? `${formula}; + НДС ${numberText(vatPercent, 0)}%` : formula,
    factorMethod: factorResult.method,
    costByMrp: factorResult.costByMrp,
  };
}

function syncExpertiseFactors() {
  const expertiseYear = selectedYearFactor(els.expertiseYear);
  const pirYear = selectedYearFactor(els.expertisePirYear);
  const vatPercent = vatPercentForYear(expertiseYear.year);
  els.expertiseFactorYear.value = Number.isFinite(expertiseYear.mrp) ? numberText(expertiseYear.mrp, 0) : "";
  els.expertiseFactorPirYear.value = Number.isFinite(pirYear.mrp) ? numberText(pirYear.mrp, 0) : "";
  els.expertiseVatPercent.value = Number.isFinite(vatPercent) ? numberText(vatPercent, 0) : "";
}

function renderExpertisePreview() {
  syncExpertiseFactors();
  const result = calcExpertise();
  if (!result.ok) {
    els.expertisePreview.className = "preview error";
    els.expertisePreview.innerHTML = `<strong>${result.message}</strong>`;
    if (els.addExpertiseBtn) els.addExpertiseBtn.disabled = true;
    return;
  }

  els.expertisePreview.className = "preview";
  els.expertisePreview.innerHTML = `
    <strong>${money(result.total)} тг</strong>
    <small>Без НДС: ${money(result.totalWithoutVat)} тг; НДС: ${money(result.vatCost)} тг; с НДС: ${money(result.totalWithVat)} тг</small>
    <small>${result.factorMethod}; ПИР / МРП ПИР = ${numberText(result.costByMrp, 4)}</small>
    <small>${result.formula}</small>
  `;
  if (els.addExpertiseBtn) els.addExpertiseBtn.disabled = false;
}

function designItemsTotal() {
  return state.items
    .filter((item) => item.kind !== "expertise")
    .reduce((sum, item) => sum + Number(item.total || 0), 0);
}

function addItem(item) {
  state.items.push({ ...item, id: crypto.randomUUID() });
  renderItems();
}

function removeItem(id) {
  state.items = state.items.filter((item) => item.id !== id);
  renderItems();
}

function renderItems() {
  els.itemsBody.innerHTML = "";
  state.items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.title}</td>
      <td>${item.source}</td>
      <td>${item.indicatorText}</td>
      <td>${item.formula}</td>
      <td>${item.coefficientText || numberText(item.coefficient, 4)}</td>
      <td>${money(item.total)}</td>
      <td><button class="danger" type="button" data-remove="${item.id}">×</button></td>
    `;
    els.itemsBody.append(row);
  });

  const total = state.items.reduce((sum, item) => sum + Number(item.total || 0), 0);
  els.grandTotal.textContent = money(total);
  if (els.expertisePreview) renderExpertisePreview();
}

function getMeta() {
  return {
    estimateNo: els.estimateNo.value.trim(),
    estimateSubtitle: els.estimateSubtitle.value.trim(),
    date: els.estimateDate.value,
    stageName: els.stageName.value.trim(),
    customer: els.customer.value.trim(),
    objectName: els.objectName.value.trim(),
    designer: els.designer.value.trim(),
    note: els.note.value.trim(),
  };
}

async function exportEstimate(kind) {
  if (!state.items.length) {
    alert("В смете нет строк для экспорта.");
    return;
  }
  const response = await fetch(`/api/export/${kind}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ meta: getMeta(), items: state.items }),
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Ошибка экспорта");
  }
  const blob = await response.blob();
  const disposition = response.headers.get("Content-Disposition") || "";
  const match = disposition.match(/filename\*=UTF-8''([^;]+)/);
  const filename = match ? decodeURIComponent(match[1]) : `smeta.${kind}`;
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  [els.estimateNo, els.estimateSubtitle, els.stageName, els.customer, els.objectName, els.designer].forEach((element) => {
    element.addEventListener("input", syncEstimateForm);
  });

  els.urbanType.addEventListener("change", () => {
    syncSeoOvosVisibility();
    renderUrbanPreview();
  });
  els.urbanIndicator.addEventListener("input", renderUrbanPreview);
  els.urbanSeoOvos.addEventListener("change", renderUrbanPreview);
  [els.urbanType, els.urbanIndicator].forEach((element) => {
    element.addEventListener("input", renderUrbanPreview);
  });
  els.addUrbanCoefBtn.addEventListener("click", () => {
    state.coefficients.urban.push(newCoefficient("urban"));
    renderCoefficients("urban");
    renderUrbanPreview();
  });
  els.addUrbanBtn.addEventListener("click", () => {
    const result = calcUrban();
    if (result?.ok) {
      addItem(result);
      if (result.seoOvosSelected) {
        addItem(buildSeoOvosItem(result));
      }
    }
  });

  [els.topoScale, els.topoRelief, els.topoTerritory, els.topoCategory].forEach((element) => {
    element.addEventListener("change", () => {
      refreshTopoOptions(element.id.replace("topo", "").toLowerCase());
      renderTopoPreview();
    });
  });
  [els.topoArea, els.topoField, els.topoOffice].forEach((element) => {
    element.addEventListener("input", renderTopoPreview);
    element.addEventListener("change", renderTopoPreview);
  });
  els.addTopoCoefBtn.addEventListener("click", () => {
    state.coefficients.topo.push(newCoefficient("topo"));
    renderCoefficients("topo");
    renderTopoPreview();
  });
  els.addTopoBtn.addEventListener("click", () => {
    const result = calcTopo();
    if (result.ok) addItem(result);
  });

  [els.expertisePirCost, els.expertiseYear, els.expertisePirYear, els.expertiseTotalMode].forEach((element) => {
    element.addEventListener("input", renderExpertisePreview);
    element.addEventListener("change", renderExpertisePreview);
  });
  els.useEstimateTotalBtn.addEventListener("click", () => {
    const pirTotal = designItemsTotal() / 1000;
    els.expertisePirCost.value = pirTotal ? Number(pirTotal.toFixed(2)) : "";
    renderExpertisePreview();
  });
  els.addExpertiseBtn.addEventListener("click", () => {
    const result = calcExpertise();
    if (result.ok) addItem(result);
  });

  els.itemsBody.addEventListener("click", (event) => {
    const id = event.target?.dataset?.remove;
    if (id) removeItem(id);
  });

  els.clearBtn.addEventListener("click", () => {
    state.items = [];
    renderItems();
  });
  els.printBtn.addEventListener("click", () => window.print());
  els.exportDocxBtn.addEventListener("click", () => exportEstimate("docx").catch((error) => alert(error.message)));
  els.exportXlsxBtn.addEventListener("click", () => exportEstimate("xlsx").catch((error) => alert(error.message)));
}

function initUrban() {
  els.urbanType.innerHTML = "";
  state.catalog.urban.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.title;
    els.urbanType.append(option);
  });
  els.urbanType.value = "city_pdp";
  renderCoefficients("urban");
  syncSeoOvosVisibility();
  renderUrbanPreview();
}

function initTopo() {
  els.topoCount.textContent = `${state.catalog.topoRates.length} ставок`;
  refreshTopoOptions();
  renderCoefficients("topo");
  renderTopoPreview();
}

function fillExpertiseYearSelect(select) {
  select.innerHTML = "";
  EXPERTISE_YEAR_FACTORS.forEach((item) => {
    const option = document.createElement("option");
    option.value = optionValue(item);
    option.textContent = `${item.year} год, МРП ${numberText(item.mrp, 0)}`;
    select.append(option);
  });

  const currentYear = new Date().getFullYear();
  const current = EXPERTISE_YEAR_FACTORS.find((item) => item.year === currentYear) || EXPERTISE_YEAR_FACTORS[0];
  select.value = optionValue(current);
}

function initExpertise() {
  fillExpertiseYearSelect(els.expertiseYear);
  fillExpertiseYearSelect(els.expertisePirYear);
  syncExpertiseFactors();
  renderExpertisePreview();
}

async function init() {
  assertRequiredElements();
  els.estimateDate.value = todayIso();
  const response = await fetch("/project-cost/catalog.json");
  state.catalog = await response.json();
  initUrban();
  initTopo();
  initExpertise();
  bindEvents();
  syncEstimateForm();
  renderItems();
}

init().catch((error) => {
  console.error(error);
  document.body.innerHTML = `<main class="shell"><div class="preview error"><strong>Не удалось запустить интерфейс</strong><small>${error.stack || error.message}</small></div></main>`;
});
