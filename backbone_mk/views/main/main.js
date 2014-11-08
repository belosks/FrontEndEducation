//var MainView = Backbone.View.extend({
var id = 0;
var MainView = BaseView.extend({
	templateUrl : 'views/main/main.html',
	models : {
		list : null
	},
	onInitialize : function (){
		var self = this;

		this.models.list = new ListCollection();
		this.models.list.loadLocal();

		this.vent.on('addItem', function (item){
			self.addItem(item);
		});
	},
	onRender : function (){
	    var formContainer = this.$el.find('#addForm');
		var form = new AddForm();
		formContainer.append(form.el);

		var listContainer = this.$el.find('#addForm');
		var list = new ListView( { model : this.models.list} );
		listContainer.append(list.el);
	},
	addItem : function (item){
		id++;
		item.id = id;
		this.models.list.push(item, {validate : true});
		this.models.list.saveLocal();
		console.log('ADD ITEM ON MAIN', this.models.list.length);
	}
//	views : {
//		list : null,
//		addForm : null
//	},
//	models : {
//		list : null
//	},
//	onInitialize : function (){
//		var self = this;
//		this.models.list = new ListCollection();
//		this.views.list = new ListView({model : this.models.list});
//		this.views.addForm = new AddForm();
//
//		this.vent.on('addItem', function (item){
//		  	self.addItem(item);
//		});
//	},
//	onRender : function (){
//		this.$el.find('#list').html(this.views.list.el);
//		this.$el.find('#addForm').html(this.views.addForm.el);
//	},
//	addItem : function (item){
//		this.models.list.push(item);
//		this.models.list.saveLocal();
//	}
});

