var card1
var card2
// Using a common eventDispatcher for this project is a good idea.
var eventDispatcher = _.clone(Backbone.Events)

// todo
var Card = Backbone.View.extend({
  // more todo
  className: "card",

  events: {
  	"click": "clickedCard"
  },

  // also todo
  initialize: function(viewData) {
	this.$el.css("background", "pink")
	this.render(viewData)
  },

  render: function(viewData){

  	this.viewData = viewData
  	var htmlString = this.template(viewData)
  	this.$el.html(htmlString)
  },

  flipcards: function(viewData){
  	this.$el.css("background". viewData.color)
  },

  clickedCard: function(){
  	
  	counter++

  	eventDispatcher.trigger("card:clicked", this)

  	if(counter === 1){
  		card1=this
  		card1.$el.css("background", card1.viewData.color)
  	}
  	if(counter === 2){
  		card2 = this
  		card2.$el.css("background", card2.viewData.color)
  	}
  	console.log("card 1", card1)
  	console.log("card 2", card2)

  	if(counter === 3 &&  card1 != card2){
	  	if(card1.viewData.color === card2.viewData.color){
		  		card1.$el.hide()
		  		card2.$el.hide()
		  		counter = 0
	  		}
		  	else{
		  		card1.$el.css("background", "pink")
		  		card2.$el.css("background", "pink")
		  		counter = 0
	  		}
	}
	else{
		if(card1 === card2){
			card1.$el.css("background", "pink")
			counter=0
		}
	}
  },

  template: Handlebars.compile( $("#card-template").html() )
})