# Requirement Analysis
I am wanting to build an application that shows activity of subreddits based on time of day. I have ideas for additional features but this is my main goal. I will be interactiving with the Reddit RESTFUL API to gather data from any and all subreddits NSFW included. The system I am going to use involves HTML, CSS, JavaScript/TypeScript, React, Next, Express, Node.js, Azure.

# Planning
I want to build this project in 2 weeks time. The current Date is **_September 20th 2022_** the deadline will be **_Octover 4th 2022_**. If I am able to get this done before that I will be happy with it.

The project will follow specific formating and linting guidelines to keep everything pretty. The files can be found in the .eslintrc.json and the .prettierrc files.

# Architectural Design
All components written in code will run through tests before pushed to the develop branch. Unit testing code is important to keep foul bugs out of play. Most of the site will be static but the main component will be pulling data from a third party API.

### For this project I require the following...
1. Designs and a Project Board for ToDo Items about the projects. I will use Figma Design board to create the UI and part of the UX. This will also include the Fonts, Styling, Colors, and mobile font sizing and structure.
2. Issue Request For enhancements through the project board in the main repository. This will show me my TODO's, Working on, and closed items. Each main feature issue will have its own branch. Touch up and bugs will have their own branches. I am styling this this way because I am the only developer. The branching workflow will be using will have 2 long lasting branches. Main(production) and the Development(develop) branch. I will use shortlived branches to encorporate the main features, bugs, hotfixes, and touchups that merge into the development branch. I am simulating a professional work flow with a team.
3. Create all main static features.
4. Learn the Reddit API to get data. This might require me using express to pull in data server side to format what I need for the frontend. It might be a costly compute I am unsure at the moment.
5. Implement the heatmap. The colors will change from a scale of red to green. red being at the bottom of the barrel and green being at the top of the barrel. Meaning the more activity of the subreddit the greener it gets. The less, the redder. Note: all subreddits have different amounts of traffic will there be a scale thats computed for each one? A maximum that is computed? Or will there be a filter to see how much activity in thousands that is represented? **Final: There will be a heat map that calculates the maximum traffic through out the day and the color will scale with that and the heatmap will show the amount in thousands whe you hover over a tile.**
[Link to Designs and Task Board]()

# Software Development

# Testing

# Deployment
Github actions for CI/CD when the development is pushed to production