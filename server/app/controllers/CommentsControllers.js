const Comments = require('../models/Comments')

class CommentsControllers {
	async create(req, res) {
		const { id, getToken, comment } = req.body
		const comments = new Comments({
			userId: getToken.userId,
			productId: id,
			message: comment
		})
		await comments.save()
		const comments2 = await Comments.find({productId: id}).populate('userId')
		if(comments2) {
			res.json(comments2)
		}
	}

	async show(req, res) {
		const { id } = req.body
		try {
			const comments = await Comments.find({productId: id}).populate('userId')
			if(comments) {
				res.json(comments)
			}
		} catch (error) {
			console.log('server: error get cmt', error)
		}
	}

	async delete(req, res) {
		const { id, productId } = req.body
		await Comments.deleteOne({_id: id})
		const comments = await Comments.find({productId}).populate('userId')
		if(comments) {
			res.json(comments)
		}
	}
}

module.exports = new CommentsControllers()