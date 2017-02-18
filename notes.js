console.log('starting notes.js');


const fs=require('fs');
var fetchNotes=()=>{
	try
	{
	var noteString=fs.readFileSync("notes-data.json");
	return JSON.parse(noteString);
	}catch(e)
	{return [];
	};
};
var saveNotes=(notes)=>
{
	fs.writeFileSync("notes-data.json",JSON.stringify(notes));
}
var addNote=(title,body) => {
var notes=fetchNotes();
var note={
	title,
	body
};
var duplicateNotes= notes.filter((note) => note.title===title);
if(duplicateNotes.length===0)
{notes.push(note);
saveNotes(notes);
}
return note;
};
var getAll=()=>{
	
var notes=fetchNotes(); 
return notes;};
 var getNote=(title)=>{
 	
 	var notes=fetchNotes();
 	var x=notes.filter((note) => note.title===title);
 	return x[0];
 };

    var removeNote=(title)=>{
	var notes=fetchNotes();
	var filteredNotes= notes.filter((note) => note.title!==title);
	saveNotes(filteredNotes);
	if((notes.length)==filteredNotes.length)
	{
		console.log("No note Removed ");}
	else {
		console.log("Note Removed successfully ");}
};
module.exports={
	addNote,
	getAll,
	getNote,
	removeNote
}
