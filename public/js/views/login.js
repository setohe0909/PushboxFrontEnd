app.login_view = Backbone.View.extend({
	
	el: '#init',
	
	template: _.template($('#template_login').html()),
	
	events: {
		'click #btn-click'   : 'login',
		'click #register'    : 'register',
	},
	
	render: function ()
	{ 
		this.$el.html(this.template);
		return this; 

	},

	register: function ()
	{ 
		location.hash = "register";
	},

	login: function (evt)
	{
		location.hash = "home";
	}
});


app.Register_View = Backbone.View.extend({
	
	el: '#init',
	
	template: _.template($('#template_register').html()),
	
	events: 
	{
		'click #Register'	:	'createAccount',
		'click #Cancel'	    :	'backLogin'
	},

	render: function ()
	{ 
		this.$el.html(this.template); 
		return this;	
	},
	
	
	backLogin: function ()
	{ 
		location.hash = ''; 
	}
	
});

app.register = new app.Register_View();
app.login = new app.login_view();