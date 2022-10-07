# Reddit API Endpoints used
Should all of this info be in here or can it be in a notes area?
Ill transfer it over to a notes section

The access core is https://www.reddit.com/
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