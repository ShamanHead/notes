<%*
await tp.file.rename(tp.date.now("Y-M-D"));
tp.file.title = "Daily " + tp.date.now("Y-M-D");

let projectsText = "";
%>
<% "---\ndate: " + tp.date.now("Y-M-D") + "\n---" %>

# [[<% tp.file.title %>]] 

```dataviewjs
let formatted = [],
	tasks = [],
	date = dv.current().file.frontmatter.date;

console.log(date)

for(const task of dv.pages('"Tasks"')) {
	console.log(task.file.frontmatter.date);
	let taskDay = new Date(task.file.frontmatter.date).getTime();
	let today = new Date(date)
	today.setDate(today.getDate() + 1)
	today.setUTCHours(0,0,0,0);
	let yesterday = new Date(date)
	yesterday.setDate(yesterday.getDate() - 1)
	
	yesterday = yesterday.getTime();
	today = today.getTime();
	console.log(today, yesterday, taskDay, taskDay > yesterday, taskDay <= today)
	if(taskDay > yesterday && taskDay <= today) {
		tasks.push([task.file.name, task.file.frontmatter.task_name, task.file.frontmatter.project_name]);
	}
}

for(const task of tasks) {
	for(const project of dv.pages('"Projects"')) {
		if(task[2] === project.file.name) {
			formatted.push(["[[" + project.file.name + "]]"])
		}
	}
}

dv.table(["Task", "Project"], tasks.map(el => el = ["[[" + el[0] + "]]", "[[" + el[2] + "]]"]))

dv.table(["Project"], formatted)
```