insert into
action_items
    (
        action_item_description, 
        start_date, 
        completion_date,
        due_date, 
        skill_id
)
values
($1, $2, $3, $4, $5);
SELECT *
from skills
    JOIN action_items ON action_items.skill_id = skills.skill_id
WHERE skills.skill_id = $5
ORDER BY action_item_id ASC;
