function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "iPhone 15 Pro Max", 34000000, 10, "Phone", true),
    new Product(2, "Samsung Galaxy S24", 25000000, 5, "Phone", true),
    new Product(3, "MacBook Pro M3", 45000000, 3, "Laptop", true),
    new Product(4, "Tai nghe AirPods", 4000000, 0, "Accessories", true), 
    new Product(5, "Chuột Logitech", 500000, 20, "Accessories", true),
    new Product(6, "Ốp lưng iPhone", 150000, 50, "Accessories", false)  
];

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);


const nameAndPriceList = products.map(product => {
    return { name: product.name, price: product.price };
});
console.log("\n--- Câu 3: Mảng chỉ chứa tên và giá ---");
console.log(nameAndPriceList);


const availableProducts = products.filter(product => product.quantity > 0);
console.log("\n--- Câu 4: Các sản phẩm còn hàng trong kho ---");
console.log(availableProducts);


const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log("\n--- Câu 5: Có sản phẩm giá trên 30 triệu không? ---");
console.log(hasExpensiveProduct ? "Có" : "Không");

const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log("\n--- Câu 6: Tất cả phụ kiện đều đang mở bán? ---");
console.log(allAccessoriesAvailable ? "Đúng, tất cả đang bán" : "Không, có món ngừng bán");

const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");


console.log("\n--- Câu 8: Duyệt mảng bằng for...of ---");
for (const product of products) {
    let statusText = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${statusText}`);
}


console.log("\n--- Câu 9: Duyệt thuộc tính sản phẩm đầu tiên bằng for...in ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

console.log("\n--- Câu 10: Tên các SP đang bán và còn hàng ---");

const sellingAndInStockNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log(sellingAndInStockNames);