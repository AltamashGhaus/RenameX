const fs = require('fs');
const replaceThis = "Carry"
const replaceWith = "Parry"
const preview = false
const path = require("path");
const folder = __dirname  //Can replace folder with "data/" for hardcoded folder inside the project

try{
    //fs.readdir("data", (err, data) => {
    fs.readdir(folder, (err, datas) => {

        //console.log(data);
        console.log(folder)
        for(let index=0; index<datas.length;index++)
        {
          const item = datas[index];
          
          let oldFile = path.join(folder,item)
          let newFile = path.join(folder, item.replaceAll(replaceThis,replaceWith))

          if(!preview)
          {
            fs.rename(oldFile,newFile, ()=> {
                console.log("Rename Succes : ", item+" ======> "+ newFile)
             })
          }
          else{
            if("data/"+item != newFile)
                console.log("data/"+item+" will be renamed with "+newFile)
          }
        }
        
      })
}catch(err){
    console.log(err);
}