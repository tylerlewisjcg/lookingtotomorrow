INSERT INTO uploads_edu
(img_url, id)
VALUES
($1, $2);
SELECT *
FROM uploads_edu
JOIN users on users.id = uploads_edu.id
WHERE users.id = $2
ORDER BY upload_edu_id ASC;