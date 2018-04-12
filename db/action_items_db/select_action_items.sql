SELECT *
from skills
JOIN action_items ON skills.skill_id = action_items.skill_id
WHERE skills.skill_id = $1
ORDER BY action_item_id ASC;
