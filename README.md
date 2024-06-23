### Consultas de una sola tabla
PARTE 1/2

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   SELECT productLine, producttDescription
         FROM productlines;
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT
         lastName, firstName , officeCode
         FROM employees
         WHERE officeCode = '1';
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT
         orderNumber, status
         FROM orders
         WHERE status = 'Shipped';
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT *
         FROM payments
         WHERE customerNumber = '103';
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT *
         FROM customers
         WHERE country = 'USA' AND creditLimit> '50000';
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   SELECT 
         productCode,productName,textDescription
         FROM products t1
         INNER JOIN productlines t2 
         ON t1.productline = t2.productline;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT
         firstName, lastName, email
         FROM employees
         WHERE reportsTo = 1143;		
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT orderNumber, customerNumber
         FROM orders 
         INNER JOIN customers 
         USING(customerNumber)
         WHERE country = 'France';
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT c.customerNumber, SUM(p.amount) AS total_payments
      FROM customers c
      JOIN payments p ON c.customerNumber = p.customerNumber
      GROUP BY c.customerNumber;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
    SELECT customers.customerNumber, orders.orderNumber, 
    orderdetails.quantityOrdered, orderdetails.priceEach, products.productName 
      FROM customers 
      JOIN orders ON customers.customerNumber = orders.customerNumber 
      JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber 
      JOIN products ON orderdetails.productCode = products.productCode 
      WHERE customers.customerNumber = 484 ;
   ```

## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```sql
   SELECT AVG(creditLimit) 
      AS average_creditLimit
      FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock)
      AS totalStock
      FROM products;   
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```sql
   SELECT productName, AVG(buyPrice) AS avg_Price
      FROM products
      GROUP BY productName;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```sql
   SELECT DISTINCT(country), COUNT(officeCode) 
      FROM offices 
      GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```sql
   SELECT SUM(amount) 
      AS total_payments
      FROM payments;
   ```

6. **Obtener la cantidad total de empleados:**

   ```sql
   SELECT COUNT(employeeNumber)
      AS total_employees
      FROM employees;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```sql
   SELECT AVG(quantityOrdered)
      AS avg_productsOrdered
      FROM orderdetails;
   ```

8. **Encontrar el precio total de todos los productos:**

   ```sql
   SELECT SUM(buyprice)
      AS totalPrices
      FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```sql
   SELECT AVG(MSRP) 
      AS avg_suggestPrices
      FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```sql
SELECT DISTINCT(jobTitle), COUNT(employeeNumber)
   FROM employees
   GROUP BY jobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```sql  
   SELECT customers.customerNumber, COUNT(payments.amount)
      FROM customers
      JOIN payments ON customers.customerNumber = payments.customerNumber
      GROUP BY customers.customerNumber;
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```sql
   SELECT country, AVG(creditLimit)
      FROM customers
      GROUP BY country;
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```sql
   SELECT customers.customerNumber, COUNT(orders.orderNumber)
      FROM customers
      JOIN orders ON customers.customerNumber = orders.customerNumber
      GROUP BY customers.customerNumber;
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```sql
      SELECT orders.customerNumber, 
         COUNT(orderdetails.quantityOrdered) AS total_products 
      FROM orders 
      JOIN orderdetails 
      ON orders.orderNumber = orderdetails.orderNumber 
      GROUP BY orders.customerNumber;
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```sql
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
   GROUP BY customers.customerNumber;
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```sql
   SELECT 
   AVG(products.quantityInStock) AS quiantity_avg, productlines.productLine
   FROM products
   JOIN productlines 
   ON products.productLine = productlines.productLine
   GROUP BY productlines.productLine;
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```sql
   SELECT 
   customers.country AS country, 
   COUNT(payments.amount) AS country_payments
   FROM customers
   JOIN payments
   ON customers.customerNumber = payments.customerNumber 
   GROUP BY customers.country;
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```sql
   SELECT customers.salesRepEmployeeNumber, 
      AVG(payments.amount) AS sell_avg
      FROM customers
      JOIN payments
      ON customers.customerNumber = payments.customerNumber
      GROUP BY customers.salesRepEmployeeNumber
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```sql
      SELECT customers.salesRepEmployeeNumber, 
      COUNT(orders.orderNumber) AS suggestOrdersByemployee 
      FROM customers
      JOIN orders 
      ON customers.customerNumber = orders.customerNumber
      GROUP BY customers.salesRepEmployeeNumber;
   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    ```sql
      SELECT products.productLine, 
      SUM(orderdetails.quantityOrdered) AS total
      FROM products 
      INNER JOIN orderdetails 
      ON products.productCode = orderdetails.productCode
      GROUP BY products.productLine;
    ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```sql  
      SELECT customers.customerNumber, 
      AVG(orderdetails.quantityOrdered) AS avgOrdersByClients
      FROM customers 
      INNER JOIN orders 
      ON customers.customerNumber = orders.customerNumber
      INNER JOIN orderdetails
      ON orders.orderNumber = orderdetails.orderNumber
      GROUP BY customers.customerNumber;
    ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```sql
      SELECT 
      customers.country AS country, 
      COUNT(orders.orderNumber) AS countryOrders
      FROM customers
      INNER JOIN orders
      ON customers.customerNumber = orders.customerNumber 
      GROUP BY customers.country;
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```sql
      SELECT products.productLine, 
      AVG(products.buyPrice) AS buyPrice
      FROM products
      GROUP BY products.productLine; 
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```sql
      SELECT customers.salesRepEmployeeNumber AS EmployeeCode,
      COUNT(orders.orderNumber) AS totalSales
      FROM customers
      INNER JOIN orders
      ON customers.customerNumber = orders.customerNumber
      GROUP BY customers.salesRepEmployeeNumber;  
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```sql
      SELECT customers.salesRepEmployeeNumber AS EmployeeCode,
      COUNT(payments.checkNumber) AS TotalPayments
      FROM customers
      INNER JOIN payments
      ON customers.customerNumber = payments.customerNumber
      GROUP BY customers.salesRepEmployeeNumber;
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```sql
      SELECT 
      customers.salesRepEmployeeNumber AS employeeID, 
      MIN(customers.customerNumber) AS clientsID,
      AVG(customers.creditLimit) AS clientCreditLimit
      FROM customers
      GROUP BY customers.salesRepEmployeeNumber;  
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```sql
      SELECT employees.officeCode AS officeCode, 
      COUNT(payments.paymentDate) AS totalSales
      FROM employees
      INNER JOIN customers 
      ON employees.employeeNumber = customers.salesRepEmployeeNumber
      INNER JOIN payments
      ON customers.customerNumber = payments.customerNumber
      GROUP BY employees.officeCode;
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```sql
      SELECT customers.customerNumber AS clientID,
      AVG(orderdetails.quantityOrdered) AS avgBuyItProducts
      FROM customers
      INNER JOIN orders
      ON customers.customerNumber = orders.customerNumber
      INNER JOIN orderdetails
      ON orders.orderNumber = orderdetails.orderNumber
      GROUP BY customers.customerNumber;
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```sql
      SELECT YEAR(paymentDate) AS anio, SUM(amount) AS total_pagos
      FROM payments
      GROUP BY YEAR(paymentDate);
    ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

    ```sql
         SELECT p.productLine, AVG(od.priceEach) AS promedio_precio_venta
         FROM products p
         JOIN orderdetails od ON p.productCode = od.productCode
         GROUP BY p.productLine;
    ```