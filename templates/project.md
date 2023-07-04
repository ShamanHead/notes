<%*
const project_name = await tp.system.prompt("Project Name");

await tp.file.rename(project_name);
%>
# <% project_name %>

## Доступы
<%*
	let acc = [],
		mode = 0,
		pointer = 0;

	while(true) {
		if(mode === 0) {
			let prompt = await tp.system.prompt("Название доступа", "", false, true); 
			
			if(!prompt) break;
			
			acc.push([]);
			acc[pointer] = [
				prompt,
				null
			];
   
			mode = 1;
		} else {
			let prompt = await tp.system.prompt("Значение доступа", "", false, true); 

			if(!prompt) break;

			acc[pointer][1] = prompt
			mode = 0;
			pointer++;
		}
	}

	let table = "|Название|Значение|\n|:-----|:-----|\n";

	acc.map(el => { table += "|" + el[0].replace(/\n/gm, "<br>") + "|" + el[1].replace(/\n/gm, "<br>"); + "|\n" } )
%>

<% table %>

## Общая информация
<%*
const info = tp.system.prompt("Общая информация", "", false, true)
%>
<% info %>