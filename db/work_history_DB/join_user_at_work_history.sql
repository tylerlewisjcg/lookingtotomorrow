SELECT *
from users
JOIN work_history ON work_history.user_id = users.user_id;