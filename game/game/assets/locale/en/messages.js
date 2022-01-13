import error from './error'
import game from './game'
import chat from './chat'

export default {
	name: 'Bloob.io',
	error,
	game,
	chat,
	header: {
		message: {
			lobby: 'Match Lobby',
			finished: 'Match Finished',
			finishedRematch: 'Rematch Starting Soon',
			tied: `Match Tied`,
			concede: `Match Finished — Opponent chose to forfeit`,
			winner: `Match Won by %{name}`,
			inactive: `Match Ended Due to Inactivity`,
			late: `Match Ended Due to Missing %{turns} Turn(s)`,
			pickActionCard: 'Picking Action Card',
			makingCardSelections: 'Making Card Selection',
			flippingField: 'Flipping Field',
			yourTurn: 'Your Turn',
			nameTurn: `%{name}'s Turn`,
			roundCount: `Round %{current} out of %{total}`
		},
		description: {
			lobby: `Waiting for players`,
			start: `Match starts in %{TEXT}...`,
			rematchStart: `Rematch starts in %{TEXT}...`,
			timeRemaining: `%{CLOCK} remaining...`,
			nextRound: `Next round in %{TEXT}...`,
			youWon: `You won`,
			nameWon: `%{name} has won`
		}
	},
	placeholder: {
		nickname: 'Fill in a nickname...',
		matchId: 'Match ID or URL'
	},
	content: {
		scrollBackDown: 'Scroll back down',
		pickYourself: 'Pick for yourself',
		round: 'Round (%{current}/%{total})',
		resize: '<span class="warning-text">Resizes the interface to fit field</span>'
	},
	category: {
		misc: 'Misc',
		dump: 'Dump',
		filter: 'Filter',
		times: 'Times',
		round: 'Round',
		flip: 'Flip',
		fallback: 'Fallback Conditions',
		take: 'Take Over',
		basic: 'Basic'
	},
	time: {
		hours: '0 hours | 1 hour | {count} hours',
		minutes: '0 minutes | 1 minute | {count} minutes',
		seconds: '0 seconds | 1 second | {count} seconds'
	},
	count: {
		points: '0 points | 1 point | {count} points',
		pieces: '0 pieces | 1 piece | {count} pieces',
		wins: '0 wins | 1 win | {count} wins',
		cards: '0 cards | 1 card | {count} cards',
		moves: '0 moves | 1 move | {count} moves',
		playing: '0 playing | 1 playing | {count} playing',
		players: '0 players | 1 player | {count} players',
		matchesFound: '0 matches found | 1 match found | {count} matches found',
		matchesWaiting: '0 matches waiting | 1 match waiting | {count} matches waiting',
		needMorePlayers: 'Need 0 more players | Need 1 more player | Need {count} more players'
	},
	misc: {
		you: 'You',
		share: 'Share',
		copy: 'Copy',
		matchId: 'Match ID',
		vibration: 'Vibration',
		unavailable: 'Unavailable',
		changeLog: 'Change Log',
		status: 'Status',
		information: 'Information',
		toggle: 'Toggle',
		concedeGame: 'Forfeit Game',
		sendMessage: 'Send Message',
		chat: 'Chat',
		viewAllGames: 'View all games',
		refreshWindow: 'Refresh Window',
		makeHost: 'Make Host',
		kickUser: 'Kick User',
		menu: 'Menu',
		pending: 'Pending',
		connection: 'Connection',
		ping: 'Ping',
		timeOffset: 'Time Offset',
		version: 'Version',
		userID: 'User ID',
		unknown: 'Unknown',
		about: 'About',
		public: 'Public',
		private: 'Private',
		computer: 'Computer',
		yes: 'Yes',
		no: 'No',
		disabled: 'Disabled',
		enabled: 'Enabled',
		excluded: 'Excluded',
		included: 'Included',
		view: 'View',
		new: 'New',
		fixed: 'Fixed',
		changed: 'Changed',
		confirm: 'Confirm',
		close: 'Close',
		edit: 'Edit',
		delete: 'Delete',
		cancel: 'Cancel',
		reset: 'Reset',
		start: 'Start',
		settings: 'Settings',
		preset: 'Preset',
		averageLength: 'Avg. Length',
		largestTake: 'Largest Take',
		takes: 'Takes',
		pieces: 'Pieces',
		words: 'Words',
		score: 'Score',
		and: 'and',
		vs: 'vs',
		rank: 'Rank',
		points: 'Points',
		player: 'Player',
		players: 'Players',
		selectAll: 'Select all',
		deselectAll: 'Deselect all',
		areYouSure: 'Are you sure?',
		restoreToDefault: 'Restore to default',
		resetData: 'Reset Data',
		customise: 'Customize',
		cancelCountdown: 'Cancel Countdown',
		inviteOthers: 'Invite Friends',
		rematch: 'Rematch',
		activeFilters: 'Active Filters',
		minMax: 'Min. %{min} | Max. %{max}',
		playersMinMax: '%{min}-%{max} players',
		madeBy: 'Made by %{name}',
		incrementCounter: 'Increments of %{count}',
		selectedOfLimit: 'Selected %{current} out of %{total} limit',
		tiredOfWaiting: 'Tired of waiting?',
		playAgainstBots: 'Play Against Bots',
		howToPlay: 'Learn how to play this game',
		volume: {
			title: 'Volume',
			interface: 'Interface Volume',
			effects: 'Effects Volume'
		},
		match: {
			create: 'Create Match',
			rematch: 'Rematch',
			start: 'Start Match',
			starting: 'Match Starting',
			leave: 'Leave Match',
			join: 'Join Match',
			rejoin: 'Rejoin Match',
			full: 'Full Match',
			waiting: 'Waiting for host to start the match'
		},
		matches: {
			playVsComputer: 'Play VS Computer',
			browse: 'Browse Matches',
			random: 'Play Random Opponents',
			available: 'Available Matches',
			noneAvailable: 'No Available Matches'
		},
		game: {
			join: 'Join %{title} Match',
			help: '%{title} Help',
			host: 'Host',
			duration: 'Game Duration',
			menu: 'Game Menu'
		},
		select: {
			colour: 'Select Your Color'
		},
		changes: {
			latest: 'Latest Changes',
			new: 'New Changes',
			save: 'Save Changes',
			previous: 'See Previous Changes'
		},
		return: {
			menu: 'Return to Menu',
			lobby: 'Return to Lobby'
		}
	},
	info: {
		menu: `A collection of multiplayer browser-based games without the need to make an account. Play hassle free and customize the experience to your liking.`,
		chat: {
			empty: {
				title: 'No Messages',
				description: 'Be the first to send a message!'
			}
		},
		copy: {
			url: {
				success: `Copied URL to clipboard!`,
				error: `Unable to copy to clipboard`
			}
		},
		matchmaking: {
			cancel: 'Cancel Matchmaking',
			searching: 'Looking for opponents... (%{time})',
			found: 'Match found! Starting in %{time}...'
		},
		user: {
			inactive: `User is not connected to this match.`
		},
		match: {
			leave: {
				player: `You may not be able to join back if you choose to leave.`,
				alone: `Since you are the only person in the game, the match will be closed when you leave.`,
				others: `Somebody else will become the new host when you leave.`
			},
			join: {
				private: `You can join a private match by filling in the four-digit ID.`,
				waiting: `Waiting for other player to accept rematch...`,
				starting: `Rematch will start in %{time}...`,
				rematch: `%{name} would like a rematch`
			},
			makeHost: `You are about to make "%{name}" the new host.`,
			kickUser: `You are about to kick "%{name}" from this match.`,
			finishedSettings: `Finished editing the match settings?`,
			available: `New matches will show up here`,
			rematch: `Would you like to play again?`,
			public: `<b>Public: </b>Anyone can join by browsing the available matches.`,
			private: `<b>Private: </b>Players can only join using the URL or 4-digit ID.`
		},
		about: {
			description: `Bloob.io is a project of passion consisting of multiplayer browser games.`,
			developedBy: 'Developed by %{name}',
			iconsSource: 'Icons courtesy of %{name} (Free)',
			soundsSource: 'Sounds provided by %{name} (Licensed)',
			support: 'Support Me'
		},
		flip: {
			turns: 'Turns to flip | Turn to flip | Turns to flip'
		},
		data: {
			concedeGame: `Forfeiting the game will result in a loss for you.`,
			reset: `Resetting your data is irreversible and will clear your profile, settings, and statistics.`
		}
	}
}
