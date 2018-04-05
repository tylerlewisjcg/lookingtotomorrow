CREATE TABLE education (
    education_id SERIAL PRIMARY KEY,
    institution VARCHAR(255),
    certification_type VARCHAR(1000),
    start_date DATE,
    end_date DATE,
    field_of_study VARCHAR(1000),
    accomplishments VARCHAR(1000),
    id INTEGER REFERENCES users
    );