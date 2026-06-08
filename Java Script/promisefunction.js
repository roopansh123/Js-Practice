function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Anmol" });
    }, 2000);
  });
}

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, status: "pending" });
    }, 2000);
  });
}

function fetchNotifications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Welcome", "New orders to be fulfilled"]);
    }, 2000);
  });
}

async function loadDashboard() {
  // const user = await fetchUser();
  // // pause
  // const orders = await fetchOrders();
  // // pause
  // const notifications =await fetchNotifications();
  // // pause

  // all promises must succeed before continuing i.e. before loading the dashboard
  const [user, orders, notifications] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);

  console.log(user, orders, notifications);
}

loadDashboard();
