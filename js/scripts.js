function ticket(movie){
  this.movie = movie;
  this.ticketInfos = [];
}

function ticketInfo(age,time){
  this.age = age;
  this.time = time;
}


ticketInfo.prototype.fullInfo = function(){
  return this.age + " " + this.time;
};

ticket.prototype.fullTicket = function () {
    return this.movie + " " + ticketInfos.fullInfo();
};


function selectMovie(select){
  if(select === "dunkirk"){
    $("#dunkirk").show();
    $("#logan").hide();
    $("#emoji").hide();
  }
  if(select === "logan"){
    $("#dunkirk").hide();
    $("#logan").show();
    $("#emoji").hide();
  }
  if(select === "emoji"){
    $("#dunkirk").hide();
    $("#logan").hide();
    $("#emoji").show();
  }
};

$(document).ready(function() {
  $("#movie-select").change(function(){
      var movie_selection = $("#movie-select").val();
      selectMovie(movie_selection);
    });
});
