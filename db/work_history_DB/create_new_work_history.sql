insert into
work_history
(company, job_title, start_date, end_date, job_responsibilities, notable_achievements, salary, id)
values
($1, $2, $3, $4, $5, $6, $7, $8);
SELECT *
from users
JOIN work_history ON work_history.id = users.id
WHERE users.id = $8
ORDER BY work_id ASC;


