    // Recuperar detalhes do carrinho enviados da página de produtos
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adicionar produtos ao carrinho
    function adicionarProdutosAoCarrinho(nome, preco, quantidade) {
      carrinho.push({ nome, preco, quantidade });
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      exibirCarrinho();
    }

    // Exibir produtos no carrinho
    function exibirCarrinho() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      let total = 0;

      carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        cartItems.innerHTML += `
          <tr>
            <td>Imagem</td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade}</td>
          </tr>
        `;
      });

      document.getElementById('cart-total').innerText = `R$${total.toFixed(2)}`;
    }

    // Chamar a função para exibir o carrinho ao carregar a página
    exibirCarrinho();













/*

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    let total = 0;

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = this.parentNode.parentNode;
        const name = row.querySelectorAll('td')[1].innerText;
        const price = parseFloat(row.querySelectorAll('td')[2].innerText.replace('$', ''));
        const quantity = parseInt(row.querySelector('.product-qtd-input').value);
        const subtotal = price * quantity;

        // Exemplo de ação: exibir no console
        console.log(`Produto: ${name}, Quantidade: ${quantity}, Subtotal: $${subtotal}`);

        total += subtotal;
        document.getElementById('cart-total').innerText = `R$${total.toFixed(2)}`;
      });
    });



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var totalAmount = "0,00"
  
  function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
    for (var i = 0; i < removeCartProductButtons.length; i++) {
      removeCartProductButtons[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addProductToCart)
    }
  
    // Botão comprar
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }
  
  function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productName = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
  
    const productsCartNames = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
        updateTotal()
        return
      }
    }
  
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")
  
    newCartProduct.innerHTML =
      `
        <td class="product-identification">
          <img src="${productImage}" alt="${productName}" class="cart-product-image">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)
    updateTotal()
  
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }
  
  function makePurchase() {
    if (totalAmount === "0,00") {
      alert("Seu carrinho está vazio!")
    } else {   
      alert(
        `
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}\n
          Volte sempre :)
        `
      )
  
      document.querySelector(".cart-table tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }
  */