# Todo-project
 This is a todo project made in TypeScript

 I created it using Spck editor 

 button.ts contains Button function which takes button's class name, icon name and function 

```typescript
// first import Btn class from button.ts
import { Btn } from "./button";

// now create new button
Btn.Button("delete", "delete", function() {
  document getElementById("task-list").removeChild(listElem);
});
```

 taskAdd.ts contains newTask function which takes label's name and add a new task in task list

```typescript
// first import taskAdd class from taskAdd.ts
import { taskAdd } from "./taskAdd";

// new create new task
taskAdd.newTask("Wake-up");
```
