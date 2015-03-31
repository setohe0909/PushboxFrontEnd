app.Routers = Backbone.Router.extend({
	
	routes: {
		''        : 'login',
		'register': 'register',
		'home'    : 'home',
		'logout'  : 'logout'
 
	},

	login: function ()
	{	
		app.login.render();
	},


	register: function ()
	{
		app.register.render();
	},

	home: function ()
	{
		app.home.render();
	},

	logout: function()
	{
		location.hash = "#";
	}

});


app.router = new app.Routers();
Backbone.history.start(); 