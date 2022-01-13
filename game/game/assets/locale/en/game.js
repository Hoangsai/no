import GAME_TYPE from '../../../assets/enums/game-type'

export default {
	generic: {
		title: 'Free Fun Multiplayer Browser Games',
		options: {
			public: {
				name: 'Match Privacy'
			},
			botDifficulty: {
				name: 'Computer Difficulty',
				data: {
					easy: 'Easy',
					normal: 'Normal',
					hard: 'Hard'
				}
			},
			maxUsers: {
				name: 'Max. Players',
				help: `How many players are allowed in the match.`
			}
		},
		presets: {
			custom: {
				name: 'Custom',
				desc: 'Changes made by you — Last updated %{timestamp}'
			},
			default: {
				name: 'Default'
			}
		}
	},
	[GAME_TYPE.WORDRACE]: {
		name: 'Wordrace',
		description: `Find words in any direction on a randomly generated field while racing against others with the same objective.`,
		title: 'Free Multiplayer Word Finding Game',
		options: {
			sharedField: {
				name: 'Shared Field',
				help: `Everyone always sees the same field. If a field is shared, it means when a letter has been claimed nobody else can take it. This way the game gets more difficult over time.`
			},
			multiplier: {
				name: 'Multipliers',
				help: `Multipliers are attached to random letters on the field and multiply the score of a found word if used in the selection.`,
				data: {
					off: 'Turned Off',
					uncommon: 'Uncommon (2.5%)',
					common: 'Common (5%)',
					veryCommon: 'Very Common (10%)',
					extreme: 'Extreme (25%)'
				}
			},
			roundTotal: {
				name: 'Rounds',
				help: `Each round will generate a new playing field.`
			},
			roundDuration: {
				name: 'Round Duration',
				help: `How long a single round lasts.`
			},
			roundIntermission: {
				name: 'Intermission Time',
				help: `How long the time in between rounds lasts.`
			},
			minWordLength: {
				name: 'Min. Word Length',
				help: `A word selection must have at least this length in order to be checked on validity.`
			},
			maxWordLength: {
				name: 'Max. Word Length',
				help: `A word selection cannot exceed this length in order to be checked on validity.`
			},
			_wordLength: {
				name: 'Word Length',
				help: `A word selection must be between this length to be considered valid.`,
				between: 'Between %{min} and %{max}'
			},
			field: {
				name: 'Field Size',
				help: {
					change: `The size of the playing field. Bigger fields make playing with more people easier.`,
					notice: `Please note that large field sizes increase the interface size and may not fit pefectly for all players.`
				},
				data: {
					'10x8': 'Small (10x8)',
					'13x10': 'Medium (13x10)',
					'16x14': 'Large (16x14)',
					'20x18': 'Extreme (20x18)'
				}
			},
			_gameDuration: {
				name: 'Game Duration'
			}
		},
		presets: {
			largeGroup: {
				name: 'Large Group',
				desc: 'Big field — More players'
			},
			blitz: {
				name: 'Blitz',
				desc: 'Many short rounds — Lots of multipliers'
			}
		},
		help: {
			find_word: {
				title: 'Word Selection',
				desc: {
					'1': `Click and hold on a letter in the playing field and drag in any direction to form a word.`,
					'2': `Once you stop clicking, the word is processed, and you get points depending on the length of the word.`
				}
			},
			gameplay: {
				title: 'Gameplay',
				desc: {
					'1': `Everyone is trying to find words at the same time as you, it is a race after all. Claimed letters cannot be used again.`,
					'2': `Sometimes it is more tactical to claim many short words, rather than taking the time for longer ones.`
				}
			},
			multiplier: {
				title: 'Multipliers',
				desc: {
					'1': `When enabled, multipliers are shown on random letters on the field which multiply the score of your found words!`,
					'2': `Multipliers do stack up, so having a word with <b>x2</b> and <b>x3</b> would multiply the score for the word <b>x5</b>!`
				}
			}
		}
	},
	[GAME_TYPE.FOUR_IN_A_ROW]: {
		name: 'Four in a Row',
		description: `Play Four in a Row with up to six players in either the classic gamemode or available variations.`,
		title: 'Free Multiplayer Game for 2-6 Players',
		options: {
			field: {
				name: 'Field Size',
				help: 'The size of the playing field.',
				data: {
					'7x6': 'Default (7x6)',
					'9x4': 'Stretched (9x4)',
					'9x6': 'Large (9x6)',
					'13x8': 'Very Large (13x8)',
					'17x10': 'Extreme (17x10)'
				}
			},
			turnTime: {
				name: 'Turn Time',
				help: `How long each player may decide on their next move.`
			},
			piecesInRow: {
				name: 'Winning Condition',
				help: `How many pieces you must have in a row to win the game.`,
				data: {
					'3': 'Three-in-a-row (3)',
					'4': 'Four-in-a-row (4)',
					'5': 'Five-in-a-row (5)',
					'6': 'Six-in-a-row (6)'
				}
			},
			sideColumns: {
				name: 'Side Columns',
				help: `Adds a column on either side of the playing field with pieces in alternating colors.`
			},
			flip: {
				name: 'Field Flip',
				help: `Spice things up by flipping the field, the tiles on the bottom will become the tiles on top. A counter will show how many turns are left until a flip occurs.`,
				data: {
					everyTurn: 'After every turn',
					countTurns: 'After every %{count} turns'
				}
			},
			turnsUntilFlip: {
				name: 'Turns to Flip',
				help: `Placing a piece counts as a turn. This defines how many pieces must be dropped before flipping the field.`
			}
		},
		presets: {
			fiveInARow: {
				name: 'Five-in-a-row',
				desc: 'Side columns — Large field'
			},
			flipParty: {
				name: 'Flip Party',
				desc: 'Flip field every 12 turns — Very large field'
			}
		},
		help: {
			placement: {
				title: 'Piece Placement',
				desc: {
					'1': `Pieces can be placed several ways. Hover over a column and click, use keyboard controls, or drag it around.`,
					'2': `You can see which column your opponent is hovering over, keep this in mind and use it to your advantage.`
				}
			},
			win: {
				title: 'Winning State',
				desc: {
					'1': `By default, the first person to get four on a row wins the game. This can be horizontal, vertical, and diagonal.`,
					'2': `The host may change the default winning condition and allow for different requirements.`
				}
			}
		}
	}
}
