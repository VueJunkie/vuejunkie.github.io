#!/usr/bin/env node

const fs = require('fs');

let posts = fs.readdirSync('./_posts').map((post)=>{
  let p = post.split('-');
  return {
    path: `_posts/${post}`,
    year: p[0],
    month: p[1],
    day: p[2],
    title: p.slice(3, p.length).join('-').replace('.md', ''),
  }
})

fs.writeFileSync('./src/store/posts.json', JSON.stringify(posts,null,2));