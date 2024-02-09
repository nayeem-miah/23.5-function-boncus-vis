const numbers= [ 12,34,67,54,32];
// for ( let i=0; i<numbers.length;i++){
    // const number=numbers[i];
//     console.log(number);
// }

for ( const number of numbers){  //for of loop
    // console.log(number);
}

const  products=[
    {id : 1, name : ' ximoi phone one night ', price: 19000},
    {id : 2, name : ' i phone  ', price: 19000},
    {id : 3, name : ' mac book air  ', price: 19000},
    {id : 4, name : ' lenovo yoga laptop 2025 ', price: 19000},
    {id : 5, name : ' dell inspiron lapTOP ', price: 19000},
    {id : 5, name : ' samsung phone note 7 ', price: 19000},
    {id : 6, name : ' nokia old age phone ', price: 19000},
    {id : 7, name : ' Phone one ', price: 19000}
   
];
for ( const product of products){
    console.log( product);
}


function matchProducts(products, search){
    let matched=[];
    for( const product of products){
        // console.log(product.name.includes(search));
        if( product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products,' laptop');
console.log( result);
