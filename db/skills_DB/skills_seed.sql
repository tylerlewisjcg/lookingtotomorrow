CREATE TABLE skills (
    skill_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(255),
    start_date DATE,
    completion_date DATE,
    due_date DATE,
    id INTEGER REFERENCES users
    );