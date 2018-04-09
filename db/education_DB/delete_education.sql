DELETE FROM education
where education_id= $1;
SELECT *
from users
JOIN education ON education.id = users.id
WHERE users.id = $2
ORDER BY education_id;
