const CHECKOUT_URL = "https://pay.kiwify.com.br/PmXs34p";

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