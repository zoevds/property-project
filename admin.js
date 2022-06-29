function editItem(ID) {
  let item = ID.find((item) => item.ID === ID);
  item.title = "new";
}

editItem($[item.ID]);
