import React from "react";

const Otomatik = ({eczaneler, setEczaneler}) => {
    let secilebilirEczaneler = {merkez:["Akın","Altıerler","Aytaç","Baca","Baraj","Begüm","Berkay","Çakbil","Can","Çebe","Cent","Çiftçi","Deniz","Denizim","Derdiman","Dinçer","Doktoroğlu","Doruk","Edirne Hayat","Eray","Eren Savaşçı","Erkin","Ezgi Engin","Filiz","Fıçıcıoğlu","Giray","Gizem Birkan","Gölet","Gülden","Günaydın","Güneşim","Gürak","Gürkan","Güven","Hatipoğlu","İncinur","Kaya","Kıyık","Koray","Korkut","Kutlutaş","Mehmet Ay","Mercan","Meriç","Murat","Nar","Ömür","Özdemir","Özgür","Pamuk","Pirko","Reyhan","Rukiye Kantar","Sağlam","Sağlık","Şahin","Sancaklı","Selimiye","Seray","Şeren","Serhat","Şifa","Şimşek","Sözer","Süler","Taşkıran","Tekin","Trakya","Tülin","Ülkü","Umut","Uygar","Uzun","Yaşam"],
                                meric:["Öden","Yeni Meriç"],
                                havsa:["Derman","Edirne","Gün","Havsa","Yavuz"],
                                enez:["Sağlık","Hayat","Saygın"],
                                kesan:["Akar","Alkan","Banguoğlu","Bilge Nur","Birgül","Deniz","Ebru","Erkan","Gökhan","Gölemen","Güven","Hayat","Kanık","Kuran","Mankaliye","Meriç","Merkez","Murat","Ömür","Pınar","Serap","Simge","Sultan","Toker","Türkkal","Uğur","Uysal","Yeni"],
                                lalapasa:["Sevil","Beyhan"],
                                suloglu:["İnci","Süloğlu"],
                                ipsala:["Çınar","Coşkun","Devranoğlu","Uysal"],
                                uzunkopru:["Arzu","Aylin","Aytin","Başak","Bizim","Çağla","Deva","Gencan","Güneş","Halit Orhon","Hayat","Manga","Meriç","Müge","Özge","Şifa","Sözer","Tufan","Uğur","Vatan","Yavuz"]}

    let indexes = {merkez:0, meric:0, havsa:0, enez:0, kesan:0, lalapasa:0, suloglu:0,ipsala:0,uzunkopru:0}

    const birAyAta = () => {
      let updated_eczaneler = eczaneler
      for (let i = 0; i < 30; i++){
        updated_eczaneler[i].Merkez1 = secilebilirEczaneler.merkez[indexes.merkez]
        updated_eczaneler[i].Merkez2 = secilebilirEczaneler.merkez[indexes.merkez + 1]
        indexes.merkez += 2
        updated_eczaneler[i].Meriç = secilebilirEczaneler.meric[indexes.meric]
        indexes.meric += 1
        updated_eczaneler[i].Havsa = secilebilirEczaneler.havsa[indexes.havsa]
        indexes.havsa += 1
        updated_eczaneler[i].Enez = secilebilirEczaneler.enez[indexes.enez]
        indexes.enez += 1
        updated_eczaneler[i].Keşan = secilebilirEczaneler.kesan[indexes.kesan]
        indexes.kesan += 1
        updated_eczaneler[i].Lalapaşa = secilebilirEczaneler.lalapasa[indexes.lalapasa]
        indexes.lalapasa += 1
        updated_eczaneler[i].Süloğlu = secilebilirEczaneler.suloglu[indexes.suloglu]
        indexes.suloglu += 1
        updated_eczaneler[i].İpsala = secilebilirEczaneler.ipsala[indexes.ipsala]
        indexes.ipsala += 1
        updated_eczaneler[i].Uzunköprü = secilebilirEczaneler.uzunkopru[indexes.uzunkopru]
        indexes.uzunkopru += 1
        
        if (indexes.merkez >= secilebilirEczaneler.merkez.length) indexes.merkez = 0
        if (indexes.meric >= secilebilirEczaneler.meric.length) indexes.meric = 0
        if (indexes.havsa >= secilebilirEczaneler.havsa.length) indexes.havsa = 0
        if (indexes.enez >= secilebilirEczaneler.enez.length) indexes.enez = 0
        if (indexes.kesan >= secilebilirEczaneler.kesan.length) indexes.kesan = 0
        if (indexes.lalapasa >= secilebilirEczaneler.lalapasa.length) indexes.lalapasa = 0
        if (indexes.suloglu >= secilebilirEczaneler.suloglu.length) indexes.suloglu = 0
        if (indexes.ipsala >= secilebilirEczaneler.ipsala.length) indexes.ipsala = 0
        if (indexes.uzunkopru >= secilebilirEczaneler.uzunkopru.length) indexes.uzunkopru = 0
      }
      setEczaneler(updated_eczaneler)

      document.getElementById("errorMessage").style.visibility = "visible";
      document.getElementById("errorMessage").innerHTML="Degisiklikler kaydedildi!";
      setTimeout(function(){
        document.getElementById("errorMessage").style.visibility = "hidden";
        },1000);

    }

    return(
        <div className='atama_otomatik'>
          <h2>Otomatik Ata</h2>
          <button onClick={birAyAta} className="pick_button" style={{padding: "0.4rem 1.5rem"}}>1 aylık eczane ata</button>
        </div>
    )
}

export default Otomatik;