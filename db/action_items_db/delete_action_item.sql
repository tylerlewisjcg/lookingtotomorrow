DELETE FROM action_items
where action_item_id= $1;
SELECT *
from skills
JOIN action_items ON action_items.skill_id = skills.skill_id
WHERE skills.skill_id = $2
ORDER BY action_item_id ASC;