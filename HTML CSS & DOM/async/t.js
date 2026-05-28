async function displayOrderDetails() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const orderDetails = await getOrderDetails(orders[0].id);
    console.log("Order details:", orderDetails);
  } catch (error) {
    console.error("Error:", error);
  }
}
