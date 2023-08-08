# Recast.ly

> A YouTube replica using YouTube API integration 

## Technical Setup and Tools
• npm: Managed the project's dependencies.</br>
• Babel: Transpiled source code using Babel's CLI. Used for converting JSX and ES6 to workable JS.</br>
• Live Reloading Server: This allowed for automatic browser refreshes whenever the source code was updated.</br>
• React Dev Tools: Installed a Chrome extension for better debugging.</br>

## Core Tasks:
• Dynamic Video List: Used sample data to populate the VideoList and VideoListEntry components.</br>
• Dynamic Video Player: Passed video data to the VideoPlayer component to render videos.</br>
• REST Server Interaction: Set up a local server for API calls to bypass YouTube's rate limits.</br>
• YouTube API Integration: Secured a developer key to access YouTube videos.</br>
• API Helper: Created a helper function for searching YouTube videos.</br>

## App's Structural Components

• App: Main container for the whole application.</br>
• Search: Managed the search input field.</br>
• VideoPlayer: Played a single video and showcased its details.</br>
• VideoList: Container component that rendered video list entries.</br>
• VideoListEntry: Displayed a single video's thumbnail. Clicking on its title played the video.
