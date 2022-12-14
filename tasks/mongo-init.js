db = db.getSiblingDB("tasks");
db.createCollection("tasks");
db.tasks.insert({
  name: "Complete Job Board",
  description: "Complete job board for Optimise assessment",
});
