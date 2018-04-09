SELECT *
from users
JOIN motivations ON motivations.id = users.id
WHERE users.id = $1
ORDER BY motivation_id ASC;

