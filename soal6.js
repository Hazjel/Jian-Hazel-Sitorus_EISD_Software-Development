console.log("Menu Jomok Fried Chicken");
console.log("Makanan:");
console.log("1. Ayam Goreng Krispi - Rp 15000");
console.log("2. Ayam Puk Puk - Rp 13000");
console.log("3. Ayam Bakar - Rp 20000");
console.log("Minuman:");
console.log("1. Es Teh - Rp 5000");
console.log("2. Es Jeruk - Rp 7000");
console.log("===================================");

let menu = {
    1: { name: "Ayam Goreng Krispi", type: "makanan", price: 15000 },
    2: { name: "Ayam Puk Puk", type: "makanan", price: 13000 },
    3: { name: "Ayam Bakar", type: "makanan", price: 20000 },
    4: { name: "Es Teh", type: "minuman", price: 5000 },
    5: { name: "Es Jeruk", type: "minuman", price: 7000 },
}

function countTax(price, type) {
    let taxRate = 0;

    if (type === "makanan") {
        taxRate = 0.05; // 5% pajak untuk makanan
    } else if (type === "minuman") {
        taxRate = 0.03; // 3% pajak untuk minuman
    }

    return price + (price * taxRate);
}

function processOrder(orderInput) {
    let total = 0;
    let orderItems = orderInput.split(",");
    let itemDetail;
    let priceWithTax;

    for (let i = 0; i < orderItems.length; i++) {
        let item = parseInt(orderItems[i]);
        

        if (item === 1) {
            itemDetail = menu[1];
            priceWithTax = countTax(itemDetail.price, itemDetail.type);
        } else if (item === 2) {
            itemDetail = menu[2];
            priceWithTax = countTax(itemDetail.price, itemDetail.type);
        } else if (item === 3) {
            itemDetail = menu[3];
            priceWithTax = countTax(itemDetail.price, itemDetail.type);
        } else if (item === 4) {
            itemDetail = menu[4];
            priceWithTax = countTax(itemDetail.price, itemDetail.type);
        } else if (item === 5) {
            itemDetail = menu[5];
            priceWithTax = countTax(itemDetail.price, itemDetail.type);
        } else {
            console.log("Menu tidak tersedia");
            break;
        }

        total += priceWithTax;
    }

    return total + (total * 0.15); // 15% pajak untuk total pesanan 
}

console.log("Total biaya pesanan Rehan Wangsap adalah: Rp " + processOrder("3,3,4"));
console.log("Total biaya pesanan Amba Roni adalah: Rp " + processOrder("2,4,4,4"));
console.log("Total biaya pesanan Pais Ngawi adalah: Rp " + processOrder("1,2,3,4,5"));