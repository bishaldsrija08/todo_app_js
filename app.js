const todo = [];
let req = prompt("Please your enter your choice!");
while (true) {
  if (req == "quit") {
    console.log("closing...");
    break;
  }
  if (req == "list") {
    console.log("_________________________");
   for(let i =0; i<todo.length; i++) {
      console.log(i+1, todo[i]);
    }
    console.log("_________________________");
  } else if (req == "add") {
    let task = prompt("Enter your today todo!");
    todo.push(task);
    console.log("Task added!");
  } else if (req == "delete") {
    let idx = prompt("Enter the task index you wanted to delete!");
    todo.splice(idx,1)
    console.log("Task deleted!");
  }else{
    console.log("please input good choice!")
    break;
  }
  req = prompt("Please your enter your choice!");
}
