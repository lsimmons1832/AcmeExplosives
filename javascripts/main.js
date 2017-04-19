$(document).ready(function() {
  var products = [];
  var category = [];

  function whichCategory() {
      $('nav').on("click", function() {

          if (event.target.id === 'Fireworks') {
          	$.each(products, function(i, val){
              alert("I selected fireworks");
              category.push(val);
              });
          	console.log(category);
              writeFireworks();
          } else if (event.target.id === "Demolition"){
              alert("I selected demolition");
              writeDemolition();
          }
      });
  }

function writeFireworks(){
  console.log("products",products);
    $.each(products, function(key, value){
    if(value.grouping === "type"){
    	console.log("I'm in!")
       $(".container").append(`<div><h1>${value.name}</h1><p>${value.description}</p></div>`); 
    }
  })
}

function writeDemolition(){

}

  var categoriesJSON = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/categories.json").done(function(data1) {
              resolve(data1.categories);
          }).fail(function(error1) {
              reject(error1);
          })
      })
  };

  var typesJSON = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/types.json").done(function(data2) {
              resolve(data2.types);
          }).fail(function(error2) {
              reject(error2);
          })
      })
  };

  var productsJSON = function() {
      return new Promise(function(resolve, reject) {
          $.ajax("./db/products.json").done(function(data3) {
              resolve(data3.products);
          }).fail(function(error3) {
              reject(error3);
          })
      })
  };



	categoriesJSON().then(function(data){
		// console.log(data);
		data.forEach(function(category){
			products.push(category);
			category.grouping = "category";
		})
			return typesJSON();
		}).then(function(data2){
			// console.log(data2);
			data2.forEach(function(type){
				products.push(type);
				type.grouping = "type";
			})
			return productsJSON();
		}).then(function(data3){
			// console.log(data3);
			data3.forEach(function(product){
				for(var key in product){
					if (product.hasOwnProperty(key)) {
				products.push(product[key]);
				product[key].grouping = "product";
				}
			}
		})
		whichCategory();
	});
	



























































	});
