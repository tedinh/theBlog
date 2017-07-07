UPDATE restaurants
SET description = $2
WHERE id = $1;
