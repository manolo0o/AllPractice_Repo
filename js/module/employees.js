import { connection } from "../../db/connection.js";


//__________________________________________________________________________________________________

//Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':
export const getAll__employeesFrom_SanFrancisco = async()=>{
    let[result] = await connection.query(`
    SELECT lastName, firstName, officeCode 
    FROM employees 
    WHERE officeCode = '1'`)
    return result;
}

//__________________________________________________________________________________________________

//2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

export const allAdressandEmailsFromEmployees1143 = async()=>{
    let[result] = await connection.query(`
    SELECT
    firstName, lastName, email
    FROM employees
    WHERE reportsTo = 1143`)
    return result;
}

//__________________________________________________________________________________________________

//6. **Obtener la cantidad total de empleados:**

export const numberOf__Employees = async()=>{
    let[result] = await connection.query(`
    SELECT COUNT(employeeNumber)
    AS total_employees
    FROM employees`)
    return result;
}

//__________________________________________________________________________________________________

//10. **Contar la cantidad de empleados por título de trabajo:**

export const numberOfemployeesBy__tittleJob = async()=>{
    let[result] = await connection.query(`
    SELECT DISTINCT(jobTitle), COUNT(employeeNumber)
    FROM employees
    GROUP BY jobTitle`)
    return result;
} 

//__________________________________________________________________________________________________

//8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

export const salesAVG__ByEmployees = async()=>{
    let[result] = await connection.query(`
    SELECT customers.salesRepEmployeeNumber, 
    AVG(payments.amount) AS sell_avg
    FROM customers
    JOIN payments
    ON customers.customerNumber = payments.customerNumber
    GROUP BY customers.salesRepEmployeeNumber`)
    return result;
}

//__________________________________________________________________________________________________

//14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

export const productQuantitySoldBy__Employeee = async()=>{
    let[result] = await connection.query(`
    SELECT customers.salesRepEmployeeNumber AS EmployeeCode,
    COUNT(orders.orderNumber) AS totalSales
    FROM customers
    INNER JOIN orders
    ON customers.customerNumber = orders.customerNumber
    GROUP BY customers.salesRepEmployeeNumber`)
    return result;
}

//__________________________________________________________________________________________________
