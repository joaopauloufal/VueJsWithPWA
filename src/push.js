import firebase from 'firebase';

export default function(){




   if ('serviceWorker' in navigator){

        navigator.serviceWorker.register('./firebase-messaging-sw.js')
            .then(registration => {

                const messaging = firebase.messaging();

                let getToken = () => {

                    messaging.getToken()
                        .then(currentToken => {
                            if (currentToken){
                                console.log('Enviar isso para um servidor:', currentToken);
                                return currentToken;
                            }
            
                            console.warn('Nenhum token está disponível, solicite permissão para gerar um.');
                        });
            
            
                }

                messaging.useServiceWorker(registration);

                messaging.requestPermission()
                    .then(() => {
                        return getToken();
                    })
                   

                    
            })
            .catch(err => console.warn('Erro', err))
   }

}