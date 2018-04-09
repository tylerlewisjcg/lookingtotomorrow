UPDATE education
    SET institution = $2,
        certification_type = $3,
        start_date = $4,
        end_date = $5,
        field_of_study = $6,
        accomplishments = $7
            WHERE education_id = $1;
SELECT *
from users
JOIN education ON education.id = users.id
WHERE users.id = $8
ORDER BY education_id;