$(document).ready(function() {

  //
  //
  // $.ajax({
  //   type: 'GET',
  //   url: `http://192.168.33.10:3000/people`,
  //   dataType: 'json',
  //   success: function(maleData){
  //     console.log(maleData);
  //   },
  //   error: function (error) {
  //     console.log(error);
  //     console.log('something went wrong');
  //   }
  // });
  //
  //
  // $("#male").click(function(){
  //     $(".result").append(maleUrl)
  // });
  // $(".genderRadio").click(function(){
  //   const gender = $(this).val();
  //   console.log(gender);
  //   if (gender === 'Male') {
  //
  //   } else if (gender === 'Female') {
  //
  //   }
  // });
  //


//shorter

$(".genderRadio").click(function(){
  const gender =$(this).val().toLowerCase();
  $.ajax({
    url:`http://192.168.33.10:3000/gender/g=${gender}`,
    dataType: 'json',
    type: 'GET',
    success: function(data){
      console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  })
})



});
