function rand(max,min){
    min *= 1000; 
    max *= 1000;//ja converte para segundos

    return Math.floor(Math.random() * (max - min) + min); //floor para arredondar
    //para gerar um numero aleatorio entre um intervalo de dois numeros
}

function promise(msg, tempo){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            if(typeof(msg)=== 'string'){
                resolve(msg);
            }else if(typeof(msg)==='number'){
                reject("ERRO :/ ");
            }

        }, tempo);

        

    })
}

/*promise("Conexão 1 ok", rand(1,5))
    .then((msg)=> { 
        console.log(msg);
        return promise(22, rand(1,4));
    }).then(
        (msg)= > {
            console.log(msg);
        }
    ).catch((erro)=>{
        console.log(erro);
    });
    */

 //usando assync e await

 async function executa(){
    try {
        const fase1 = await promise("conexão1 ok", rand(1,5));
        console.log(fase1);
        const fase2 = await promise(222, rand(1,3));
        console.log(fase2);
    }

catch(e) {
    console.log(e);
}
 }

executa();