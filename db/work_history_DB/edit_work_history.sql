UPDATE work_history
    SET company = $2,
        job_title = $3,
        start_date = $4,
        end_date = $5,
        job_responsibilities = $6,
        notable_achievements = $7,
        salary = $8
            WHERE work_id = $1
            RETURNING *;