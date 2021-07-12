document.getElementById('og-card').addEventListener('click', function (e) {
   updateTag(e);
}, false);

function updateTag(e) {
   switch (e.target.getAttribute('data-present')) {
      case 'present':
         left(e.target);
         break;
      case 'absent':
         came(e.target);
         break;
   }


   function left(target) {
      target.setAtribute('data-present', 'absent');
   }

   function came(target) {
      target.setAtribute('data-present', 'absent');
   }
}
