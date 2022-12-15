db = db.getSiblingDB("tasks");
db.createCollection("tasks");
db.tasks.insert({
  id: "ss",
  name: "Complete Task Board",
  description: "Complete Task board for Optimise assessment",
  listId: "tt",
  completed: false,
  unixTime: "1671926400",
});
