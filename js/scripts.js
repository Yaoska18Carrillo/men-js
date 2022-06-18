const estructuras=[
    //Postres
    {
    id:0,title:'Helado Fresa',
    category:'Postre',
    price:5.99,
    img: './img/hFresa.jpg',
    desc:'Disfruta de este delicioso helado hecho con las mejores fresas del pais.'
    },
    {id:1,
        title:'Helado Chocolate',
        category: "Postre",
        price:3000,
        img: './img/hChocolate.jpg',
        desc:'Disfruta de este delicioso helado hecho con el mejor cacao del pais.'
    },
    {    id:2,
        title:'Helado Mango',
        category:'Postre',
        price:1700,
        img: './img/hMango.jpg',
        desc:'Ven a deleitarte con nuestro rico postre casero con helado de mango'
    },
    {   id:3,
        title:'Helado Crepa',
        category:'Postre',
        price:3200,
        img: './img/hCrepa.jpg',
        desc:'Disfruta de esta deliciosa crepa rellena de helado y tus frutas favoritas.'
    },
    {id:4,
        title:'Helado Tamarindo',
        category:'Postre',
        price:2300,
        img: './img/hTamarindo.jpg',
        desc:'Disfruta de este delicioso helado casero de tamarindo escarchamos el recipiente con chile.'
    },
    {id:5,
        title:'Helado Vainilla',
        category:'Postre',
        price:2500,
        img: './img/hVainilla.jpg',
        desc:'Helado de vainilla un clasico tiene que venir a degustar de este rico helado.'
    } ,
    //bebeidas
    {id:6,
        title:'JackDaniels',
        category:'Bebidas',
        price:5000,
        img: './img/jackdaniels.jpg',
        desc:'shot de licor jackdaniels por solo 5mil.'
    },
    {id:7,
        title:'Bacardi',
        category:'Bebidas',
        price:4000,
        img: './img/bacardi.jpg',
        desc:'Disfruta de este exquisito shot de bacardi.'
    },
    {id:8,
        title:'Cacique',
        category:'Bebidas',
        price:3000,
        img: './img/cacique.jpg',
        desc:'Disfruta de este delicioso licor cacique lo podes acompañar con limón y sal y sus nuevos sabores estan disponibles en nuestro bar.'
    },
    {id:9,
        title:'Jaeger',
        category:'Bebidas',
        price:2850,
        img: './img/jaeger.jpg',
        desc:'Disfruta del famoso licor Jaeger a un precio expectacular.'
    },
    {id:10,
        title:'Flor de Caña',
        category:'Bebidas',
        price:3000,
        img: './img/flordecana.jpg',
        desc:'Disfruta de este delicioso ron.'
    },
    {id:11,
        title:'Cortez',
        category:'Bebidas',
        price:3900,
        img: './img/cortez.jpg',
        desc:'Disfruta de este delicioso licor.'
    },
    //almuerzos
    {id:12,
        title:'Arroz Con Pollo',
        category:'Almuerzos',
        price:3500,
        img: './img/arrozconpollo.jpg',
        desc:'Vení a disfrutar de nuestro rico plato de arroz con pollo tenemos el mejor sazon de heredia, incluimos un juguito de frutas natural .'
    },
    {id:13,
        title:'Arroz Cantones',
        category:'Almuerzos',
        price:3450,
        img: './img/cantones.jpg',
        desc:'Disfruta de este delicioso plato de arroz cantones preparado con un toque costarricense , incluimos un juguito de frutas natural.'
    },
    {id:14,
        title:'Chifijro',
        category:'Almuerzos',
        price:3000,
        img: './img/chifrijo.jpg',
        desc:'Disfruta de este delicioso chifrijo típico platillo tico, incluimos un juguito de frutas natural'
    },
    {id:15,
        title:'Lentejas',
        category:'Almuerzos',
        price:3600,
        img: './img/lentejas.jpg',
        desc:'Disfruta de estas ricas lentejas con nuestro ingrediente que las diferencia, una pizca de chile, incluimos un juguito de frutas natural.'
    },
    {id:16,
        title:'Fajitas de Carne',
        category:'Almuerzos',
        price:3700,
        img: './img/fajitasdecarne.jpg',
        desc:'Fajitas de res para almorzar, una de las mejores obciones lo puedes acompañar con arrocito , incluimos un juguito de frutas natural.'
    },
    {id:17,
        title:'Gallo pinto',
        category:'Almuerzos',
        price:3560,
        img: './img/gallopinto.jpg',
        desc:'Nuestro platillo tipico más delicioso normalmente va en el desayuno pero quien le diría que no en un almuerzo, incluimos un juguito de frutas natural'
    },
    //cena
    {id:18,
        title:'Pasta Boloñesa',
        category:'Cena',
        price:5000,
        img: './img/bolonesa.webp',
        desc:'Unos ricos macarrones a la boloñesa con bastante salsa y queso un delicia total, incluimos un juguito de frutas natural o gaseosa.'
    },
    {id:19,
        title:'Chop Suey',
        category:'Cena',
        price:4300,
        img: './img/chopsuey.jpg',
        desc:'Disfruta de este delicioso chop suey preparado al estilo costarricense, incluimos un juguito de frutas natural o gaseosa.'
    },
    {id:20,
        title:'Pollo Asado',
        category:'Cena',
        price:3000,
        img: './img/polloasado.webp',
        desc:'Disfruta de este delicioso pollo asado dicen por ahí que es más saludable, incluimos un juguito de frutas natural o gaseosa.'
    },
    {id:21,
        title:'Bistec Encebollado',
        category:'Cena',
        price:3000,
        img: './img/bistecencebollado.jpg',
        desc:'Bistec encebollado con nuestra famosa salsa nacional Salsa Lizano, un sabor único incluimos un juguito de frutas natural o gaseosa.'
    },
    {id:22,
        title:'Pollo en Salsa Blanca',
        category:'Cena',
        price:3000,
        img: './img/polloensalsablanca.webp',
        desc:'Disfruta de este delicioso pollito en salsa blanca con una salsa muy cremosita y bien hecha incluimos un juguito de frutas natural o gaseosa.'
    },
    {id:23,
        title:'Barbacoa',
        category:'Cena',
        price:3000,
        img: './img/barbacoa.jpg',
        desc:'Disfruta de este deliciosas costillitas a la barbacoa no podrían faltar estas exquisitas recetas incluimos un juguito de frutas natural o gaseosa.'
    }//bebidas,almuerzos,postres,cena
];
//crear funcion y card
function All (){

    let all=estructuras.map(function (he)
        {  
        return '<div class= row>'
            +'<img src= '+he.img+'>'
            +'<div class= columna>'
            +'<h2>' + he.title+ ' &nbsp<span > $'+he.price+'  </span>'+'</h2>'
            +'<hr >' 
            +'<br>' 
            +'<p >'+he.desc+'</p>'
                
              +'</div>'
              +'</div>'  
         }).join('');
       
        document.getElementById("main").innerHTML= JSON.stringify(all);         
    }
    //funcion almuerzos
   function Almuerzo (){
    let almuerzos=estructuras.map(function(he)
      {  
          if (he.category==='Almuerzos'){
           return'<div class= row>'
            +'<img src= '+he.img+'>'
            +'<div class= columna>'
            +'<h2>' + he.title+ ' &nbsp<span > $ '+he.price+'  </span>'+'</h2>'
            +'<hr >'
            +'<br>' 
            +'<p >'+he.desc+'</p>'
                
              +'</div>'
              +'</div>'
          }
          
      }).join('');
    document.getElementById("main").innerHTML= JSON.stringify(almuerzos);
  
     }
     //bebidas
     function Bebidas(){
  
        let bebidas=estructuras.map(function(he)
          {  
              if (he.category==='Bebidas'){
               return'<div class= row>'
                +'<img src= '+he.img+'>'
                +'<div class= columna>'
                +'<h2>' + he.title+ ' &nbsp<span > $ '+he.price+'  </span>'+'</h2>'
                +'<hr >'
                +'<br>' 
                +'<p >'+he.desc+'</p>'
                    
                  +'</div>'
                  +'</div>'
              }
              
          }).join('');
     document.getElementById("main").innerHTML= JSON.stringify(bebidas);
      
         }

         //funcion postre
         function Postre(){
 
            let postre=estructuras.map(function(he)
              {  
                  if (he.category==='Postre'){
                   return'<div class= row>'
                    +'<img src= '+he.img+'>'
                    +'<div class= columna>'
                    +'<h2>' + he.title+ ' &nbsp<span > $ '+he.price+'  </span>'+'</h2>'
                    +'<hr >'
                    +'<br>' 
                    +'<p >'+he.desc+'</p>'
                        
                      +'</div>'
                      +'</div>'
                  }
                  
              }).join('');
           document.getElementById("main").innerHTML= JSON.stringify(postre);
          
             }
            
    //fuction cena
    function Cena(){
        let cena=estructuras.map(function(he)
          {  
              if (he.category==='Cena'){
               return'<div class= row>'
                +'<img src= '+he.img+'>'
                +'<div class= columna>'
                +'<h2>' + he.title+ ' &nbsp<span > $ '+he.price+'  </span>'+'</h2>'
                +'<hr >'
                +'<br>' 
                +'<p >'+he.desc+'</p>'
                  +'</div>'
                  +'</div>'
              }
              
          }).join(' ');
          console.log(cena);
              
          document.getElementById("main").innerHTML= JSON.stringify(cena);
      
        }

