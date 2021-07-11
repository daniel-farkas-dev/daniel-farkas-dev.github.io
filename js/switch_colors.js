$(function () {
   $(".card").on('click', function(e) {
      switch ($(this).getAttribute('data-present')) {
         case 'present':
            left(e.target);
            break;
         case 'absent':
            came(e.target);
            break;
      }
   });
});


function left(target) {
   target.setAtribute('data-present', 'absent');
}

function came(target) {
   target.setAtribute('data-present', 'absent');
}
