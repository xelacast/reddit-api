# Reddit Data Visualization

# How I am working on this project
My goal is to build a data heatmap using subreddit data from the Reddit REST API. The heatmap will show the activity of each subreddit based on time. You will be able to search any subreddit of your liking.

* The use of a [Software Development Lifecycle](./SDLC.md) is probably unnecessary for this small project but it is a good technique to learn.
* I built the designs, UI/UX, and workflow of the app using Figma and github, Project Designs PDF:
  * [Technical Writeup Dashboard](https://drive.google.com/file/d/1tP4z9t34Qo6WgABMA55-k3X6thAqcdem/view?usp=sharing)
  * [Subreddit Dashboard](https://drive.google.com/file/d/1ep2JeKVOIhHOM9GonAK2PBlwP-yo9M6f/view?usp=sharing)
  * [User Dashboard](https://drive.google.com/file/d/11OORE37_rroFUpjcqpNSSsF3ah3CcGzi/view?usp=sharing)
* I used 2 long lasting branches and a variety of short lived (feature) branches that merge into the Development branch, and the development branch is merged into the production branch. I approached this project with this workflow to simulate a professional workflow with a team.
* Every PR is simulated with a [Template](.github/pull_request_template.md) to incorporate clear communication with every merge.
* The Reddit API is open to the public, and I was interested in what data lies within it.
* The project is build with Next.JS, TypeScript, Node.js. I used Next.js because I was familiar with React and heard good things about it. I wanted to learn it and see how it works in comparison with React. Also in the future I want to recreate my personal site with NEXT.

# Learning Objective
* Learn Fundamentals of NEXT.js.
* Data Fetching from a third party REST API.
* End to End Testing.
* Learn TypeScript Fundamentals.
* Become more familiar with the component mounting.
* Creating DRY Components.

# How to navigate this project
This project uses NPM
Clone the repository to your desired folder and install all dependencies

`
npm i
`

Go Live with
`
npm run dev
`
Go to https://localhost:3000
There are 3 sections to navigate to on the left navigation panel. Use the search bar

Run Tests with
`
npm run test:e2e
`
# Why I built this project this way
* Styling the github workflow with 2 long term branches and many short lived branches. This approach styled professional workflows giving myself more familiarity with issues and PRs.
* The decision of not using media queries was clear because the main focus was learning NEXT and data fetching from a 3rd party REST API.
* Prop drilling was my state management of choice because I thought my components would line up more fluidly. React Context would have proved useful here.
* NEXT was a choice I derived from because I heard good things about it, the tech is on the job market, and I wanted to learn a new technology to add to my arsenal.
* Using End to End testing was a last minute decision. I used it to learn more about it and to get familiar with another testing library.
* Component architecture is set up as the Main Component folder and inside is the component and the component style, along with a __tests__ folder for each component. This helped me stay in one place when building each component.
* Figma Designs were created to guide me through the UI creation of the project. I will also be using UI/UX designs to build in an industry.

# If I had more time I would change...
* To use React Context and a global store.
* The architecture of my components for D.R.Y delivery.
* Data formatting was a large issue. I would go back and find a way to format the data of the reddit api so I didn't have to hack around it on every data point.

# Technologies
JavaScript, TypeScript, HTML, CSS, Node.js, NEXT.js, React.js, REST API, Reddit API, SASS, PlayWright testing library.

# What I learned
* Create your html elements to be test friendly.
* Components can be smaller than I thought (I need to confirm what a good practice is).
* useSWR and custom hooks simplify data fetching.
* PlayWright End To End Testing.
* NEXT.js
* Reddit REST API.
* I want to be a backend developer or full stack developer.
* Using a single long term branch and many small branches is better for single developer projects.

# What I did well
* I think I created a folder architecture that is easy to navigate. Each folder holds the proper files to quickly work on a component. No need to jump folders to find a styles sheet or a test.
* I taught myself NEXT in 10 days. By no means am I a professional but the fundamentals are secure in my brain.

# What I did not so well on
* The top [page routing](./components/header.tsx) I used NEXT useRouter to pull the URL subdomain and set state with it. This causes a bug to show the 'Dashboard' text on page refresh on any of my pages.
* This project was meant for me to learn NEXT.js, how to implement TypeScript with it.
* I did not use TypeScript thoroughly. I am lacking knowledge in fundamentals so I am actively learning to improve.
* My commits were all over the place. I didn't have a clear goal of what I was creating a few times so my commits and branching were off a bit.
* Hacked State in [subreddits page](./pages/subreddits.tsx). There is definitely a better way to do this.getStaticProps? getServerSideProps?

# Where I can Improve
* Create context for the app and create a store.
* Format Data to a universal standard?
* Plan out your props and decide ahead of time what will work the best. React Context for global state scope would help.
* Plan the css formatting for html tags, fonts, sizing, colors, line height, before you do anything else.
* Become a backend developer.
* Data fetching and prop drilling.
* How state flows through components and how to reuse specific components. In the future break your components down into more pieces?
* Advanced TypeScript and create a stronger foundation of fundamentals.
* Create a commit and branch principle. When and what I should be commiting and when I should use an extra branch system.