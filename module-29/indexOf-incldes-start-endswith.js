const products = ['dell laptop', 'asus vivobook Laptop', 'Lenavo laptop', 'dell pro Laptop', 'Dell go  laptop', 'vivo Phone', 'samsung phone', 'iphoe watch'];

let search = 'laptop'; //jayy hatu ay valu poriboton hobay tia let diay si////
const output = [];

//index of

//jahatu aysob gulo holo kay sensaytive tai sokol value kay lowercase ay noua hoay say 
//amra jani jay kono akta value jodi kono array ar modday na thakay taholay tar index numbaer hoi [-1] tai condition  ay jay haytu indexOf chak kory tai [-1] babo ahr kora hoay say////////////////
for (const product of products) {
    if (product.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        output.push(product);
    }
}
console.log(output);

//includes

let phoneProduct = 'phone';
const grtPhone = [];

//ay ta anak ta index of ar moto tobaby aytai kono para meter dity hoy na 

for (const product of products) {
    if (product.toLowerCase().includes(phoneProduct.toLowerCase())) {
        grtPhone.push(product);
    }
}
console.log(grtPhone);

//startswith

//amra jodi chai koi ta element dell diay suru hoya say say gulo dkaty taholay amra [ sratswith]baohar korbo

let startProduct = "dell";
const getstartProduct = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(startProduct.toLowerCase())) {
        getstartProduct.push(product);
    }
}
console.log(getstartProduct);

//endswith

//amra jodi chai koi ta element  laptop  diay sas hoya say say gulo dkaty taholay amra [ endswith]baohar korbo

let endProduct = "laptop";
const getendProduct = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(endProduct.toLowerCase())) {
        getendProduct.push(product);
    }
}
console.log(getendProduct);