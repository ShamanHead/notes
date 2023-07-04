<%*
const task_name = await tp.system.prompt("Task Name");

let folders = tp.user.getFilesFromDirectory("Projects", this.app).map((el) => el);

const project_name = await tp.system.suggester(folders, folders);

await tp.file.rename(project_name + " " + task_name);

const estimate = tp.system.prompt("Estimate time", "", false, false); 
const tracked = tp.system.prompt("Tracked time", "", false, false); 
%>
<% "---\nproject_name: \"" + project_name + "\"\ntask_name: \"" + task_name + "\"\ndate: \"" + tp.date.now("YYYY-MM-DD") + "\"\n---" %>
# <% task_name %>

#### Проект: [[<% project_name %>]]
#### Estimate time: <% estimate %> hours
#### Tracked time: <% tracked %> hours

### Notes

```dataview
TABLE note_name AS "Note", date as "Date"
FROM "Notes"
WHERE project_name = this.project_name
```