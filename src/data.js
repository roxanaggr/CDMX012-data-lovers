//Funcion para filtrar por rol
export const filterRole = (champions, roles) =>{
   const filterChampions = champions.filter(champion => champion.tags.includes(roles));
   return filterChampions

};

//Función para ordenar usando sort
export const orderAlpha = (champions => {
   return champions.sort((a,b) => { 
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return -1;
       }); 
   });


//Saca la dificultad de todos los campeones 
export const filterDifficulty = (champions, difficulty) => {
   
      const emptyLow = [];
      const emptyMed = [];
      const emptyHig = [];
   
      //lanzame los resultados a un lugar en especifico y no al array vacío
      //const difResult = [];
      champions.forEach (champion => {
         const getDifficulty = champion.info.difficulty;
         if (getDifficulty <= 4) {
            emptyLow.push(champion);
         }
         else if (getDifficulty > 4  && getDifficulty < 8) {
            emptyMed.push(champion);
         }
         else if (getDifficulty >= 8 && getDifficulty <= 10){
            emptyHig.push(champion);
         }
            
         });

      const allDifficulties = [emptyLow, emptyHig, emptyMed];
      let low = allDifficulties [0];
      console.log (low)
      let med = allDifficulties [1];
      console.log (med)
      
         console.log(difficulty)
         return allDifficulties

         //si viene como low entonces retorname todos los low
         //buscar otra manera de unir nuestras dos variables como
         //una constante que nos retorne o el empty low o el emptyhig o el emptyMed
         //si la dificultad es low entonces imprime en pantalla a los low
         // es un número, quizá por eso no salen las tarjetas?
         // si sale un número entonces...
         // ciclo que vaya de 0 a 2
         
   };

   //mostrar un top 5 de los campeones con mejor ad carry

   export const topAdcarry = (champions, attackdamage) => {
      const getAdcarry = champions.stats.attackdamage
      console.log (getAdcarry)
   }
   
   
      

      
   

