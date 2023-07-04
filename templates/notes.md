<%*
const dv = app.plugins.plugins.dataview.api;

let folders = tp.user.getFilesFromDirectory("Projects", this.app).map((el) => el);

let noteName = await tp.system.prompt("Note name"),
	projectName = await tp.system.suggester(folders, folders),
	tasks = [],
	taskName = "";

for(let task of dv.pages('"Tasks"')) {
	if(task.file.frontmatter.project_name === projectName) {
		tasks.push([task.file.frontmatter.task_name, task.file.name]);
	}
}

taskName = await tp.system.suggester(tasks.map((el) => el[0]), tasks.map((el) => el[0]))

await tp.file.rename(projectName + " " + noteName);

%>
<% "---\nproject_name: \"" + projectName + "\"\nnote_name: \"" + noteName + "\"\ndate: \"" + tp.date.now("Y-M-D") + "\"\ntask_name: \"" + taskName + "\"\n---\n"  %>

# <% noteName %>