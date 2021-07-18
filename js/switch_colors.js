document.getElementById('og-card').addEventListener('click', function (e) {
   updateTag(e);
}, false);

function updateTag(e) {
    var el = e.target.parent;
   switch (el.getAttribute('data-present')) {
      case 'present':
         left(el);
         console.log("case present");
         break;
      case 'absent':
         came(el);
         console.log("case absent");
           break;
   }

   function left(target) {
      target.setAtribute('data-present', 'absent');
   }

   function came(target) {
      target.setAtribute('data-present', 'present');
   }
    console.log("hope");
}
