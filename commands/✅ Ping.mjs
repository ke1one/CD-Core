'use strict'

export const words = /^(?:ping|пинг|gbyu|зштп|平坦的|пінг|пiнг|silbido|平)$/iu
export const payload = /^(?:ping)$/iu
export async function script(context, { Keyboard, functions, user }) {
	try {
		const emoji = await functions.randomElement('❤','💘','💖','💗','💓','💞','💕','✅','🚾','☢','🆚','🐼','🐔','🐤','🐸','🐳','🐬','🦋','🐋','🦈','🐚','🐛','🐝','🌺','🌳','🌹','🏵','🎄','🌴','🌵','🌿','🌱','🍀','☘','🍃','🌖','☀','⭐','☁','🌥','🌧','🌨','🌈','🌂','💦','🍏','🍎','🥝','🍒','🍓','🍉','🍋','🍌','🍍','🥥','🥑','🥕','🌽','🥒','🍄','🥞','🧀','🍖','🍔','🍕','🥚','🌯','🍟','🍿','🥗','🍚','🍧','🍡','🍰','🍫','🍭','🍼','🍯','🥛','☕','🍹','🍻','⚽','🏐','🎾','🎯','🎽','🎮','🎲','🏄‍♀','🏄‍♂','🚄','🚅','🚒','🚗','🚕','🚑','🚚','🚛','✈','🚢','🚀','🌍','🌎','🌏','🧭','🏡','🏠','🏯','🏰','🗼','🗽','⛲','🌌','⛺','🔮','🎁','✨','🎈','👔','🎨','💎','💍','👑','🛍','👛','👟','🔋','📒','📚','📖','📃','✏','🗂','📌','📅','🔑','🔒','🔫','🔧','📡','💊','🌅','🎡','🎢','🎠'),
		position = await functions.randomInt(0, 2),
		text = position === 0 ? `${emoji} ${user.name}, pong`
		: position === 1 ? `${user.name}, ${emoji} pong` : `${user.name}, pong ${emoji}`
		return context.reply(text)
	}
	catch(error) {
		console.log(error)
	}
}