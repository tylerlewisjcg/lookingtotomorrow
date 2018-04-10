CREATE TABLE action_items (
    action_item_id SERIAL PRIMARY KEY,
    action_item_description VARCHAR(1000),
    start_date DATE,
    completion_date DATE,
    due_date DATE,
    skill_id INTEGER REFERENCES skills
    );