import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  post = {
   series:'Vikings',
   subtitle:'Série, Nórdicos',
   nLike: 70,
   nDislike: 10,
   anexo: false,
   compartilhamento: 30,
   state_like: false,
   state_dislike: false,
   spoiler:true,
   show: 'Ragnar é tomado pela ganância e morre'
  }

  public condition: boolean = true

  showSpoiler() {
    this.post.spoiler=false;
  }

like(post){
  if (this.post.state_like==false && this.post.state_dislike==true){;
    (this.post.state_like) = true;
    (this.post.state_dislike) = false;
    (this.post.nLike)++;
    (this.post.nDislike)--;
  }
  else if(this.post.state_like==true && this.post.state_dislike==false){
    (this.post.state_like) = false;
    (this.post.nLike)--;
  }
  else if(this.post.state_like==false && this.post.state_dislike==false){
    (this.post.state_like)=true;
    (this.post.nLike)++;
  }
}

dislike(post){
  if (this.post.state_dislike==false && this.post.state_like==true){;
    (this.post.state_dislike) = true;
    (this.post.state_like) = false;
    (this.post.nDislike)++;
    (this.post.nLike)--;
  }
  else if(this.post.state_dislike==true && this.post.state_like==false){;
    (this.post.state_dislike) = false;
    (this.post.nDislike)--;
  }
  else if(this.post.state_like==false && this.post.state_dislike==false){
    (this.post.state_dislike)=true;
    (this.post.nDislike)++;
  }
}
}


/*
{
  series:'Good Place',
  subtitle:'Série, Comédia, Paraíso',
  nLike: 40,
  nDislike: 10,
  anexo: false,
  compartilhamento: 25,
  state_like: false,
  state_dislike: false,
  spoiler:false,
  show: 'Descubra os segredos da vida após a morte'
}/*

/*
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
*/
