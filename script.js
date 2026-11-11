const CHECKOUT_URL = "https://pay.kiwify.com.br/PmXs34p";

function buildCheckoutUrl() {
  const url = new URL(CHECKOUT_URL);
  const current = new URLSearchParams(window.location.search);

  ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","src"].forEach((key) => {
    const value = current.get(key);
    if (value) url.searchParams.set(key, value);
  });

  return url.toString();
}

document.querySelectorAll("[data-checkout]").forEach((link) => {
  link.href = buildCheckoutUrl();
  link.rel = "noopener";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});