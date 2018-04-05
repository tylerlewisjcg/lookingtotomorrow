CREATE TABLE work_history (
    work_id SERIAL PRIMARY KEY,
    company VARCHAR(255),
    job_title VARCHAR(255),
    start_date DATE,
    end_date DATE,
    job_responsibilities VARCHAR(1000),
    notable_achievements VARCHAR(1000),
    salary INTEGER,
    id INTEGER REFERENCES users
    );