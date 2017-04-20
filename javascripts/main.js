$(document).ready(function() {
  var myproducts = [];
  var myProductTypes = [];
  console.log("products", myproducts);
  console.log("productTypes", myProductTypes);

  function whichCategory() {
      $('nav').on("click", function() {

          if (event.target.id === 'Fireworks') {
          	alert("I selected fireworks");
              writeFireworks();
              } else if (event.target.id === "Demolition"){
              alert("I selected demolition");
              writeDemolition();
          } 

      });
  }

function writeFireworks(){
    for(var key in myProductTypes){
      if(myProductTypes.hasOwnProperty(key)){
        console.log(myProductTypes);
      }
    }
  //   if(value.category === value.id){
  //   	console.log("I made it past if!")
  //      $(".container").append(`<div><h1>${value.name}</h1><p>${value.description}</p></div>`); 
  //   }
  // })
}

function writeDemolition(){

}

  var loadCategories = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/categories.json").done(function(data1) {
              resolve(data1.categories);
          }).fail(function(error1) {
              reject(error1);
          })
      })
  };

  var loadTypes = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/types.json").done(function(data2) {
              resolve(data2.types);
          }).fail(function(error2) {
              reject(error2);
          })
      })
  };

  var loadProducts = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/products.json").done(function(data3) {
              resolve(data3.products);
          }).fail(function(error3) {
              reject(error3);
          })
      })
  };

  loadProducts().then(function (products){
    products.forEach(function(products){
       for(var key in products){
         if (products.hasOwnProperty(key)) {
      myproducts.push(products[key]);
      }
    }
  });
    whichCategory();
});

  Promise.all([loadCategories(), loadTypes()])
    .then(function(data){
      data.forEach(function(dataLoad){
        dataLoad.forEach(function(productTypes){
          myProductTypes.push(productTypes)
        });
      });
    });
	// categoriesJSON().then(function(data){
	// 	// console.log(data);
	// 	data.forEach(function(category){
	// 		products.push(category);
	// 		category.grouping = "category";
	// 	})
	// 		return typesJSON();
	// 	}).then(function(data2){
	// 		// console.log(data2);
	// 		data2.forEach(function(type){
	// 			products.push(type);
	// 			type.grouping = "type";
	// 		})
	// 		return productsJSON();
	// 	}).then(function(data3){
	// 		// console.log(data3);
	// 		data3.forEach(function(product){
	// 			for(var key in product){
	// 				if (product.hasOwnProperty(key)) {
	// 			products.push(product[key]);
	// 			product[key].grouping = "product";
	// 			}
	// 		}
	// 	})
	// 	whichCategory();
	// });
	



























































	});
