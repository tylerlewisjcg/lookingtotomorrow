SELECT *
from users
JOIN current_skills ON current_skills.user_id = users.user_id;