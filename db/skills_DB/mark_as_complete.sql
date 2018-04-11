UPDATE skills
    SET completion_date = $1
     WHERE skill_id = $2;

SELECT *
from users
JOIN skills ON skills.id = users.id
WHERE users.id = $3
ORDER BY skill_id ASC;
