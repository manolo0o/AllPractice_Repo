import { connection } from "../../db/connection.js";

//__________________________________________________________________________________________________

//Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:
export const paymentDetails__From__Client103 = async()=>{
    let[result] = await connection.query(`
    SELECT * 
    FROM payments
    WHERE customerNumber = '103'`)
    return result;
} 

//__________________________________________________________________________________________________

//5. **Calcular el total de pagos recibidos:**

export const totlaOf__Payments = async()=>{
    let[result] = await connection.query(`
    SELECT SUM(amount) 
    AS total_payments
    FROM payments`)
    return result;
}

//__________________________________________________________________________________________________

//5. **Calcular el total de pagos recibidos:**

export const totalPaymentsReceived = async()=>{
    let[result] = await connection.query(`
    SELECT SUM(amount) 
    AS total_payments
    FROM payments`)
    return result;
}

//__________________________________________________________________________________________________

//1. **Calcular el total de pagos recibidos por cada cliente:**

export const totalPaymentsFromClients = async()=>{
    let[result] = await connection.query(`
    SELECT customers.customerNumber, COUNT(payments.amount)
    FROM customers
    JOIN payments ON customers.customerNumber = payments.customerNumber
    GROUP BY customers.customerNumber`)
    return result;
}

//__________________________________________________________________________________________________

//7. **Calcular el total de pagos recibidos por cada país:**

export const totalPayentsByCountries = async()=>{
    let[result] = await connection.query(`
    SELECT 
    customers.country AS country, 
    COUNT(payments.amount) AS country_payments
    FROM customers
    JOIN payments
    ON customers.customerNumber = payments.customerNumber 
    GROUP BY customers.country`)
    return result;
}

//__________________________________________________________________________________________________

//15. **Calcular el total de pagos recibidos por cada vendedor:**

export const GET__totalPaymentsBy__Employeee = async()=>{
    let[result] = await connection.query(`
    SELECT customers.salesRepEmployeeNumber AS EmployeeCode,
    COUNT(payments.checkNumber) AS TotalPayments
    FROM customers
    INNER JOIN payments
    ON customers.customerNumber = payments.customerNumber
    GROUP BY customers.salesRepEmployeeNumber`)
    return result;
}

//__________________________________________________________________________________________________

// 19. **Obtener el total de pagos realizados en cada año:**

export const GET__paymentsMadeBy__YEAR = async()=>{
    let[result] = await connection.query(`
    SELECT YEAR(paymentDate) 
    AS anio, 
    SUM(amount) AS total_pagos
    FROM payments
    GROUP BY YEAR(paymentDate)`)
    return result;
}

//__________________________________________________________________________________________________

