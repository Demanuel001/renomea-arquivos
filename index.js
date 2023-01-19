let fs = require('fs');
let patch = './arquivos/';
fs.readFile( patch + 'lista.txt', 'utf8', (err,data)=>{
    if(err){
        console.log("Erro ao tentar ler o arquivo");
    }else{
        let nameOfRename = data.split('\n');
        nameOfRename.forEach((line)=>{
            let oldName = 'foto' + line.slice(0, 6) + '.jpg';
            let newName = line.slice(7,line.length-1) + '.jpg';
            let nameDir = 'maria/';
            for( x = 1; x <= 2; x++ ){
                nameDir = x == 2 ? 'vendedor/' : nameDir; 
                fs.rename( patch + nameDir + oldName, patch + nameDir + newName, (err)=>{
                    if(err){
                        console.log('Erro ao tentar renomear o arquivo ' + oldName);
                    }else{
                        console.log( "Arquivo " + oldName + " renomeado para " + newName );
                    }
                })
            }
        });
    }
});
