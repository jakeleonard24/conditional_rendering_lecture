const express = require('express')
const bodyParser = require('body-parser')
, cors = require('cors')

const app = express();
app.use(cors())

const image = 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/180173_10150092554203191_4894431_n.jpg?oh=010a1e43871245bdf463b299d5fb90ae&oe=5AE16168'
const michael = ['https://img.buzzfeed.com/buzzfeed-static/static/2016-07/22/18/campaign_images/buzzfeed-prod-fastlane01/michael-scott-quotes-that-are-still-hilarious-2-10277-1469225647-3_dblbig.jpg', 'https://images-production.global.ssl.fastly.net/uploads/photos/file/117262/michae-scott-quotes-5.jpg?auto=compress&crop=top&fit=clip&h=500&q=55&w=698', 'https://www.hercampus.com/s3/files/styles/full_width_embed/s3/screamin.png?itok=CmmqM4Ie', 'https://img.cinemablend.com/filter:scale/quill/c/7/c/3/1/3/c7c3135f21f3ce71ca8cb0fd407d3de15877dbb2.jpg?mw=600']
const db = app.get('db');


app.get('/api/picture', (req, res) => {
     
       res.send(image)
      
        
    })

    app.get('/api/list', (req, res) => {
        res.send(michael)
    })


const port = 3336;

app.listen(port, () => console.log(`port port port port port ${port}`));