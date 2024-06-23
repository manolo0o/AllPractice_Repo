import { connection } from "../../db/connection.js";

//__________________________________________________________________________________________________

// Recuperar todas las líneas de productos con sus descripciones
export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`
    SELECT productLine, productDescription 
    FROM products`);
    return result;
}

//__________________________________________________________________________________________________

//Listar todos los productos junto con las descripciones de sus líneas de productos:

export const allProductsWithLineProduct__Description = async()=>{
    let[result] = await connection.query(`
    SELECT 
    productCode,productName,textDescription
    FROM products t1
    INNER JOIN productlines t2 
    ON t1.productline = t2.productline`)
    return result;
}

//__________________________________________________________________________________________________

//2. **Calcular el total de productos en stock:**

export const allProductsInStock = async()=>{
    let[result] = await connection.query(`
    SELECT SUM(quantityInStock)
    AS totalStock
    FROM products`)
    return result;
}

//__________________________________________________________________________________________________

///3. **Encontrar el precio medio de compra de todos los productos:**

export const avgBuyPrice = async()=>{
    let[result] = await connection.query(`
    SELECT productName, AVG(buyPrice) AS avg_Price
    FROM products
    GROUP BY productName`)
    return result;
}

//__________________________________________________________________________________________________

//8. **Encontrar el precio total de todos los productos:**

export const priceOf__All_Products = async()=>{
    let[result] = await connection.query(`
    SELECT SUM(buyprice)
    AS totalPrices
    FROM products`)
    return result;
}

//__________________________________________________________________________________________________

//9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

export const avg__SuggestPrices = async()=>{
    let[result] = await connection.query(`
    SELECT AVG(MSRP) 
    AS avg_suggestPrices
    FROM products`)
    return result;
}

//__________________________________________________________________________________________________

//4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

export const  totalquantityOfproductsOrderedByClient = async()=>{
    let[result] = await connection.query(`
    SELECT orders.customerNumber, 
    COUNT(orderdetails.quantityOrdered) AS total_products 
    FROM orders 
    JOIN orderdetails 
    ON orders.orderNumber = orderdetails.orderNumber 
    GROUP BY orders.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________


