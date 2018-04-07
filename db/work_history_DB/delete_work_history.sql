DELETE FROM work_history
where work_id = $1
RETURNING *;