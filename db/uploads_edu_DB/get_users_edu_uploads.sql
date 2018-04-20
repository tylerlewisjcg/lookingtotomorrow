SELECT *
FROM uploads_edu
JOIN users on users.id = uploads_edu.id
WHERE users.id = $1
ORDER BY upload_edu_id ASC;