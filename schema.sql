CREATE TABLE rolls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  volume INTEGER NOT NULL,
  row_num INTEGER NOT NULL,
  column_num INTEGER NOT NULL,
  rolled_at INTEGER NOT NULL
);

CREATE INDEX idx_rolls_user_volume
ON rolls (user_id, volume);

CREATE INDEX idx_rolls_user_time
ON rolls (user_id, rolled_at);

CREATE TABLE alternates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  prompt_id INTEGER NOT NULL,
  cycle INTEGER NOT NULL DEFAULT 1,
  volume INTEGER NOT NULL,
  row_num INTEGER NOT NULL,
  column_num INTEGER NOT NULL,
  given_at INTEGER NOT NULL,
  UNIQUE (user_id, prompt_id, cycle)
);

CREATE INDEX idx_alternates_user_cycle
ON alternates (user_id, cycle);
