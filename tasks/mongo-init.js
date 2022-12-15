db = db.getSiblingDB("tasks");
db.createCollection("tasks");
db.tasks.insert({
  id: "ss",
  name: "Complete Job Board",
  description: "Complete job board for Optimise assessment",
  listId: 1,
  completed: false,
  unixTime: "1671926400",
});
