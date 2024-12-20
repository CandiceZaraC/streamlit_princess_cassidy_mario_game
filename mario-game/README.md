# Mario Game

## Overview
This project is a simple Mario-style game built using TypeScript. The game features various levels, characters, and sound effects, providing an engaging experience for players.

## Project Structure
```
mario-game
├── src
│   ├── main.ts               # Entry point of the game
│   ├── assets                # Contains game assets
│   │   ├── characters        # Character images and sprites
│   │   ├── backgrounds       # Background images for levels
│   │   └── sounds            # Sound effects and music
│   ├── levels                # Level definitions
│   │   └── level1.ts        # Level 1 implementation
│   └── utils                 # Utility functions
│       └── helpers.ts        # Helper functions for asset loading and audio
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd mario-game
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile the TypeScript files:
   ```
   npm run build
   ```

4. Run the game:
   ```
   npm start
   ```

## Gameplay
- Navigate through levels, collect items, and avoid enemies.
- Use keyboard controls to move and jump.
- Enjoy the background music and sound effects as you play!

## Contributing
Feel free to submit issues or pull requests to improve the game!