import { connection } from "../../db/connection.js";


//__________________________________________________________________________________________________

// Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:
export const clientsFrom__USA__WhereLC50000 = async()=>{
    let[result] = await connection.query(`
    SELECT * 
    FROM customers 
    WHERE country = 'USA' 
    AND creditLimit> '50000'`)
    return result;
} 

//__________________________________________________________________________________________________

//4. **Listar el monto total de los pagos recibidos de cada cliente:**

export const totalAmountFromPaymentsForClient = async()=>{
    let[result] = await connection.query(`
    SELECT c.customerNumber, SUM(p.amount) AS total_payments
    FROM customers c
    JOIN payments p ON c.customerNumber = p.customerNumber
    GROUP BY c.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________

// 1. **Obtener el promedio del límite de crédito de todos los clientes:**

export const limitCreditAVGofEveryClient = async()=>{
    let[result] = await connection.query(`
    SELECT AVG(creditLimit) 
    AS average_creditLimit
    FROM customers`)
    return result;
}
//__________________________________________________________________________________________________

//2. **Obtener el promedio del límite de crédito de los clientes por país:**

export const limitCredit__AVG__forCountry = async()=>{
    let[result] = await connection.query(`
    SELECT country, AVG(creditLimit)
    FROM customers
    GROUP BY country`)
    return result;
}

//__________________________________________________________________________________________________

//16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

export const GET___AVGlimitCreditBy__sellMan = async()=>{
    let[result] = await connection.query(`
    SELECT 
    customers.salesRepEmployeeNumber AS employeeID, 
    MIN(customers.customerNumber) AS clientsID,
    AVG(customers.creditLimit) AS clientCreditLimit
    FROM customers
    GROUP BY customers.salesRepEmployeeNumber`)
    return result;
}

//__________________________________________________________________________________________________

//18. **Calcular la cantidad media de productos pedidos por cada cliente:**

export const GET__AVGproductsBy_Clients = async()=>{
    let[result] = await connection.query(`
    SELECT customers.customerNumber AS clientID,
    AVG(orderdetails.quantityOrdered) AS avgBuyItProducts
    FROM customers
    INNER JOIN orders
    ON customers.customerNumber = orders.customerNumber
    INNER JOIN orderdetails
    ON orders.orderNumber = orderdetails.orderNumber
    GROUP BY customers.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________
