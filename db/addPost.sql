INSERT INTO posts (blog_post, title)
VALUES ($1 , $2);
SELECT blog_post, title FROM posts;
