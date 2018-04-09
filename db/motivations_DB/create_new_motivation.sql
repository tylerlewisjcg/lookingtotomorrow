insert into
motivations
(why_im_here, interests, job_priorities, favorite_thing, least_favorite_thing, id)
values
($1, $2, $3, $4, $5, $6);
SELECT *
from users
JOIN motivations ON motivations.id = users.id
WHERE users.id = $6;
