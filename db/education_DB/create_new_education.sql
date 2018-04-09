insert into
education
(institution, certification_type, start_date, end_date, field_of_study, accomplishments, id)
values
($1, $2, $3, $4, $5, $6, $7);
SELECT *
from users
JOIN education ON education.id = users.id
WHERE users.id = $7;