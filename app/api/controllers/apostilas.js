
const apostilaModel = require('../models/apostilas');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		apostilaModel.findById(req.params.apostilaId, function(err, apostilaInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "apostila found!!!", data:{apostilas: apostilaInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let apostilasList = [];

		apostilaModel.find({}, function(err, apostilas){
			if (err){
				next(err);
			} else{
				for (let apostila of apostilas) {
					apostilasList.push({id: apostila._id, nome: apostila.nome, categoria: apostila.categoria, link: apostila.link});
				}
				res.json({status:"success", message: "apostilas list found!!!", data:{apostilas: apostilasList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		apostilaModel.findByIdAndUpdate(req.params.apostilaId,{nome:req.body.nome}, function(err, apostilaInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "apostila updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		apostilaModel.findByIdAndRemove(req.params.apostilaId, function(err, apostilaInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "apostila deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		apostilaModel.create({ nome: req.body.nome, categoria: req.body.categoria, link: req.body.link }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "apostila added successfully!!!", data: null});
				  
				});
	},

}					