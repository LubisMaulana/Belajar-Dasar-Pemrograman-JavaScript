// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  orders.push({
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: 'Menunggu'
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id == orderId);

  if (order) {
    order.status = status;
  } else {
    console.log(`Order dengan ID ${orderId} tidak ditemukan.`);
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const dones = orders.filter(order => order.status == 'Selesai');

  return dones.reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id != id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
