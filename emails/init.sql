CREATE TABLE IF NOT EXISTS subscriptions (
  id int AUTO_INCREMENT,
  firstName VARCHAR(255),
  email VARCHAR(255),
  PRIMARY KEY(id)
);

INSERT INTO subscriptions (firstName, email)
VALUES ("Elon", "elon@twitter.com");
