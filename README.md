# Reddit Data Visualization

# How I am working on this project
My goal is to build a data heatmap using subreddit data from the Reddit REST API. The heatmap will show the activity of each subreddit based on time. You will be able to search any subreddit of your liking.

* The use of a [Software Development Lifecycle](./SDLC.md) is probably unnessary for this small project but it is a good technique to learn.
* I built the designs, UI/UX, and workflow of the app using Figma and github, Project Designs PDF:
  * [Technical Writeup Dashboard](https://drive.google.com/file/d/1SGJABBP4sypdlplxqK10bp1k1KateU7b/view?usp=sharing)
  * [Subreddit Dashboard](https://drive.google.com/file/d/1SeG9ZHeqVA2dORgi6uDLSrRgPKA773HM/view?usp=sharing)
  * [User Dashboard](https://drive.google.com/file/d/1yxNleV10uJiTWJ91o702yPZr0iC8l6tp/view?usp=sharing)
* I used 2 long lasting branches and a variety short lived (feature) branches that merge into the Development branch, and the development branch is merged into the production branch. I approahed this project with this workflow to simulate a professional workflow with a team.
* Every PR is simulated with a [Template](.github/pull_request_template.md) to encorporate clear communication with every merge.
* The Reddit API is open to the public as long as you have an authorization key, and I was interested in what data lies within it.
* The project is build with Next.JS, TypeScript, Express, Node.js. I used Next.js because I was familiar with React and heared good things about it. I wanted to learn it and see how it works in comparison with React. Also in the future I want to recreate my personal site with NEXT to

# Technologies

# Learning Objective

# Problems

# Reddit API Endpoints used
Should all of this info be in here or can it be in a notes area?
Ill transfer it over to a notes section

The access core is https://oauth.reddit.com
A client key, secret key, and user authentication is required to pull from this REST API.
This process wil scape the data I need and return it back to the client as an object. I'll see if I can use anything that is useful.

## Endpoints Used
### /user/*user*/about
the json object looks like this. The project wil be using the endpoints in the examples. This is for my own sake to reference back to. This is the data that I will visualize on the data visualizer.

{
  "kind": string,
  "data": {
    "subreddit": {
      "public_description": string,
    }
    "snoovatar_img": string,
    "snoovatar_size": [number, number],
    "has_gold_subscription": bool,
    "coins": number,
    "is_gold": bool,
    "is_suspended": bool,
    "name": string,
    "created_utc": double,
    "total_karma": number,
    "link_karma": number,
    "awardee_karma": number,
    "awarder_karma": number,
    "comment_karma": number,
    "num_friends": number,
  }
}

*sorting*
Create a drop down menu for users to sort through the data.
[context, show, sort, t, type, username, after, before]
after="" after tag on menu. Limit can be used along with after to create a pagination feature?
ie
`
{
  data: {
    after: string
  }
}
`
Collect these
### /user/*username*/overview
{
  data: {
    after: string,
    children: {
      0: {
        subreddit: string,
        selftext: string,
        title: string,
        downs: number,
        ups: number,
        total_awards_received: number,
        link_flair_text: string,
        created: number,
        num_comments: number,
      }
      1: {},
      ...
      [25-100] : {

      }
    }
  }
}
### /user/*username*/comments
{
  data: {
    after: string,
    children: {
      0: {
        link_title: string,
        ups: number,
        downs: number,
        subreddit: string,
        body: string,
        link_permalink: string(link to subreddit post)
      }
      1: {},
      ...
      [25-100] : {

      }
    }
  }
}
### /user/*username*/upvoted
### /user/*username*/downvoted
### /user/*username*/hidden
### /user/*username*/saved
### /user/*username*/gilded

### /r/subreddit
{
  data: {
    after: string,
    children: {
      0: {
        selftext: string,
        ups: number,
        downs: number,
        score: number,
        subreddit: string,
        body: string,
        url: string(link to subreddit)
        title: string,
        subreddit_name_prefixed: string,
        total_awards_received: number,
        created_utc: number,
        author: string,
        subreddit_subscribers: number,
      }
      1: {},
      ...
      [25-100] : {

      }
    }
  }
}

### r/*subreddit*/about.json
{
  data: {
    title: string,
    active_user_count: number,
    subscribers: number,
    public_description: string,
    created_utc: number,
    language: string,

  }
}

