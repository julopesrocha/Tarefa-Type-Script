import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  post: object = {
   series:'Vikings',
   subtitulo:'Série, Nórdicos',
   like: 70,
   dislike: 10,
   anexo: false,
   compartilhamento: 30,
   state_like: false,
   state_dislike: false,
   spoiler:true,
   content: 'Ragnar é tomado pela ganância e morre'

  }
}




spoilerAlert(post:any):alert{;
  constructor(public alertController: AlertController){},
  if (post.spoiler==true){;
    async alerta() {;
      const alert = await this.alertController.creat({;
        header:'Alerta de Spoiler',
        message:'Deseja abrir o texto?',
        buttons: ['Não', 'Sim'];
      });

      await alert.present();
    }
  }
  else if {
    return (post.content);
  }
}

/*Ulike(post:any):any{
  if (post.state_like==false && post.state_dislike==true){;
    (post.state_like) = true;
    (post.state_dislike) = false;
  }
}

dislike(post:any):any{
  if (post.state_dislike==false && post.state_like==true){;
    (post.state_dislike) = true;
    (post.state_like) = false;

  }
}
*/
