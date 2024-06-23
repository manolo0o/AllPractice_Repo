//________________________________PRODUCTS_________________________________

import { 
getAllProductsDescription , 
allProductsWithLineProduct__Description,
allProductsInStock,
avgBuyPrice,
priceOf__All_Products,
avg__SuggestPrices,
totalquantityOfproductsOrderedByClient,
} 
from "./module/product.js";
//console.log(await allProductsWithLineProduct__Description({}));

//________________________________PRODUCTS_________________________________

import { 
productsInStock__AVG__By_lineProduct,
getAllSelledProductsBy__lineProduct,
AVGpriceOfProductsBy__lineProduct,
GET_AVGbuyPriceBy__lineProducts
} 
    from "./module/productlines.js";
    //console.log(await GET_AVGbuyPriceBy__lineProducts({}));
//________________________________EMPLOYEES__________________________________

import { 
getAll__employeesFrom_SanFrancisco,
allAdressandEmailsFromEmployees1143,
numberOf__Employees,
numberOfemployeesBy__tittleJob,
salesAVG__ByEmployees,
productQuantitySoldBy__Employeee
} 
from "./module/employees.js"
//console.log(await allAdressandEmailsFromEmployees1143({}))


//________________________________ORDERS___________________________________

import { 
shipepd__Orders,
ordersMadeByFrenchClients,
SUMpayments__AmountsByClients,
suggestOrdersBy__Employees,
GETavgOrdersByClients,
GetTotalSalesBy__Country
}
from "./module/orders.js"
//console.log(await ordersMadeByFrenchClients({}))

//________________________________PAYMENTS___________________________________

import { 
paymentDetails__From__Client103,
totalPaymentsReceived,
totalPaymentsFromClients,
totalPayentsByCountries,
GET__totalPaymentsBy__Employeee,
GET__paymentsMadeBy__YEAR
}
from "./module/payments.js"
//console.log(await paymentDetails__From__Client103({}))

//________________________________CUSTOMERS___________________________________

import { 
clientsFrom__USA__WhereLC50000,
totalAmountFromPaymentsForClient,
limitCreditAVGofEveryClient,
limitCredit__AVG__forCountry,
allOrdersRealizedByEvery__Client,
GET___AVGlimitCreditBy__sellMan,
GET__AVGproductsBy_Clients
}
from "./module/customers.js"
//console.log(await clientsFrom__USA__WhereLC50000({}))

//________________________________OFFICES___________________________________

import { 
officesPerCountry,
amountOf__OfficesBy__Country,
GET___totalSalesBy___Offices
}
from "./module/offices.js"
//console.log(await officesPerCountry ({}))

//________________________________ORDER_DETAILS___________________________________

import { 
orderDetailsFromclient101,
avg__ProductsQuantityOrdered,
}
from "./module/orderdetails.js"
//console.log(await orderDetailsFromclient101 ({}))


/* export const  = async()=>{
    let[result] = await connection.query(``)
    return result;
} */