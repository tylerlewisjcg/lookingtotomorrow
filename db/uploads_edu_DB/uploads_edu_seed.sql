CREATE TABLE uploads_edu
(
upload_edu_id SERIAL PRIMARY KEY,
img_url TEXT,
id INTEGER REFERENCES users
);