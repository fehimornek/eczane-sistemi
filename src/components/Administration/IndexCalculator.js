const indexCalculator = (id_of_date, minDate, lenMonth) =>{
    let seciliTarih = new Date(document.getElementById(id_of_date).value)
    console.log(seciliTarih)
    let seciliAy = seciliTarih.getMonth() + 1
    let seciliGun = seciliTarih.getDate()
    let minMonth = Number(minDate.split("-")[1])
    let minDay = Number(minDate.split("-")[2])
    let index = 0;
    if (minMonth === seciliAy){
        index= seciliGun - minDay
    }
    else if (minMonth !== seciliAy){
        index = seciliGun + lenMonth - minDay
    }
    return index
  }
  export default indexCalculator