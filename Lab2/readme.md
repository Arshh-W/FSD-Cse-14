# File System of Node Js
It allows JS Code running outside the browser and internet to directly interact with the OS.
## Common Operations on file/folder

CRUD- Create, Retrieve(READ), Update, Delete

- Reading and Writing files -> readFile(), writeFile, appendFile()
- Directory Management - mkdir(), rmdir(), readddir()

-Metadata/information => stat(), lstat(), fstat();
-watchingggg for vhanged -> watch(), watchFile(), unwatchFile()
-streaming Large files-> createReadStream(), createWriteStream()

-File Operations -> rename(), truncate(), unlink()zlink(), syslink()

- Await can be used with any promise in an async function. That Async function will also be accessed with await Keyword