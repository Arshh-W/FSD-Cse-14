import fs from "fs/promises";
import {writeFile, readFile} from "fs/promises";

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

await addContent("notes.txt", "FS is easy in JS");
await console.log(await readContent("notes.txt"));