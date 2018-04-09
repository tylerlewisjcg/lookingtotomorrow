insert into
skills
(skill_name, action_item, start_date, completion_date, due_date, id)
values
($1, $2, $3, $4, $5, $6);
SELECT *
from users
JOIN skills ON skills.id = users.id
WHERE users.id = $6
ORDER BY skill_id ASC;