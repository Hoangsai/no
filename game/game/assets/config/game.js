const CONFIG_TYPE = require('../enums/config-type')
const MATCH_TYPE = require('../enums/match-type')

const options = {
	maxUsers: {
		name: 'game.generic.options.maxUsers.name',
		help: ['game.generic.options.maxUsers.help'],
		icon: 'users',
		type: CONFIG_TYPE.NUMBER,
		display: {
			enabled: true,
			weight: 150
		},
		data: {
			min: 1,
			max: 2,
			increment: 1
		}
	},
	public: {
		name: 'game.generic.options.public.name',
		help: ['info.match.public', 'info.match.private'],
		icon: 'lock',
		type: CONFIG_TYPE.SELECT,
		display: {
			enabled: true,
			weight: 150
		},
		hidden: game => {
			return game.data.matchType === MATCH_TYPE.COMPUTER
		},
		data: [
			{
				name: 'misc.private',
				value: false
			},
			{
				name: 'misc.public',
				value: true
			}
		]
	},
	botDifficulty: {
		name: 'game.generic.options.botDifficulty.name',
		icon: 'robot',
		type: CONFIG_TYPE.SELECT,
		display: {
			enabled: true,
			weight: 250
		},
		hidden: game => {
			return game.data.matchType !== MATCH_TYPE.COMPUTER
		},
		data: [
			{
				name: 'game.generic.options.botDifficulty.data.easy',
				value: 0
			},
			{
				name: 'game.generic.options.botDifficulty.data.normal',
				value: 1
			},
			{
				name: 'game.generic.options.botDifficulty.data.hard',
				value: 2
			}
		]
	}
}

const presets = {
	_: {
		data: {
			botDifficulty: 1,
			maxUsers: undefined,
			minUsers: 1,
			public: true
		}
	}
}

module.exports = {
	options,
	presets
}
