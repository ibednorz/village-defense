import { Game } from '../../game'
import { ResourceType } from '../types'
import { Building } from './building'

const GOLD = 10
const WOOD = 15
const STONE = 20
const DEFAULT_TIME_TO_BUILD = 300
const MAX_LEVEL = 3

export class TownHall extends Building {
  constructor(game: Game) {
    super(
      game,
      [
        {
          type: ResourceType.Gold,
          count: GOLD,
        },
        {
          type: ResourceType.Wood,
          count: WOOD,
        },
        {
          type: ResourceType.Stone,
          count: STONE,
        },
      ],
      DEFAULT_TIME_TO_BUILD,
      MAX_LEVEL
    )
  }

  getTitle() {
    return 'Town Hall'
  }

  getDescription() {
    return 'Esse officia eu Lorem excepteur aliqua non. Dolor quis nisi irure eiusmod et magna eiusmod mollit non qui ad laborum nulla.'
  }

  toString = (): string => {
    return `Town Hall: [level = ${this.level}]`
  }
}