import fs from "fs/promises";
import {writeFile, readFile, appendFile} from "fs/promises";

//await writeFile("stud.txt"," Arsh Rana \nRollNo: 21");
//console.log("File written");
//const data = await readFile("stud.txt","utf-8");
//console.log(`file contents : ${data}`);

 const addContent = async (fname, content)=>{
      writeFile(fname, content);
    console.log("File Written");
 };
 const readContent= async (fname)=>{
      const data =  await readFile(fname,'utf-8');
      return data;
 };

 const appendData = async (fname, content)=>{
     await appendFile(fname, "\n"+ content);
     console.log("data apprehended ");
 };

await addContent("notes.txt", "FS is easy in JS");
 console.log(await readContent("notes.txt"));
await appendData("notes.txt", "yayayayayaya");

 console.log(await readContent("notes.txt"));