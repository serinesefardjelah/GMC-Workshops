  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.getElementById("total-price");

  const updateTotalPrice = () => {
    console.log("Updating total price");
    let total = 0;
    cartItems.forEach((item) => {
      console.log("we have", cartItems.length, "items");
      const quantityElement = parseInt(
        item.querySelector(".quantity").innerHTML
      );
      const price = parseInt(item.dataset.price);
      total += quantityElement * price;
    });
    console.log(total);

    totalPriceElement.innerText = total;
  };

  cartItems.forEach((item) => {
    const likeButton = item.querySelector(".like-button");
    const quantityElement = item.querySelector(".quantity");
    const itemTotalPriceElement = item.querySelector(".item-total-price");
    const deleteButton = item.querySelector(".delete-button");

    likeButton.addEventListener("click", () => {
      const icon = likeButton.querySelector("i");
      icon.classList.toggle("fas");
    });

    item.addEventListener("click", (event) => {
      if (event.target.classList.contains("quantity-button")) {
        const action = event.target.dataset.action;
        let quantity = parseInt(quantityElement.innerText);
        if (action === "increase") {
          quantity++;
        } else if (action === "decrease" && quantity > 1) {
          quantity--;
        }
        quantityElement.innerText = quantity;
        const price = parseInt(item.dataset.price);
        itemTotalPriceElement.innerText = "$" + price * quantity;
        updateTotalPrice();
      }

      if (event.target.classList.contains("delete-button")) {
        item.remove();
        updateTotalPrice();
      }
    });
  });
