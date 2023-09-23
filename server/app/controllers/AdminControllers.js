const Admin = require('../models/Admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminControllers {
	async create(req, res) {
		const {fullname, account, password, role, phone} = req.body
		const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

		const admin = new Admin({
			fullname, username: account, password: hashedPassword, role, phone
		})

		if(admin.save()) {
			res.json({ message: true })
		}
	}

	async show(req, res) {
		const admin = await Admin.find()
		res.json(admin)
	}

	edit(req, res) {
		const { id } = req.body
		Admin.findById(id)
			.then((admin) => {
				res.json(admin)
			})
	}

	async update(req, res) {
		const {id, fullname, username, password, newPassword, role, phone} = req.body
		const admin = await Admin.findById({ _id: id})
		const passwordMatch = await bcrypt.compare(password, admin.password);

		if(passwordMatch) {
			const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
			Admin.updateOne({ _id: id}, {
				fullname,
                username,
                password: hashedPassword,
                role,
                phone
			})
			.then(() => {
                res.json({message: true})
            })
            .catch(error => {
                console.log('edit admin ', error)
            })
		}
	}

	async delete(req, res) {
		const { id } = req.body
		console.log(id)
		const admin = await Admin.deleteOne({ _id: id})
		if(admin) {
			res.json({ message: true })
		}
	}
}

module.exports = new AdminControllers()