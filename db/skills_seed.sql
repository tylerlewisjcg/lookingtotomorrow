CREATE TABLE skills (
    skill_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(255),
    action_item TEXT [],
    start_date DATE,
    completion_date DATE,
    due_date DATE,
    user_id INTEGER REFERENCES users
    );