UPDATE posts
SET blog_post = $2
WHERE id = $1;
-- SELECT blog_post FROM posts;
