SELECT *
from users
JOIN skills ON skills.id = users.id
JOIN action_items ON skills.skill_id = action_items.skill_id
WHERE users.id = $1 AND action_items.completion_date IS NOT NULL
ORDER BY action_items.completion_date ASC
LIMIT 10;