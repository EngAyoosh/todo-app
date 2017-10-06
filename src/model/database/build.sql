BEGIN;

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  content VARCHAR(100) not null,
  task_time TIMESTAMP DEFAULT now(),
  done BOOLEAN DEFAULT false
);

INSERT INTO tasks (content) VALUES ('first task'),
('second task'),
('third task');

COMMIT ;
