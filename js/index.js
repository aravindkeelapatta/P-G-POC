window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {  
     backgroundColor: '#A9A9A9',          
      title:{
        text: "# Worker Available Vs Expected", 
        fontColor: "white",
        padding: "5",              
      },

      data: [       
      {         
       type: "column",
       name: "# Workers Available",
       showInLegend: true,
       dataPoints: [
       { label: "Packing", y: 422 },
       { label: "Making", y: 367 },
       { label: "QA", y: 31 },                                    
       { label: "Re-Packing", y: 84 },
       { label: "IT", y: 31 },
       { label: "Micro Lab", y: 52},
       { label: "Admin", y: 21},
       { label: "Auto", y: 42}
       ]
     },
     { 

      type: "column",
      name: "# Workers Expected",
      showInLegend: true,                
      dataPoints: [
      { label: "Packing", y: 450 },
      { label: "Making", y: 380 },
      { label: "QA", y: 35 },                                    
      { label: "Re-Packing", y: 90 },
      { label: "IT", y: 35 },
      { label: "Micro Lab", y: 55 },
      { label: "Admin", y: 25 },
      { label: "Auto", y: 45 }
      ]
    }
    ]
  });

    chart.render();
  }

  