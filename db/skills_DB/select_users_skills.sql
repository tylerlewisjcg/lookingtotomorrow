SELECT *
from users
JOIN skills ON skills.id = users.id
WHERE users.id = $1
ORDER BY skill_id ASC;


