const Product =  require("../models/Product")
const fs = require('fs');

class ProductsController{
	create (req, res) {
		const { name, description, quantity, price } = req.body
		const product = new Product({
			name,
			description,
			img: req.file.filename,
			price,
			quantity
		})
		if(product.save()) {
			res.json({message : true})
		}else{
			res.json({message : false})
		}
	}

	async show(req, res) {
		const product = await Product.find({})
		res.json(product)
	}

	async edit (req, res) {
		const { id } = req.body
		const product = await Product.findOne({_id : id})
		res.json(product)
	}

	async update(req, res) {
		const { id, name, discription, price, quantity, imgOld } = req.body
		let newImg
        const pathImg = "uploads/" + imgOld
        if(req.file !== undefined) {
            fs.unlink(pathImg, err => {
                if(err) {
                    console.log("error update img")
                }
                console.log("updated successfully!")
            })
            newImg = req.file.filename
        }

			Product.updateOne({_id: id}, {
				name,
				discription,
				price,
				quantity,
				img: newImg
			})
			.then((product) => {
				if(product) {
					res.json({message: true})
				}else{
					res.json({message: false})
				}

			})
			.catch(error => {
				console.log(error)
			})
	}

	delete(req, res) {
		const { id } = req.body
		Product.deleteOne({_id: id})
			.then(() => {
				res.json({message: true})
			})
	}

	async detail (req, res) {
		const { id } = req.body
		const product = await Product.findOne({_id: id})
		if(product) {
			res.json(product)
		}
	}

	async showcart(req, res) {
		const { storedCartItems } = req.body
		const product = await Product.find({ _id: { $in: storedCartItems }})
		res.json(product)
	}
}


module.exports = new ProductsController()