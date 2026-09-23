# Dole — Doce Renda

Landing page de vendas do **Doce Renda**, produto digital da Dole.

## Oferta atual

- **Doce Renda:** R$ 49,90
- **Brigadeiros de Luxo:** R$ 19,90 como order bump

## Estrutura da página

A página foi construída como uma landing page longa de conversão, com:

- Hero com promessa e CTA
- Identificação com o público
- História do Marcelo e construção de autoridade
- Apresentação do conteúdo do produto
- Calculadora interativa de faturamento e lucro estimado
- Apresentação do order bump Brigadeiros de Luxo
- Oferta principal
- FAQ
- CTA final
- CTA fixo no mobile

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

Todos os botões marcados para compra passarão a abrir esse endereço.

## Publicação

Como o site é estático, a publicação mais simples é pelo próprio GitHub Pages usando a branch principal.

No repositório, abra:

**Settings → Pages → Build and deployment**

Configure:
- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)

Clique em **Save**.

Depois disso, o GitHub publicará automaticamente a versão mais recente da branch `main`.

## Observação sobre resultados

Os números apresentados na história do Marcelo representam resultados pessoais relatados por ele e não são garantia de faturamento. A calculadora é uma simulação educativa e os resultados reais dependem de custos, preço, demanda, região, frequência de venda e execução.
