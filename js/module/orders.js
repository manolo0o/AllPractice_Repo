import { connection } from "../../db/connection.js";

// Listar todas las órdenes que tienen un estado de 'Enviado':
export const shipepd__Orders = async()=>{
    let[result] = await connection.query(`SELECT orderNumber, status FROM orders WHERE status= 'shipped'`)
    return result;
}


