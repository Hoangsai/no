import AUDIO_TYPE from '../enums/audio-type'

export default {
	confetti: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_pwip', type, {
			volume: 0.5,
			rate: 1.5
		})
		ctx.play('pop_pwip', type, {
			rate: 1
		})
		ctx.play('pop_pwip', type, {
			volume: 0.5,
			rate: 0.8
		})
		ctx.vibrate([50, 30, 50, 30, 250])
	},
	button_click: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('click_07', type)
		ctx.vibrate(10)
	},
	button_toggle: (ctx, { state }) => {
		const type = AUDIO_TYPE.UI
		ctx.play('click_04', type, {
			rate: state ? 1.5 : 1
		})
		ctx.vibrate(10)
	},
	tile_hover: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drip_hi', type, {
			volume: 0.5
		})
		ctx.vibrate(10)
	},
	view_fade: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('slide_up', type, {
			volume: 0.2
		})
	},
	view_slide: (ctx, { right }) => {
		const type = AUDIO_TYPE.UI
		ctx.play(right ? 'slide_right' : 'slide_left', type, {
			volume: 0.6
		})
	},
	multiplier: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('chime_lite_ding_duo', type, {
			volume: 0.4,
			rate: 1.3
		})
	},
	profile_update: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drip_mid', type, {
			volume: 0.5,
			rate: 1.3
		})
	},
	chat_message: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drip_mid', type, {
			volume: 0.85,
			rate: 2
		})
	},
	user_join: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drip_mid', type, {
			rate: 1
		})
	},
	user_leave: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drip_mid', type, {
			rate: 0.7
		})
	},
	turn: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_echo', type)
	},
	game_win: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('music_vibelong_confirm', type, { rate: 1.5 })
		ctx.play('pad_confirm', type, { volume: 0.3, rate: 1.5 })
	},
	game_lose: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_note', type, { rate: 0.15 })
		ctx.play('pop_zap_bass', type, { rate: 2 })
		ctx.play('pop_zap_bass', type, { rate: 1, delay: 200 })
	},
	correct: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('music_vibelong_confirm', type, { rate: 1.5 })
		ctx.play('pad_confirm', type, { volume: 0.3, rate: 1.5 })
	},
	piece_drop: (ctx, { row, rows }) => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('cards_place', type, {
			volume: 0.4 - 0.05 * (1 - row / rows),
			rate: 0.9 + 0.3 * (1 - row / rows)
		})
		ctx.vibrate(40)
	},
	piece_drop_slide: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('card_swish', type, {
			volume: 0.2,
			rate: 2 + (Math.random() * 0.2 - 0.1)
		})
	},
	piece_drop_error: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_zap_bass', type, { rate: 1.7 })
	},
	letter_select: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_char', type, {
			volume: 0.3
		})
		ctx.vibrate(30)
	},
	word_correct: (ctx, { word }) => {
		const type = AUDIO_TYPE.EFFECTS
		let delay = 0
		let rate = 1.2
		for (let i = 0; i < word.length; i++) {
			ctx.play('pop_char', type, { rate, delay })
			ctx.vibrate([0, delay, 30])

			rate = rate * 1.15
			delay += 100
		}
	},
	word_incorrect: ctx => {
		const type = AUDIO_TYPE.EFFECTS
		ctx.play('pop_zap_bass', type, { rate: 1.7 })
		ctx.vibrate([50, 30, 150])
	},
	countdown: (ctx, { number }) => {
		const type = AUDIO_TYPE.EFFECTS
		switch (number) {
			case 0:
				ctx.play('pop_note', type, { rate: 1.6 })
				break
			default:
				ctx.play('pop_note', type)
				break
		}
	},
	error: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_zap_bass', type)
	},
	success: ctx => {
		const type = AUDIO_TYPE.UI
		ctx.play('pop_drum_up', type)
	},
	popup: (ctx, { hidden }) => {
		const type = AUDIO_TYPE.UI
		ctx.play(hidden ? 'pop_down' : 'pop_clicklo', type, {
			volume: 0.75
		})
	},
	popup_leaderboard: (ctx, { hidden }) => {
		const type = AUDIO_TYPE.UI
		ctx.play(hidden ? 'pop_down' : 'pop_clicklo', type, {
			rate: 2,
			volume: 0.75
		})
	}
}
