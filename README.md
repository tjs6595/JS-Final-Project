Outline and PSEUDOCODE:
	On.Load
		1.) Load Board (background)<canvas>
		2.) Define & locate territory markers.
		3.) Set up Player matrix (up to 6).
		4.) Set up color matrix.
		5.) Set up territory matrix.
		6.) Set up card matrix.
		7.) Initialize game setup. (Popup)
	
	gameSetupPopup
		1.) Select number of players.
		2.) Each player selects a color.
		3.) Shuffle card deck.
	
	initialTroopPlacement
		1.) Determine number of troops.
		2.) Claim Territories
		3.) Place remaining troops.
		
	playerTurn
		1.) Place Troops
			a.)Determine total troops.
				i.)troopsToBePlaced = 3 + (territories%3) + continents + cardsTraded + tradedCardOwnedTerritories
				ii.) Place troops on territories held.
		2.) Attack
			a.) Determine attackability
			b.) Roll Dice
			c.) Add/Remove Troops
		3.) Fortify