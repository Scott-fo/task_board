db = db.getSiblingDB("lists");
db.createCollection("lists");
db.lists.insert({
  id: "tt",
  name: "Test List",
});
