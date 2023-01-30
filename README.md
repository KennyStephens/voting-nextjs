This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Questions:

Three phases to get data:

1. Build Time
   - getStaticProps
   - getStaticPaths (used for dynamic routes)
2. Server-side rendered
   - getServerSideProps
   - When would I use this? When the page must be blocked until the data is fetched? But still needed for SEO?
3. Client-side
   - SWR - https://swr.vercel.app/ async requets
   - Use when the page can load without the data and SEO is not a problem?

TODO:

- Data vizualization for money given to valve and how much goes to teams
- Add in all meta information through `<BasePage />` on the site
- Write up some blog posts for the website to start SEO and interest (see below)
- Set up email server
- Set up deploy pipelines
- Create script to auto close polls that are past
- Limit polls and lazy load after 5 or 10

Emails:

- https://maizzle.com/docs/installation
- Create email template for newsletter (include unsubscribe link)
- Create email template for one time login code
- Create email template for when a new poll opens

Once domain is decided

- Fix sitemap.xml.ts and robots.txt (https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt)

Blog ideas:

- Updates on where the DPC is
- Find player tweets/org tweets about not enough money in the DPC and talk about them and how we solve the problem
- Case studies on performance of people playing a game more hours and getting better at it
- Explain the logic behind why we should pay more money to players and less to valve
- Talk about when a team had to forfeit because players had jobs to do (bounty hunter team?)

About Page:

- What is neutralstack.io?
- What is our goal?
- Why are we doing this?
- How are we doing this?
