const vols = [{
    destination: 'Martinique',
    date_depart: '01/25/2019',
    compagnie_aerienne: 'Ryanair',
    numVol: 'xxxxx',
    prix: '350',
    dureeTrajet: '6'
  },
  {
    destination: 'Londres',
    date_depart: '07/25/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '150',
    dureeTrajet: '2'
  },
  {
    destination: 'Paris',
    date_depart: '08/12/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '50',
    dureeTrajet: '1'
  },
  {
    destination: 'Mexico',
    date_depart: '09/03/2019',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '1350',
    dureeTrajet: '8'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/12/2020',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '750',
    dureeTrajet: '14'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/11/2020',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '850',
    dureeTrajet: '14'
  }
  ];
  
  
  //Affichez tous les vols (destination - Date de départ- compagnie aérienne -
  //numero de vol - prix - durée du trajet)
  
  
  // console.log(vols);
  
  
  //Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
  
  // for (const vol of vols) {
  //   if(vol.dureeTrajet < 7) {
  //     console.log(vol);
  //   }
  // }
  
  //Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
  
  // for (const vol of vols) {
  //   if (vol.destination == 'Tokyo' && vol.compagnie_aerienne == "Air france") {
  //     console.log(vol);
  //   };
  // }
  
  //Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
  //voyagent avec Air france
  
  // for (const vol of vols) {
  //   if (vol.prix < 700 && vol.compagnie_aerienne == "Air france") {
  //     console.log(vol);
  //   };
  // }
  
  //Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
  //et dont la durée du trajet est inférieur à 15 heures
  
  //  for (const vol of vols) {
  //    if (vol.prix < 900 && vol.compagnie_aerienne == "Lufthansa" && vol.dureeTrajet < 15) {
  //      console.log(vol);
  //    };
  //  }
  
  //Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher
  
  //   for (const vol of vols) {
  
  //   if (vol.date_depart.substr(6) > 2019) {
  //     vol.prix = vol.prix*0.80;
  //     console.log(vol);
  //   };
  // }
  
  // const date = new Date('12/12/2020');
  // console.log(date);
  
  // vols.forEach((vol) => {
  //   const dateyear = vol.date_depart.split('/');
  
  //   if (dateYear[2] > '2019') {
  //     console.log(vol.date_depart);
  //   };
  // });
  
  
  //Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".
 
  const date1SupDate2 = (date1, date2) => {
    startDate = new Date(date1);
    endDate = new Date(date2);
    if (vol.date_depart > startDate && vol.date_depart < endDate) {
    }
    console.log(date1SupDate2("06/02/2019", "09/06/2019"));
    console.log(vol)
}


