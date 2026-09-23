const PRODUCT_PRICE = 49.90;

// Cole aqui o link oficial do checkout quando estiver pronto.
// Exemplo: const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK";
const CHECKOUT_URL = "";

const fields = {
  salePrice: document.getElementById("salePrice"),
  unitCost: document.getElementById("unitCost"),
  unitsDay: document.getElementById("unitsDay"),
  daysWeek: document.getElementById("daysWeek"),
  salePriceValue: document.getElementById("salePriceValue"),
  unitCostValue: document.getElementById("unitCostValue"),
  unitsDayValue: document.getElementById("unitsDayValue"),
  daysWeekValue: document.getElementById("daysWeekValue"),
  monthlyRevenue: document.getElementById("monthlyRevenue"),
  monthlyProfit: document.getElementById("monthlyProfit"),
  dailyProfit: document.getElementById("dailyProfit"),
  paybackUnits: document.getElementById("paybackUnits")
};

const money0 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

const money2 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function numeric(input) {
  const value = Number(input?.value ?? 0);
  return Number.isFinite(value) ? value : 0;
}

function paintRange(input) {
  if (!input) return;
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);
  const progress = ((value - min) / (max - min)) * 100;
  input.style.setProperty("--fill", progress + "%");
}

function updateCalculator() {
  const price = numeric(fields.salePrice);
  const cost = numeric(fields.unitCost);
  const units = numeric(fields.unitsDay);
  const days = numeric(fields.daysWeek);
  const weeksPerMonth = 4.3;

  const revenueDay = price * units;
  const profitUnit = price - cost;
  const profitDay = profitUnit * units;
  const monthlyRevenue = revenueDay * days * weeksPerMonth;
  const monthlyProfit = profitDay * days * weeksPerMonth;

  fields.salePriceValue.textContent = money2.format(price);
  fields.unitCostValue.textContent = money2.format(cost);
  fields.unitsDayValue.textContent = String(units);
  fields.daysWeekValue.textContent = String(days);

  fields.monthlyRevenue.textContent = money0.format(monthlyRevenue);
  fields.monthlyProfit.textContent = money0.format(monthlyProfit);
  fields.dailyProfit.textContent = money0.format(profitDay);
  fields.paybackUnits.textContent = profitUnit > 0
    ? String(Math.ceil(PRODUCT_PRICE / profitUnit))
    : "—";

  [fields.salePrice, fields.unitCost, fields.unitsDay, fields.daysWeek].forEach(paintRange);
}

[fields.salePrice, fields.unitCost, fields.unitsDay, fields.daysWeek]
  .filter(Boolean)
  .forEach((field) => field.addEventListener("input", updateCalculator));

updateCalculator();

document.querySelectorAll("[data-checkout]").forEach((link) => {
  if (CHECKOUT_URL) {
    link.href = CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("O checkout oficial ainda será conectado. Assim que o link de pagamento for inserido, este botão levará direto para a compra.");
  });
});