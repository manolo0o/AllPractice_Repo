import { connection } from "../../db/connection.js";

// Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:
export const clientsFrom__USA__WhereLC50000 = async()=>{
    let[result] = await connection.query(`SELECT * FROM customers WHERE country = 'USA' AND creditLimit> '50000'`)
    return result;
} 
