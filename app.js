// Exercise 4 ----------
// alert("Hi");

function create_header(my_name) {
  return "<h1>" + my_name + "</h1>";
}

function create_image(image_file) {
  return "<img>" + image_file + "</img>";
}

function create_paragraph(age, gender, job) {
  return "<p> I'm a " + age + " year old " + gender + " and I work as a " + job + "</p>";
}

function create_profile(name, age, gender, job, image_file) {
  return create_header(name) + create_image(image_file) + create_paragraph(age, gender, job);
}

$(document).ready(function() {
  // Exercise 5 --------
  // console.log(prompt("What's your name?"));
  
  // Exercise 6 --------
  // movie = prompt("What movie do you want to go to?");
  // time = prompt("What time?");
  // console.log("Let's go watch " + movie + " at " + time);

  // Exercise 7 --------
  // var password = "";
  // while (password.length <= 10)
  //   password = prompt("Enter your password");
  // console.log("Success!")

  // Exercise 8 --------
  // age = prompt("What's your age?");
  // if (age < 21)
  //   alert("Can't drink, go home");
  // else
  //   alert("Booze!");
  // Similarities to Ruby: if-else structure. Differences: jQuery needs conditions to be inside parenthesis and braces if there's more than one line of code.

  // Exercise 9 --------
  // groceries = ["limes", "onions", "tomatoes", "chiles"];
  // $.each(groceries, function() {
  //   console.log("I need " + this);
  // });
  // alert("Done shopping.");

  // Exercise 10 --------
  // me = {name: "Ricardo", age: 28, gender: "Male", height: 1.77, city: "Austin"};
  // alert("My name is " + me.name + ". I'm a " + me.age + " year-old " + me.gender + " living in " + me.city + ". I'm " + me.height + "m. tall.");

  // Exercise 11 --------
  // console.log(create_profile("Ricardo", 28, "male", "software engineer", "pic.jpg"));

  // Exercise 16 --------
  // $('h1');
  // $('div');
  // $('div').first();
  // $('.profilepic');
  // $('.nav-item');
  // $('#bottom-nav-item');
  // $(this);
  // $('div .card');
  // $('[class="card map"]');
  // $('div:even');
  // $('div[class="card map"]').parent();
  // $('div[class="main card"]').children();
  // $('div[class="card map"]').siblings();

  // Exercise 17 -------
  // $('.card.right-sidebar').hide();

  // Exercise 18 -------
  // $('.card').hide();

  // Exercise 19 -------
  // $('.card').show();

  // Exercise 20 -------
  // $('.main.card p').text("Hello. I'm Ricardo. This page is about me");

  // Exercise 21 -------
  // $('.main.card p').append('. I forgot this last sentence.');

  // Exercise 22 -------
  // $('.main.card').append('<p> Another paragraph. </p>');

  // Exercise 23 -------
  // $('.card.right-sidebar').remove();

  // Exercise 24 -------
  // $('.nav-items').append($('.nav-item').first().remove());

  // Exercise 25 -------
  // $('.card.nav').clone().insertAfter($('.main.card'));

  // Exercise 26 -------
  // $('img').last().attr('width', '85%');

  // Exercise 27 -------
  // $('.card.right-sidebar').hide(500);

  // Exercise 28 -------
  // $('.card.right-sidebar').slideUp();

  // Exercise 29 -------
  // $('.card.right-sidebar').hover(function() {
    // $('.card.right-sidebar').fadeOut();
  // });

  // Exercise 35 -------
  // $('.main.card').click(function() {
  //   alert('Clicked About me');
  // });

  // Exercise 36 -------
  // $('.main.card').click(function() {
  //   $('.main.card h1').append('!');
  // });

  // Exercise 37 -------
  // $('body').click(function(e){
  //   if ($(e.target).is('body'))
  //     $(e.target).css('background-color', '#aaa');
  // });

  // Exercise 38 -------
  // $('.main.card').click(function(e){
  //   $(this).clone().insertAfter($('.main.card'));
  // });

  // Exercise 39 -------
  // $('.main.card').click(function(e){
  //   $('.nav').click(function(){
  //     $('div').toggle('hide');
  //   });
  // }); // Changed from exercise after talking to Shehzan

  // Exercise 40 -------
  // $('.main.card').mouseenter(function(){
  //   $('.main.card').css('background-color', '#eee');
  // });

  // $('.main.card').mouseleave(function(){
  //   $('.main.card').css('background-color', '#fff');
  // });

  // $('.main.card').hover(
  //   function(){
  //     $('.main.card').css('background-color', '#eee');
  //   },
  //   function(){
  //     $('.main.card').css('background-color', '#fff');
  //   }
  // );

  // $('.main.card').dblclick(function(){
  //   $(this).slideUp();
  // });

  // Exercise 41 -------
  $('.messages').hide();
  $('#submit').click(function(e){
    e.preventDefault();
    $('.messages').hide();
    $('#errormsg p').remove();
    if (validateEmail() && validatePass())
      printSuccess();
  });

  $('#closebtn').click(function(){
    $('.messages').hide(100);
  });
  // $('h1').hide();
});

function printMessage(msg) {
  $('#errormsg').append('<p>'+msg+'</p>');
  $('.messages').show();
  $('#errormsg').css('background-color', 'white');
}

function isEmpty(element) {
  if ($(element).val() == '')
    return true;
  else
    return false;
}

var emailPattern = /@{1}\w*\.\w*/;

function validateEmail() {
  var a=true, b=true, c = true;
  if (isEmpty($('#email'))) {
    printMessage('Your email is empty.');
    a = false;
  }
  if ($('#email').val().length < 8) {
    printMessage('Your email should be at least 8 characters long.');
    b = false;
  }
  if ($('#email').val().match(emailPattern) == null) {
    printMessage('Your email is not in the right format.');
    c = false;
  }
  return a && b && c;
}

function validatePass() {
  var a=true, b = true;
  if (isEmpty($('#pass'))) {
    printMessage('Your password is empty.');
    a = false;
  }
  if ($('#pass').val().length < 8) {
    b = false;
    printMessage('You password should be at least 8 characters long.');
  }
  return a && b;
}

function printSuccess() {
  printMessage('Successfully logged in.');
  $('#errormsg p').css('color', 'green');
  $('#errormsg').show();
}












