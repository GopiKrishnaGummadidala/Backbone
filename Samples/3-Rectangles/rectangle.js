(function () {

	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({
		tagName: 'div',
		className: 'rectangle',
		events: {
			'click': 'move'
		},
		render: function () {
			this.$el.css({
				'width': this.model.get('width') + 'px',
				'height': this.model.get('height') + 'px'
			});

			this.$el.css({
				'left': this.model.get('position').x,
				'top': this.model.get('position').y
			});

			this.setColor();

			return this;
		},
		setColor: function () {
			this.$el.css("background-color", this.model.get('backgroundColor'));
		},
		move: function () {
			this.$el.css("left", this.$el.position().left + 10);
		}
	});


	var models = [
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 50,
				y: 100
			},
			backgroundColor: 'red'
		}),
		new Rectangle({
			width: 100,
			height: 300,
			position: {
				x: 150,
				y: 110
			},
			backgroundColor: 'blue'
		}),
		new Rectangle({
			width: 130,
			height: 90,
			position: {
				x: 80,
				y: 200
			},
			backgroundColor: 'green'
		})
	];

	_(models).each(function (model) {
		$("div#canvas").append(new RectangleView({ model: model }).render().el);
	});

})();	