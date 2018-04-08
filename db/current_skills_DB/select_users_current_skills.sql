SELECT *
from users
JOIN current_skills ON current_skills.id = users.id
WHERE users.id = $1;
