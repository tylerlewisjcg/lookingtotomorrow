UPDATE motivations
    SET why_im_here = $2,
        interests = $3,
        job_priorities = $4,
        favorite_thing = $5,
        least_favorite_thing = $6
            WHERE motivation_id = $1;