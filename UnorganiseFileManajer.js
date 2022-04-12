let fs = require("fs");
let path = require("path");
let folderPath = (__dirname,"Module2");
let scanning = fs.readdirSync(folderPath);
console.log(scanning);



let organise = path.join(__dirname,"Module2");
console.log(organise);
for(let i = 0;i<scanning.length;i++){
    let exe = path.extname(scanning[i]);
     if(exe ==".html"){
         let dir = path.join(__dirname,"Module2","html")
        //  console.log(dir);
         if(!fs.existsSync(dir)){
             fs.mkdirSync(dir);
         }

         let srcF = path.join(__dirname,"Module2",scanning[i]);
         console.log(srcF);
         let destF= path.join(__dirname,"Module2","html",scanning[i]);
         console.log(destF);
         fs.copyFileSync(srcF,destF);
         fs.unlinkSync(srcF);
     }
     if(exe ==".mp3"){
        let dir = path.join(__dirname,"Module2","Music")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","Music",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".pdf"){
        let dir = path.join(__dirname,"Module2","pdf")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","pdf",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".jpg"){
        let dir = path.join(__dirname,"Module2","Pictures")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","Pictures",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".pptx"){
        let dir = path.join(__dirname,"Module2","ppt")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","ppt",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".png"){
        let dir = path.join(__dirname,"Module2","Pictures")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","Pictures",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".exe"){
        let dir = path.join(__dirname,"Module2","software")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","software",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".zip"){
        let dir = path.join(__dirname,"Module2","Compressed")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","Compressed",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
    if(exe ==".txt"){
        let dir = path.join(__dirname,"Module2","Text")
       //  console.log(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    
        let srcF = path.join(__dirname,"Module2",scanning[i]);
        console.log(srcF);
        let destF= path.join(__dirname,"Module2","Text",scanning[i]);
        console.log(destF);
        fs.copyFileSync(srcF,destF);
        fs.unlinkSync(srcF);
    }
}







