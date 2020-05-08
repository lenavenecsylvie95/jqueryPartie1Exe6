/* On ajoute l'évènement mouseover à notre élément id #image
  Au moment où on passe la souris sur notre élément, on modifie son CSS pour agrandir sa largeur
  '+=100px' : Cela veut dire que l'on ajoute 100 pixels à la taille à l'instant T
*/
$(function(){
  $('#image').mouseover(function(){
    $('#image').css('width', '+=100px');
  });
});
