

export const LOCATIONS = {
    GREAT_HALL: {
        name: 'The Great Hall',
        image: 'rooms/the-great-hall.jpg',
        icon: 'icons/kings-landing.svg'
    },
    HATCH: {
        name: 'The Hatch',
        image: 'rooms/the-hatch.jpg',
        icon: 'icons/hatch.svg'
    },
    PIT: {
        name: 'The Pit',
        image: 'rooms/the-pit.jpg',
        icon: 'icons/the-pit.svg'
    },
    WEEST_QUARTER: {
        name: 'The Weest Quarter',
        image: '',
        icon: 'icons/hyrule.svg'
    },
    KITCHEN: {
        name: 'Kitchen',
        image: 'rooms/kitchen.jpg',
        icon: ''
    }
}

export const CONNECTORS = {
    PITT_HALL: {
        image: 'rooms/pit-hall.jpg',
    }
}

export const ROOM_IDS = {
    GREAT_HALL: 'GREAT_HALL',
    PITT_HALL: 'PIT_HALL',
    PIT: 'PIT',
    HATCH: 'HATCH'
}

export const ROOMS = {
    GREAT_HALL: {
        location: LOCATIONS.GREAT_HALL,
        signs: [
            {
                directions: [
                    { location: LOCATIONS.HATCH, direction: 'right' },
                    { location: LOCATIONS.PIT, direction: 'left' }
                ],
                position: [250, 0, 0]
            },
            {
                text: 'Welcome to Dialexa',
                position: [1000, 100, 0]
            }
        ],
        portals: [
            { travelTo: ROOM_IDS.PITT_HALL, position: [25, -75, 0] },
        ]
    },
    PIT_HALL: {
        location: CONNECTORS.PITT_HALL,
        signs: [
            {
                directions: [
                    { location: LOCATIONS.WEEST_QUARTER, direction: 'up' },
                ],
                position: [250, 0, 0]
            },
            {
                directions: [
                    { location: LOCATIONS.HATCH, direction: 'up' },
                ],
                position: [1000, 0, 0]
            },
            {
                directions: [
                    { location: LOCATIONS.PIT, direction: 'up' },
                ],
                position: [-1500, 0, 0]
            },
            {
                directions: [
                    { location: LOCATIONS.GREAT_HALL, direction: 'up' },
                ],
                position: [-2100, 100, 0]
            }
        ],
        portals: [
            { travelTo: ROOM_IDS.HATCH, position: [900, -200, 0] },
            { travelTo: ROOM_IDS.PITT, position: [-1500, -75, 0] },
            { travelTo: ROOM_IDS.GREAT_HALL, position: [2200, 0, 0] },
        ]
    },
    HATCH: {
        location: LOCATIONS.HATCH,
        signs: [
            {
                directions: [
                    { location: LOCATIONS.PIT, direction: 'up' },
                    { location: LOCATIONS.WEEST_QUARTER, direction: 'RIGHT' },
                ],
                position: [2000, 0, 0]
            }
        ],
        portals: [
            { travelTo: ROOM_IDS.PITT_HALL, position: [2250, -75, 0] },
        ]
    }
}

export * from './style';