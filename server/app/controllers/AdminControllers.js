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

	async checklogin(req, res) {
		const {username, password} = req.body
		try {
			const admin = await Admin.findOne({ username})
			console.log(admin)
			const passwordMatch = await bcrypt.compare(password, admin.password);
			const secretKey = 'khanhlydeptrai'
			if(passwordMatch) {
				let token = jwt.sign({userId: admin._id, username: admin.username}, secretKey)
				res.json({message: true, token})
			}else{
				res.json({message: false})
			}
		} catch (error) {
			console.log("error check login", error)
		}
	}

	async getadmin(req, res) {
		const { getToken } = req.body
		try {
			const decoded = jwt.decode(getToken, 'khanhlydeptrai')
			const admin = await Admin.findOne({_id: decoded.userId})
			if(admin) {
				res.json(admin)
			}
		} catch (error) {
			console.log("get admin", error)
		}

	}
}

module.exports = new AdminControllers()