const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserControllers {
	async create (req, res) {
		const { username, password, confirmPw, city, district, phone } = req.body
		if(password !== confirmPw) {
			res.json({ message: false})
		}else{
			const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

			const user = new User({
				username, password: hashedPassword, city, district, phone
			})
			if(user.save()) {
				res.json({ message: true})
			}
		}
		console.log(req.body)
	}

	async login(req, res) {
		const { username, password } = req.body;
        const user = await User.findOne({ username })
        const passwordMatch = await bcrypt.compare(password, user.password);
        const secretKey = 'khanhlydeptrai'

        if(passwordMatch) {
            let token = jwt.sign({userId: user._id, username: user.username}, secretKey)
            res.json({message: true, token})
        }else{
            res.json({message: false})
        }
	}
}

module.exports = new UserControllers