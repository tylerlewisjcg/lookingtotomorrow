DELETE FROM work_history
where work_id = $1;
SELECT *
from users
JOIN work_history ON work_history.id = users.id
WHERE users.id = $2
ORDER BY work_id ASC;
