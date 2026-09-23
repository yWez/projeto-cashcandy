const PRODUCT_PRICE = 49.90;

// Cole aqui o link oficial do checkout quando estiver pronto.
// Exemplo: const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK";
const CHECKOUT_URL = "";

const fields = {
  salePrice: document.getElementById("salePrice"),
  unitCost: document.getElementById("unitCost"),
  unitsDay: document.getElementById("unitsDay"),
  daysWeek: document.getElementById("daysWeek"),
  monthlyRevenue: document.getElementById("monthlyRevenue"),
  monthlyProfit: document.getElementById("monthlyProfit"),
  dailyProfit: document.getElementById("dailyProfit"),
  paybackUnits: document.getElementById("paybackUnits")
};

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

function numberValue(input) {
  const value = Number(input?.value || 0);
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function updateCalculator() {
  const price = numberValue(fields.salePrice);
  const cost = numberValue(fields.unitCost);
  const units = numberValue(fields.unitsDay);
  const days = Math.min(7, numberValue(fields.daysWeek));
  const weeksPerMonth = 4.3;

  const revenueDay = price * units;
  const profitUnit = price - cost;
  const profitDay = profitUnit * units;
  const monthlyRevenue = revenueDay * days * weeksPerMonth;
  const monthlyProfit = profitDay * days * weeksPerMonth;

  fields.monthlyRevenue.textContent = money.format(monthlyRevenue);
  fields.monthlyProfit.textContent = money.format(monthlyProfit);
  fields.dailyProfit.textContent = money.format(profitDay);

  if (profitUnit > 0) {
    fields.paybackUnits.textContent = Math.ceil(PRODUCT_PRICE / profitUnit);
  } else {
    fields.paybackUnits.textContent = "—";
  }
}

Object.values(fields)
  .filter((field) => field instanceof HTMLInputElement)
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
    alert("O checkout do Doce Renda ainda será conectado. Basta inserir o link oficial no arquivo script.js.");
  });
});
