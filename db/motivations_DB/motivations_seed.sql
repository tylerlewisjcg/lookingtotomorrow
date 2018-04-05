CREATE TABLE motivations (
    motivation_id SERIAL PRIMARY KEY,
    why_im_here VARCHAR(1000),
    interests VARCHAR(1000),
    job_priorities VARCHAR(1000),
    favorite_thing VARCHAR(1000),
    least_favorite_thing VARCHAR(1000),
    id INTEGER REFERENCES users
    );