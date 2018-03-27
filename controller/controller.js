let data = [
  {
    "name": "John Doe",
    "birthday": "1981-08-02"
  },
  {
    "name": "Katie Smith",
    "birthday": "1973-05-20"
  },
  {
    "name": "Anna Jackson",
    "birthday": "1993-10-15"
  }
];

module.exports.list_all_bdays = function(req, res) {
  res.json(data);
}

exports.add_a_bday = function(req, res) {
  console.log("Received new bday", req.body)

  if(!exists(req.body.name)){
    data.push(req.body)
    res.json({"message": "Added birthday!"})
  } else {
    res.json({"message": "Name already exists"})
  }
}

exports.remove_a_bday = function(req, res) {
  console.log("Deleting bday", req.body)

  if(exists(req.body.name)){
    data.splice(findIndexOf(req.body.name), 1)
    res.json({"message": "Deletion Successful"})
  } else {
    res.json({"message": "Name does not exist"})
  }

}

function exists(name) {
  for(i=0; i < data.length; i++) {
    if(data[i].name === name)
      return true
  }
  return false
}

function findIndexOf(name) {
  for(i=0; i < data.length; i++) {
    if(data[i].name === name)
      return i
  }
  return -1
}