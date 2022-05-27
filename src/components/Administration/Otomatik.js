import React from "react";

const Otomatik = ({eczaneler, setEczaneler, dates}) => {
    let secilebilirEczaneler = [{"Merkez":["Akın","Altıerler","Aytaç","Baca","Baraj","Begüm","Berkay","Çakbil","Can","Çebe","Cent","Çiftçi","Deniz","Denizim","Derdiman","Dinçer","Doktoroğlu","Doruk","Edirne Hayat","Eray","Eren Savaşçı","Erkin","Ezgi Engin","Filiz","Fıçıcıoğlu","Giray","Gizem Birkan","Gölet","Gülden","Günaydın","Güneşim","Gürak","Gürkan","Güven","Hatipoğlu","İncinur","Kaya","Kıyık","Koray","Korkut","Kutlutaş","Mehmet Ay","Mercan","Meriç","Murat","Nar","Ömür","Özdemir","Özgür","Pamuk","Pirko","Reyhan","Rukiye Kantar","Sağlam","Sağlık","Şahin","Sancaklı","Selimiye","Seray","Şeren","Serhat","Şifa","Şimşek","Sözer","Süler","Taşkıran","Tekin","Trakya","Tülin","Ülkü","Umut","Uygar","Uzun","Yaşam"]},{"Meriç":["Öden","Yeni Meriç"]},{"Havsa":["Derman","Edirne","Gün","Havsa","Yavuz"]},{"Enez":["Sağlık","Hayat","Saygın"]},
                                {"Keşan":["Akar","Alkan","Banguoğlu","Bilge Nur","Birgül","Deniz","Ebru","Erkan","Gökhan","Gölemen","Güven","Hayat","Kanık","Kuran","Mankaliye","Meriç","Merkez","Murat","Ömür","Pınar","Serap","Simge","Sultan","Toker","Türkkal","Uğur","Uysal","Yeni"]},{"Lalapaşa":["Sevil","Beyhan"]},{"Süloğlu":["İnci","Süloğlu"]},{"İpsala":["Çınar","Coşkun","Devranoğlu","Uysal"]},{"Uzunköprü":["Arzu","Aylin","Aytin","Başak","Bizim","Çağla","Deva","Gencan","Güneş","Halit Orhon","Hayat","Manga","Meriç","Müge","Özge","Şifa","Sözer","Tufan","Uğur","Vatan","Yavuz"]}]
    const birGunAta = () => {
      
    }
    const birHaftaAta = () => {

    }
    const birAyAta = () => {
      
    }


    return(
        <div className='atama_otomatik'>
          <h2>Otomatik Ata</h2>
          <form>
            <button onClick={birGunAta}>1 Gün</button>
            <button onClick={birHaftaAta}>1 Hafta</button>
            <button onClick={birAyAta}>1 Ay</button>
            <input type="submit"></input>
          </form>
        </div>
    )
}

export default Otomatik;