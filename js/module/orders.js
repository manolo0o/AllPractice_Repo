import { connection } from "../../db/connection.js";

//__________________________________________________________________________________________________

// Listar todas las órdenes que tienen un estado de 'Enviado':
export const shipepd__Orders = async()=>{
    let[result] = await connection.query(`
    SELECT orderNumber, status 
    FROM orders 
    WHERE status= 'shipped'`)
    return result;
}

//__________________________________________________________________________________________________

// 3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

export const ordersMadeByFrenchClients = async()=>{
    let[result] = await connection.query(`
    SELECT orderNumber, customerNumber
    FROM orders 
    INNER JOIN customers 
    USING(customerNumber)
    WHERE country = 'France'`)
    return result;
}

//__________________________________________________________________________________________________

//3. **Calcular el total de órdenes realizadas por cada cliente:**

export const allOrdersRealizedByEvery__Client = async()=>{
    let[result] = await connection.query(`
    SELECT customers.customerNumber, COUNT(orders.orderNumber)
    FROM customers
    JOIN orders ON customers.customerNumber = orders.customerNumber
    GROUP BY customers.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________

// 5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

export const SUMpayments__AmountsByClients = async()=>{
    let[result] = await connection.query(`
    SELECT 
    customers.customerNumber, 
    MIN(orderdetails.quantityOrdered) AS quantity_ordered,
    SUM(payments.amount) AS total_amount
    FROM customers
    JOIN orders 
    ON customers.customerNumber = orders.customerNumber
    JOIN orderdetails 
    ON orders.orderNumber = orderdetails.orderNumber
    JOIN payments 
    ON customers.customerNumber = payments.customerNumber
    GROUP BY customers.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________

// 9. **Calcular el total de órdenes gestionadas por cada empleado:**

export const suggestOrdersBy__Employees = async()=>{
    let[result] = await connection.query(`
    SELECT customers.salesRepEmployeeNumber, 
    COUNT(orders.orderNumber) AS suggestOrdersByemployee 
    FROM customers
    JOIN orders 
    ON customers.customerNumber = orders.customerNumber
    GROUP BY customers.salesRepEmployeeNumber`)
    return result;
}

//__________________________________________________________________________________________________

// 11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

export const GETavgOrdersByClients = async()=>{
    let[result] = await connection.query(`
    SELECT customers.customerNumber, 
    AVG(orderdetails.quantityOrdered) AS avgOrdersByClients
    FROM customers 
    INNER JOIN orders 
    ON customers.customerNumber = orders.customerNumber
    INNER JOIN orderdetails
    ON orders.orderNumber = orderdetails.orderNumber
    GROUP BY customers.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________


//12. **Calcular el total de ventas realizadas en cada país:**

export const GetTotalSalesBy__Country = async()=>{
    let[result] = await connection.query(`
    SELECT 
    customers.country AS country, 
    COUNT(orders.orderNumber) AS countryOrders
    FROM customers
    INNER JOIN orders
    ON customers.customerNumber = orders.customerNumber 
    GROUP BY customers.country`)
    return result;
} 

//__________________________________________________________________________________________________

