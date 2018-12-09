 var Product =require('../models/product');
var mongoose =require('mongoose');
try {
    mongoose.connect('mongodb://localhost:27017/shopping' , {useNewUrlParser: true });    
} catch (error) {
    console.log(error);
}


var products =[
    new Product({
        imagePath:'https://www.jquery-az.com/html/images/banana.jpg',
        title:'kya game hai maze aagye',
        description:"This is my first description",
        price:10
    }),
    new Product({
        imagePath:'https://www.jquery-az.com/html/images/banana.jpg',
        title:'Gothic video Game',
        description:"This is my second description",
        price:20
    }),
    new Product({
        imagePath:'http://tineye.com/images/widgets/mona.jpg',
        title:'Kaun banega karorepati',
        description:"This is my third description",
        price:30
    }),
    new Product({
        imagePath:'https://www.jquery-az.com/html/images/banana.jpg',
        title:'Jungle game of dianausours',
        description:"This is my forth description",
        price:40
    }),
    new Product({
        imagePath:'http://tineye.com/images/widgets/mona.jpg',
        title:'The legends of Himalayas',
        description:"This is my fifth description",
        price:50
    }),
    new Product({
        imagePath:'https://www.jquery-az.com/html/images/strawberries.jpg',
        title:'Ganpti g the legends of gteh world',
        description:"This is my sixth description",
        price:60
    })
];
var done=0; 
for(var i=0;i<products.length;i++)
{

    try {
    products[i].save(function(err,result){
        done++; 
        if(done === products.length)
        {
            
        console.log(" products.length = ",products.length);
          exit();
         }
    });
        
} catch (error) {
 console.log("  error ",error)  ;     
}

}
function exit(){
    mongoose.disconnect();
}