$(document).ready(function() {
  var products = [];
  console.log(products);

  function writeDOM() {
      window.addEventListener("click", function() {
          var fireworks = $('.fireworks');
          if (event.target.id === 'fireworks') {
              alert("I selected fireworks");
              $.each(products, function(index, value){
              	console.log(index);
              	console.log(value);
              	if(value.name === "Fireworks" && value.id === value.category){
              		alert("Hello there!");
              	}
              })

          } else {
              alert("I selected demolition");
          }
      });
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
		console.log(data);
		data.forEach(function(category){
			products.push(category);
		})
			return typesJSON();
		}).then(function(data2){
			console.log(data2);
			data2.forEach(function(type){
				products.push(type);
			})
			return productsJSON();
		}).then(function(data3){
			console.log(data3);
			data3.forEach(function(product){
				products.push(product);
			})
			writeDOM();
		});
	



























































	});
