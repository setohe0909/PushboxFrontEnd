app.home_view = Backbone.View.extend({
	
	el: '#init',
	template: $('#template_home').html(),

    render: function () {

        this.$el.html(this.template);
		return this; 
    }
});


app.home = new app.home_view();