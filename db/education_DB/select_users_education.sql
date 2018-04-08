SELECT *
from users
JOIN education ON education.id = users.id
WHERE users.id = $1;


