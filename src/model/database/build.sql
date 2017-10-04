BEGIN;

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE "tasks" (
	"id" serial NOT NULL,
	"content" varchar(100) NOT NULL,
	"task_time" timestamp DEFAULT now(),
	"done" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT Tasks_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO tasks (content) VALUES ('Do Task in your projeect'),
('Drink tea'),
('Froget');


COMMIT;
