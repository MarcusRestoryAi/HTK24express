document.getElementById("btnFetch").addEventListener("click", async () => {
  //Hämta JSON data från service
  let resp = await fetch("/data")

  //Konvertera resp-payload till JS struktur (i detta fall en lista)
  let data = await resp.json()

  //Skapa en HTML table komponent
  let table = document.createElement("table")

  console.log(data)

  //Skapa en ForEach loop
  data.forEach( (person) => {
    //Skapa en TR komponent
    let tr = document.createElement("tr")

    //Skapa en ForIn loop för att gå igenom varje attribut i Person
    for (let attr in person) {
      //Skapa en TD komponent
      let td = document.createElement("td")
      //Fyll den med data
      td.innerText = person[attr]
      //td.innerText = person["name"]
      tr.appendChild(td)
    }

    //Placera den färdiga raden i Table
    table.appendChild(tr)
  })

  document.getElementById("tabelOutput").appendChild(table)
})