import { connection } from "../../db/connection.js";


//__________________________________________________________________________________________________

// 5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

export const orderDetailsFromclient101 = async()=>{
    let[result] = await connection.query(`
    SELECT customers.customerNumber, orders.orderNumber, 
    orderdetails.quantityOrdered, orderdetails.priceEach, products.productName 
    FROM customers 
    JOIN orders ON customers.customerNumber = orders.customerNumber 
    JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber 
    JOIN products ON orderdetails.productCode = products.productCode 
    WHERE customers.customerNumber = 484`)
    return result;
}

//__________________________________________________________________________________________________


//7. **Calcular la cantidad media de productos pedidos en las órdenes:**

export const avg__ProductsQuantityOrdered = async()=>{
    let[result] = await connection.query(`
    SELECT AVG(quantityOrdered)
    AS avg_productsOrdered
    FROM orderdetails`)
    return result;
}

//__________________________________________________________________________________________________
