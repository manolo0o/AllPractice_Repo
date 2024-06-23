import { connection } from "../../db/connection.js";

//__________________________________________________________________________________________________

//4. **Contar la cantidad de oficinas en cada país:**

export const officesPerCountry = async()=>{
    let[result] = await connection.query(`
    SELECT DISTINCT(country), 
    COUNT(officeCode) 
    FROM offices 
    GROUP BY country`)
    return result;
}

//__________________________________________________________________________________________________

//4. **Contar la cantidad de oficinas en cada país:**

export const amountOf__OfficesBy__Country = async()=>{
    let[result] = await connection.query(`
    SELECT DISTINCT(country), COUNT(officeCode) 
    FROM offices 
    GROUP BY country`)
    return result;
}

//__________________________________________________________________________________________________

// 17. **Encontrar el total de ventas realizadas por cada oficina:**

export const GET___totalSalesBy___Offices  = async()=>{
    let[result] = await connection.query(`
    SELECT employees.officeCode AS officeCode, 
    COUNT(payments.paymentDate) AS totalSales
    FROM employees
    INNER JOIN customers 
    ON employees.employeeNumber = customers.salesRepEmployeeNumber
    INNER JOIN payments
    ON customers.customerNumber = payments.customerNumber
    GROUP BY employees.officeCode`)
    return result;
}

//__________________________________________________________________________________________________
