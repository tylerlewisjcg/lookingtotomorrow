DELETE FROM skills
where skill_id= $1;
SELECT *
from users
JOIN skills ON skills.id = users.id
WHERE users.id = $2
ORDER BY skill_id ASC;