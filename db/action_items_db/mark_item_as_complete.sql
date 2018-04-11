UPDATE action_items
    SET completion_date = $1
     WHERE action_item_id = $2;

SELECT *
from skills
JOIN action_items ON skills.skill_id = action_items.skill_id
WHERE skills.skill_id = $3
ORDER BY action_item_id ASC;