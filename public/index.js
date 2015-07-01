var cards
var counter = 0

$(document).on("ready", function(){

  // Create a 16-member array with 2 each of eight colors
  var colors = [ 
    "red", "red", 
    "blue", "blue", 
    "green", "green", 
    "yellow", "yellow", 
    "purple", "purple",  
    "orange", "orange",
    "gray", "gray",
    "black", "black"
  ]

  // Shuffle that array
  colors = _.shuffle(colors)

  // Create an array of Card views based on the randomized color array
  cards = _.map(colors, function(color){

    // Instantiate a new card view
    var card = new Card({ 
      className: "card",
      color: color 
    })

    // Append that card view into the page
    $("#card-container").append( card.$el )

    // Return it (from the map iterator)
    return card
    
  })

  eventDispatcher.on("card:clicked", function(view){
    //view.$el.css("background", view.viewData.color)
  })


})