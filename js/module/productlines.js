import { connection } from "../../db/connection.js";

//__________________________________________________________________________________________________

//6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

export const productsInStock__AVG__By_lineProduct = async()=>{
    let[result] = await connection.query(`
    SELECT 
    AVG(products.quantityInStock) AS quiantity_avg, productlines.productLine
    FROM products
    JOIN productlines 
    ON products.productLine = productlines.productLine
    GROUP BY productlines.productLine`)
    return result;
}

//__________________________________________________________________________________________________

//10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

export const getAllSelledProductsBy__lineProduct = async()=>{
    let[result] = await connection.query(`
    SELECT products.productLine, 
    SUM(orderdetails.quantityOrdered) AS total
    FROM products 
    INNER JOIN orderdetails 
    ON products.productCode = orderdetails.productCode
    GROUP BY products.productLine`)
    return result;
}

//__________________________________________________________________________________________________

//13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

export const AVGpriceOfProductsBy__lineProduct = async()=>{
    let[result] = await connection.query(`
    SELECT products.productLine, 
    AVG(products.buyPrice) AS buyPrice
    FROM products
    GROUP BY products.productLine`)
    return result;
}

//__________________________________________________________________________________________________

//20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

export const GET_AVGbuyPriceBy__lineProducts = async()=>{
    let[result] = await connection.query(`
    SELECT p.productLine, AVG(od.priceEach) AS promedio_precio_venta
    FROM products p
    JOIN orderdetails od ON p.productCode = od.productCode
    GROUP BY p.productLine`)
    return result;
}