console.log('Starting app.js');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs
.command('add','Add a new Note',{
	title:{
		describe:"Title of Note",
		demand :true,

	},
body:{
		describe:"Body of Note",
		demand :true,

	}
})
.command('remove','Remove a Note',{
	title:{
		describe:"Title of Note",
		demand :true,

	}
})
.command('read','Read a Note',{
	title:{
		describe:"Title of Note",
		demand :true,

	}
})
.command('list','Listing all Note',{
	
})
.help()
.argv; 
var command=argv._[0];


if(command==='add')
{
var note=notes.addNote(argv.title,argv.body);
  if(note)
{
console.log('--');
console.log(`Title: ${note.title}`);
console.log(`Body: ${note.body}`);
}
else 
{console.log('Note Title Taken Already');
}
}
else if(command==='list')
{
	var note=notes.getAll();
	for(var i=0;i<note.length;i++)
	{
		
		console.log(` ${i+1}. Title: ${note[i].title}             Body: ${note[i].body}`);
      
	}
}
else if(command==='read')
{  var note=notes.getNote(argv.title);
	if(note)
		{console.log("Note Found");
         console.log('--');
         console.log(`Title: ${note.title}`);
         console.log(`Body: ${note.body}`);
     }
	else 
	{
		console.log("Note Not Found");
	}
	
}
else if(command==='remove')
{notes.removeNote(argv.title);
}
else 
{console.log('Command not recognised');
}


