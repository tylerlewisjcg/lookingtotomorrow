DELETE FROM current_skills
where current_skill_id= $1;
SELECT *
from users
JOIN current_skills ON current_skills.id = users.id
WHERE users.id = $2
ORDER BY current_skill_id ASC;