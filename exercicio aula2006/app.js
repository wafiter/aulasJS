//função pra receber a cidade do usuario

const formulario = document.getElementById('meuForm')
    console.log(formulario)

    formulario.addEventListener ('submit', (event) => {
        event.preventDefault()
        
    const cidade = formulario.elements['cidade']
   
            
    const cidadeUs = cidade.value

    console.log(cidadeUs)
    
    buscarCidade(cidadeUs)
       

        
    })
    

    

    
//funções que buscam a cidade e o clima

const buscarCidade = async (param) => {
    try {
        console.log(param)
        const buscarCidade = await fetch (`http://dataservice.accuweather.com/locations/v1/search?q=${param}&apikey=pKGoL46YooFTXALFpTTAnWx0tADGuEKw`)
        console.log(buscarCidade)
        const cidade = await buscarCidade.json()
        console.log(cidade)

        let cidadekey = cidade[0].Key
        
        console.log(cidadekey)  
       
        verClima(cidadekey)
      
               
    } catch (error) {
        console.log(`ocorreu um erro: ${error}` )
        
    }
    
}




const verClima = async (cidadekey) => {
    try {
        
        const buscarClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cidadekey}?apikey=pKGoL46YooFTXALFpTTAnWx0tADGuEKw`)
        console.log(buscarClima)
        const clima = await buscarClima.json()
        console.log(clima)

        const data = clima[0].LocalObservationDateTime
        const tempo = clima[0].WeatherText
        const temperatura= clima[0].Temperature.Metric.Value

        const databr = new Date(data).toLocaleDateString('pt-BR')

    const caixa = document.getElementById('caixa')
    caixa.innerHTML = `
                        <div id= "data" >Data: ${databr}</div>
                        <div id="descricao">Discrição: ${tempo}</div>
                        <div id="temperatura">Temperatura: ${temperatura}</div>`



    } catch (error) {
        console.log(`falar: ${error}`)
        
    }

}   
    
