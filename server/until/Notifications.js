const Notifications = require('../app/models/Notifications')

function notifications(io) {
	io.on('connection', (socket) => {
		socket.on('purchar', async (value) => {
			try {
				const noti = Notifications({
					userId: value.userId,
					message: value.message
				})
				await noti.save()
				const getNoti = await Notifications.find({}).populate('userId')
				io.emit('getnotications', getNoti)
			} catch (error) {
				console.log('error notu', error)
			}
		})

		socket.on('initAllNoti', async () => {
			const getNoti = await Notifications.find({}).populate('userId')
			io.emit('getnoti', getNoti)
		})
	});
}

module.exports = notifications;