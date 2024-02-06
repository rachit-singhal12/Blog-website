import express from "express";
import bodyParser from "body-parser";

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.render('index.ejs', { blogPosts: blogPosts });
});

app.post("/submit",(req,res)=>{
    res.render("submit.ejs");
})

app.post("/create",(req,res)=>{
    const newBlog = {
    title : req.body["title"],
    content :  req.body.content,
    author :  req.body.author,
    };
    blogPosts.push(newBlog);
    res.render('index.ejs', { blogPosts: blogPosts });
});

app.post("/delete",(req,res)=>{
  res.render("delete.ejs",{blogPosts : blogPosts});
})

app.post("/deleteblog",(req,res)=>{
  var title = req.body.blogtitle;
  var author = req.body.blogauthor;

  blogPosts = blogPosts.filter(blogPost => !(blogPost.title === title && blogPost.author === author));

  res.render("index.ejs",{blogPosts:blogPosts});
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

var blogPosts = [
  {
    title: 'Thinkful’s Blog - Data Science:',
    content: 'Thinkful’s blog offers deep insights into what it’s like to become a data scientist. Learn from Q&A’s with Thinkful students, graduates, mentors, and experts in the field. If you’re new to the industry, our WTF is Data Science article gives everything you need to get an introduction to what skills you need, and what types of jobs you can land. Readers can also see how data science can predict current events like NFL touchdowns, job market insights, oscar winners, and more. And of course, you’ll get real stories about our Data Science Flex and Data Science Immersion programs.',
    author : '1',
  },
  {
    title :'FiveThirtyEight',
    content :  'You can find the most practical use of data there is on FiveThirtyEight’s blog. Get current data insights on economics, elections, politics, and sports. The name reflects the number of electors in US electoral college. The Editor-in-Chief is Nate Silver, a statistician and journalist currently serving as a Special Correspondent at ABC. FiveThirtyEight also hosts two podcasts about data points in politics and sports, so it’s a great way to start learning data science.',
    author : '2',
  },
  {
    title: 'KDNuggets ',
    content : 'Receive leading news information on big data, business analytics, and data mining with KDNuggets. As one of the most trusted data blogs on the web, they serve up fresh information daily. Find out the differences between machine learning versus deep learning, see what math skills you’ll need if you’re looking to enter the industry, and read about how data scientists are an important part of helping solve global pandemics. You can also get connected to top professionals in the field, find courses, jobs, and meetups.',
    author : '3',
  },
  {
    title: 'Facebook Data Science Blog:',
    content: 'No one knows how to play the algorithms quite like Facebook, so it’s worth checking out what their data science team has to say about the world of big data. Their frequently updated research blog offers a behind-the-scenes look at some of the major data problems being solved by the tech giant every day. Recent topics worth diving into include a look at their social good initiatives, insights into how people spend time on Facebook, and why it’s important to invest in research in the time of COVID.',
    author: '4',
  },
  {
    title:'Data Science 101:',
    content : 'One of the OG data science blogs, the team here have been producing award-winning work since 2012.The founder himself transitioned from software engineering, so many of the posts offer an easy entry point to those just beginning their data science journey. There are a host of great posts, including intros into Google’s rules of machine learning, an ongoing series on cloud data science, and plenty of deep dives into the expanding world of AI. There is also plenty of video content, so you can learn in a style that best works for you.',
    author : '5',
  },
  {
    title : 'What’s The Big Data?:',
    content : 'What’s The Big Data? is where business breakthroughs, investments, and data science collide. Read about new data theories, suggestions for big data management and anything that helps evolve the IT/ data landscape. The blog was created by Gil Press, a former Senior Director in Thought Leadership Marketing at Dell EMC for over 16 years and current Managing Partner at gPress, a marketing, publishing, and research consultancy. If you’re interested in becoming a data scientist, this is also a good blog to check out because of the Q&A interviews with top data scientists in the industry. Current data science students.',
    author : '6',
  },
    {
      title: 'Exploring the World of JavaScript',
      content: 'In this blog post, we delve into the fascinating world of JavaScript and its various features.',
      author: 'CodingEnthusiast'
    },
    {
      title: 'The Art of Cooking',
      content: 'Join me on a culinary journey as we explore different recipes and cooking techniques.',
      author: 'ChefExtraordinaire'
    },
    {
      title: 'Traveling Across Continents',
      content: 'Embark on a virtual adventure as we explore diverse cultures and scenic landscapes.',
      author: 'WanderlustExplorer'
    },
    {
      title: 'Discovering Hidden Gems in Literature',
      content: 'Dive into the world of literature and uncover hidden gems from different genres and eras.',
      author: 'BookwormReviewer'
    },
    {
      title: 'The Joy of Learning New Languages',
      content: 'Learn about the challenges and rewards of picking up a new language in this language enthusiast blog.',
      author: 'PolyglotAdventures'
    },
  ];
  