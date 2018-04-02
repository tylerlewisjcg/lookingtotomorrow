CREATE TABLE current_skills (
    current_skill_id SERIAL PRIMARY KEY,
    current_skill VARCHAR(255),
    user_id INTEGER REFERENCES users
);