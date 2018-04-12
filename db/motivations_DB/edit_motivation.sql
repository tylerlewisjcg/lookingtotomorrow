UPDATE motivations
    SET why_im_here = $1,
        interests = $2,
        job_priorities = $3,
        favorite_thing = $4,
        least_favorite_thing = $5;
SELECT *
from users
JOIN motivations ON motivations.id = users.id
WHERE users.id = $6
ORDER BY motivation_id ASC;

