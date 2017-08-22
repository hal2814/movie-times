function ticket(movie){
  this.movie = movie;
  this.ticketInfos = [];
}

function ticketInfo(age,time){
  this.age = age;
  this.time = time;
}


ticketInfo.prototype.fullInfo = function(){
  return "<li>" + this.age + "</li> " + "<li>" + this.time + "</li>";
};

ticket.prototype.fullTicket = function(info) {
    return "<li>" + this.movie + "</li>" + info.fullInfo();
};

function priceCalculator(time,age){
  var price = 10;
  if(time !== "11:00 a.m."){
    price += 2;
  }
  if(age === "Adult"){
    price += 3;
  }else if(age === "Student"){
    price += 1;
  }
  return price;
}


function selectMovie(select){
  if(select === "Dunkirk"){
    $("#dunkirk").show();
    $("#logan").hide();
    $("#emoji").hide();
  }
  if(select === "Logan Lucky"){
    $("#dunkirk").hide();
    $("#logan").show();
    $("#emoji").hide();
  }
  if(select === "The Emoji Movie"){
    $("#dunkirk").hide();
    $("#logan").hide();
    $("#emoji").show();
  }
  $("#time-age-show").show();
};

$(document).ready(function() {
  var newTicket;
  $("#movie-select").change(function(){
    var movie_selection = $("#movie-select").val();
    selectMovie(movie_selection);
    newTicket = new ticket(movie_selection);
  });
  $("form#movieForm").submit(function(event) {
    event.preventDefault();
    $("#output li").remove();
    var age = $("#movie-age").val();
    var time = $("#movie-time").val();
    var newTicketInfo = new ticketInfo(age,time);
    newTicket.ticketInfos.push(newTicketInfo);
    $("#output").append(newTicket.fullTicket(newTicketInfo));
    $("#output").append("<li> Your total is: $" + priceCalculator(time,age) + "</li>");
  });
});
