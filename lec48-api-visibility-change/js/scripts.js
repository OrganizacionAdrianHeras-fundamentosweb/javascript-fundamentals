const video = document.getElementById('video');

/*
visibilitychange -> evento que se activa en el documento cuando el contenido de la pestaña se vuelve
                    visible o se oculta.
*/
// addEventListener('visibilitychange', (e) => {
//   if(document.visibilityState == 'visible') {
//     console.log('PLAY');
//     video.play();
//   } else if(document.visibilityState == 'hidden') {
//     console.log('PAUSE');
//     video.pause();
//   }
// });

addEventListener('visibilitychange', () => document.visibilityState == 'hidden' ? video.pause() : video.play());


