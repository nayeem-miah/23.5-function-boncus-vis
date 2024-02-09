const student ={
    name :  'Sakib Khan',
    id: 121,
    address : 'movie cinema',
    isSingle : true,
    friends: [ 'apu ', 'raj ', 'Salman','amir'],
    movies:[{name: 'no 1',year : 2015}, { name : 'king Khan', year: 2018}],
    act: function(){
        console.log('acting like is best')
    },
    car:{
        brand : 'tesla',
        price: 50000000,
        made: 2015,
        manufacturer:{
            name:'tasla',
            ceo : 'Elon Mask',
        }
    }
}
console.log(student);
console.log(student.car.manufacturer.ceo);