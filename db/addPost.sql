INSERT INTO posts (blog_post, title, imageurl)
VALUES ($1 , $2, $3);
SELECT blog_post, title, imageurl FROM posts;
