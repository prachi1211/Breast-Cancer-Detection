$(document).ready(function () {
  // Init
  $('.image-section').hide();
  $('.loader').hide();
  $('#result').hide();

  // Upload Preview
  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#imageUpload").change(function () {
      $('.image-section').show();
      $('#btn-predict').show();
      $('#result').text('');
      $('#result').hide();
      readURL(this);
  });

  // Predict
  $('#btn-predict').click(function () {
      var form_data = new FormData($('#upload-file')[0]);

      // Show loading animation
      $(this).hide();
      $('.loader').show();

      // Make prediction by calling api /predict
      $.ajax({
          type: 'POST',
          url: '/predict',
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          async: true,
          success: function (data) {
              // Get and display the result
              $('.loader').hide();
              $('#result').fadeIn(600);
              $('#result').text(' Result:  ' + data);
              console.log('Success!');
          },
      });

      a=String(document.getElementById("name").value);
      b=Number(document.getElementById("age").value); 
      c=String(document.getElementById("gender").value); 
      d=Number(document.getElementById("number").value);
  
      document.getElementById('data1').innerHTML = " Name:-"+a;       
      document.getElementById('data2').innerHTML = " Age:-"+b;
      document.getElementById('data3').innerHTML = " Gender:-"+c;
      document.getElementById('data4').innerHTML = "Contact no.:-"+d;
      

      if(document.getElementById('Yes1').checked){document.getElementById("result1").innerHTML 
              = "5% to 10% breast cancer is sometime depends upon a genes passed from perents to children."; }
      if(document.getElementById('Yes2').checked){document.getElementById("result2").innerHTML 
              = "Research has indiccate that habit of alchohole or tobacco contain toxins which raises chances to breast cancer."; }
      if(document.getElementById('Yes3').checked){document.getElementById("result3").innerHTML 
              = "Women who begin their periods before age 11 have about a 15-20 percent higher breast cancer risk compared to those who begin their periods at age 15 or older.";}
      if(document.getElementById('Yes4').checked){document.getElementById("result4").innerHTML 
              = "Naturally occurring estrogen and progesterone stimulate the development and growth of some cancers.Because birth control pills contain synthetic versions of these female hormones, they could potentially also increase cancer risk.";}
      if(document.getElementById('Yes5').checked){document.getElementById("result5").innerHTML 
              = "Women who give birth for the first time after age 35 are about 40 percent more likely to get breast cancer than women who have their first child before age 20.";}
      if(document.getElementById('Yes6').checked){document.getElementById("result6").innerHTML 
              = "Menopause after 52 does not cause cancer. But your risk of developing cancer increases as you age. So women going through menopause have a greater chance of developing cancer because they’re older.";}

  });

});