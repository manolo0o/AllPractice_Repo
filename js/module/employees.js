import { connection } from "../../db/connection.js";

//Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':
export const getAll__employeesFrom_SanFrancisco = async()=>{
    let[result] = await connection.query(`SELECT lastName, firstName, officeCode FROM employees WHERE officeCode = '1'`)
    return result;
}