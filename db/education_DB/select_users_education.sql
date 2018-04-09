SELECT *
from users
JOIN education ON education.id = users.id
WHERE users.id = $1
ORDER BY education_id ASC;


