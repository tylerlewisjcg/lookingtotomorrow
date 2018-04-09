insert into
current_skills
(current_skill, id)
values
($1, $2);
SELECT *
from users
JOIN current_skills ON current_skills.id = users.id
WHERE users.id = $2;