SELECT *
from users
JOIN work_history ON work_history.id = users.id
WHERE users.id = $1;