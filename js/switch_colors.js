document.getElementById('og-card').addEventListener('click', function (e) {
   updateTag(e);
}, false);

function updateTag(e) {
   switch (e.target.getAttribute('data-present')) {
      case 'present':
         left(e.target);
         console.log("case present");
         break;
      case 'absent':
         came(e.target);
         console.log("case present");

         break;
   }


   function left(target) {
     // target.setAtribute('data-present', 'absent');
       this.style.color = "red";
   }

   function came(target) {
     // target.setAtribute('data-present', 'present');
              this.style.color = "green";

   }
    console.log("hope");
}
