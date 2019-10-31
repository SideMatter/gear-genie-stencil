import { Component, h } from '@stencil/core';
import '@firebase/auth';
import '@firebase/database';
import { firestoreDB } from '../../global/firebase';
import { generateGearById, school_id } from '../../global/constants';
import { Gear } from '../../interfaces';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})

export class AppRoot {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },

    {
      title: 'Gear',
      url: '/gear',
      icon: 'videocam'
    },

    {
      title: 'Requests',
      url: '/requests',
      icon: 'albums'
    },

    {
      title: 'Directory',
      url: '/directory',
      icon: 'contacts'
    },

    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    }
  ];
  gear: Gear[];
componentDidLoad() {
  firestoreDB
                .collection(`/schools/${school_id}/gear`)
                .onSnapshot(snap => {
                    const gearDocs = snap
                        .docs
                        .map(doc => {
                            const gear = doc.data() as Gear;
                            gear.id = doc.id;
                            return gear
                        });
                    console.log('gear', gearDocs);
                    this.gear = gearDocs
                    generateGearById(gearDocs)
                })
}
  render() {
    return (

      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/home" component="gg-home" />
          <ion-route url="/gear" component="gg-gear" />
          <ion-route url="/requests" component="gg-requests" />
          <ion-route url="/directory" component="gg-directory" />
          <ion-route url="/profile" component="gg-profile" />
          <ion-route url="/checkinout" component="gg-checkinout" />
          <ion-route url="/teacher" component="gg-teacher-view" />
          <ion-route url="/new-gear" component="gg-new-gear" />
          <ion-route url="/new-request" component="gg-new-request" />
          <ion-route url="/profile" component="gg-profile" />
          <ion-route url="/add-gear" component="gg-add-gear-to-request"/>
          <ion-route url="/auth" component="gg-auth"/>
          <ion-route url="/" component="gg-home" />
        </ion-router>
        <ion-split-pane contentId="main">
          <ion-menu contentId="main" type="overlay">
            <ion-header>
              <ion-toolbar>
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                {
                  this.appPages.map(page => <ion-menu-toggle auto-hide="false" >
                    <ion-item href={page.url}>
                      <ion-icon slot="start" name={page.icon}></ion-icon>
                      <ion-label>
                        {page.title}
                      </ion-label>
                    </ion-item>
                  </ion-menu-toggle>)
                }
              </ion-list>
             
            </ion-content>
          </ion-menu>
          <ion-nav id="main"></ion-nav>
        </ion-split-pane>
      </ion-app>
    );
  }
}
