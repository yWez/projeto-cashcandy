# Dole — Doce Renda

Landing page de vendas do **Doce Renda**, produto digital da Dole.

## Oferta atual

- **Doce Renda:** R$ 49,90
- O order bump complementar é exibido somente no checkout e não aparece na landing page.

## Estrutura da página

A página foi construída como uma landing page longa de conversão, com:

- Hero com foto real dos doces da Dole
- Identificação com o público
- História do Marcelo com foto real da formação em confeitaria
- Provas sociais com registros reais de dias de venda
- Apresentação do conteúdo do produto
- Calculadora interativa com sliders para simular faturamento e lucro
- Oferta principal
- FAQ
- CTA final
- CTA fixo no mobile
- Identidade visual com logo oficial da Dole

## Checkout

O checkout ainda precisa ser conectado ao link oficial de pagamento.

Edite em `script.js`:

```js
const CHECKOUT_URL = "";
```

e substitua pelo link oficial do checkout:

```js
const CHECKOUT_URL = "https://seu-checkout-aqui.com";
```

Todos os botões de compra passarão a abrir esse endereço.

## Publicação

O site é publicado pelo GitHub Pages diretamente da branch principal:

- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)

Cada atualização na `main` dispara uma nova publicação.

## Observação sobre resultados

Os números da história do Marcelo e os registros de vendas representam resultados pessoais reais e não são garantia de faturamento. A calculadora é uma simulação educativa. Resultados variam conforme execução, custos, preço, demanda, região, frequência de venda e outros fatores.
