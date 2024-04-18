# Reddit Data Dashboard

# How I am working on this project

My goal is to build a NEXT.js application with the Reddit REST API. The user should be able to lookup any subreddit and/or user in the entire Reddit application.

- The use of a [Software Development Lifecycle](./SDLC.md) is probably unnecessary for this small project but it is a good technique to learn.
- I built the designs, UI/UX, and workflow of the app using Figma and github, Project Designs PDF:
  - [Technical Writeup Dashboard](https://drive.google.com/file/d/1tP4z9t34Qo6WgABMA55-k3X6thAqcdem/view?usp=sharing)
  - [Subreddit Dashboard](https://drive.google.com/file/d/1ep2JeKVOIhHOM9GonAK2PBlwP-yo9M6f/view?usp=sharing)
  - [User Dashboard](https://drive.google.com/file/d/11OORE37_rroFUpjcqpNSSsF3ah3CcGzi/view?usp=sharing)
- I used 2 long lasting branches and a variety of short lived (feature) branches that merge into the Development branch, and the development branch is merged into the production branch. I approached this project with this workflow to simulate a professional workflow with a team.
- Every PR is simulated with a [Template](.github/pull_request_template.md) to incorporate clear communication.
- The Reddit API is open to the public, and I was interested in what data lies within it.
- The project is built with NEXT.JS, TypeScript, Node.js. I used NEXT.js because I was familiar with React and wanted to learn it to see how it works in comparison.

# Learning Objective

- Fundamentals of NEXT.js.
- Project Management and Design.
- Data Fetching from a third party REST API and data formatting.
- End to End Testing.
- Incorporate TypeScript Fundamentals.
- Creating DRY Components.

# How to navigate this project

This project uses NPM and Node.js
Clone the repository to your desired folder and install all dependencies
```bash
git clone git@github.com:xelacast/reddit-api.git && cd reddit-api
```
```bash
npm i
```

Go Live with
```bash
npm run dev
```
Go to https://localhost:3000
There are 3 sections to navigate to on the left navigation panel. The search bar will pull data regarding the page you are on.

Run Tests with
`npm run test:e2e`

# Why I built this project this way

- The git flow approach was to simulate a professional workflow and environment with Issues and PRs.
- The main focus on this project was learning NEXT and data fetching so media queries were not used in this project.
- Prop drilling was my state management of choice. The initial concept was fluid.
- NEXT was implemented to potentially use it as my main tech for my work in the industry or as a freelancer.
- End to End testing was used in this case to interact with my application as a user from the testing environment. A new form of testing was learned.
- Each component folder is set up with its component, a testing folder (\_\_tests\_\_) and its styles module as the main component folder. This counteracts the single source of truth coding aspect but it holds component structure for easy access.
- Figma Designs were created to guide me through the creation of the project.

# If I had more time I would change...

- To use React Context and a global store over prop drilling.
- The architecture of my components for D.R.Y delivery and reusable components.
- Data formatting was a large issue. I would go back and find a way to format the data of the reddit api so I didn't have to hack around it on every data point.
- The UI would be more crisp. This would not slide for a production grade application.

# Technologies

JavaScript, TypeScript, HTML, CSS, Node.js, NEXT.js, REST API, Reddit API, SASS, PlayWright testing library.

# What I learned

- Create your html elements to be test friendly.
- Components can be smaller than I thought (I need to confirm what a good practice is).
- useSWR and custom hooks simplify data fetching.
- PlayWright End To End Testing.
- NEXT.js
- Reddit REST API.
- I want to be a backend developer or full stack developer.
- Using a single long term branch and many small branches is better for single developer projects.
- Creating UI is 80% of the process.

# What I did well

- I created a folder architecture that is easy to navigate. Each folder holds the proper files to quickly work on a component. No need to jump folders to find a styles sheet or a test.
- I taught myself NEXT in 10 days. By no means am I a professional but the fundamentals are secure in my brain.
- I have retained a lot more than I thought I would.

# What I lacked knowledge

- The top [page routing](./components/header.tsx) on lines 6-15 I used NEXT's useRouter to pull the URL subdomain and set state with it. This causes a bug to show the 'Dashboard' text on page refresh on any of my pages except for the dashboard page.
- This project was meant for me to learn NEXT.js, how to implement TypeScript with it, I hardly used TypeScript because I was focused on learning NEXT. DO NOT try and learn many things at once.
- I did not use TypeScript thoroughly. I am lacking knowledge in fundamentals so I am actively learning to improve them.
- My commits were all over the place. I didn't have a clear goal of what I was creating a few times so my commits and branching were off a bit.
- Hacked State in [subreddits page](./pages/subreddits.tsx) lines 10-17. There is definitely a better way to do this.getStaticProps? getServerSideProps? How could I used server side props and data fetching in the same place?

# Where I can Improve

- Create context for the app and create a store.
- Format Data to a universal standard?
- Plan out your props and decide ahead of time what will work the best. React Context for global state scope would help.
- Plan the css formatting for html tags, fonts, sizing, colors, line height, before you do anything else.
- Become a backend developer.
- Data fetching and prop drilling and global context.
- How state flows through components and how to reuse specific components. In the future break your components down into more pieces?
- Advanced TypeScript and create a stronger foundation of fundamentals.
- Create a commit and branch principles. When and what I should be commiting and when I should use an extra branch system.
