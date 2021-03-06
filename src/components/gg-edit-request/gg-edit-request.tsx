import { Component, h , Host, Prop, State, Method } from '@stencil/core';
import { firestoreDB } from '../../global/firebase';
import { InputChangeEventDetail, DatetimeChangeEventDetail, SelectChangeEventDetail } from '@ionic/core';
import { school_id } from '../../global/constants';
import { Requests, Gear } from '../../interfaces';


@Component({
    tag: 'gg-edit-request',
    styleUrl: 'gg-edit-request.css'
})
export class GgEditRequest {
    Requests : Requests
    @Prop()
    modalCtrl : HTMLIonModalElement;
    @State()
    requestedGear : string[] = [];
    @Prop() 
    gearById : string;
    periodFilming: any;
    date: any;

    @Method()
    async addGear(gear : Gear) {
        console.log('gear from other page', gear);
        this.requestedGear = [
            ...this.requestedGear,
            gear.id 
        ];
        this.Requests.requestedGear = this.requestedGear
        
    }
    componentDidLoad() {
        console.log('component loaded', this.Requests)
      }
    closeModal() {
        this
            .modalCtrl
            .dismiss();
    }
    requestName(e : CustomEvent < InputChangeEventDetail >) {
        const value = e.detail.value;
        console.log('value', value);
        this.Requests.requestname = value
    }
    requestUserName(e : CustomEvent < InputChangeEventDetail >) {
        const value = e.detail.value;
        console.log('value', value);
        this.Requests.username = value
    }
    requestDateFilming(e : CustomEvent < DatetimeChangeEventDetail >) {
        const value = e.detail.value;
        console.log('value', value);
        this.Requests.datefilming = value
        this.date = value
    }

    requestPeriodFilming(e : CustomEvent < SelectChangeEventDetail >) {
        const value = e.detail.value;
        console.log('type', value);
        this.Requests.periodfilming = value
        this.periodFilming = e.detail.value
        console.log('periodFilming', this.periodFilming);
    }
    requestTrelloCardLink(e : CustomEvent < InputChangeEventDetail >) {
        const value = e.detail.value;
        console.log('value', value);
        this.Requests.trellocardlink = value
    }
    addRequest() {
        console.log('this.requests', this.Requests);
        firestoreDB
            .collection(`/schools/${school_id}/requests`)
            .add(this.Requests);
            

        const toast = document.createElement('ion-toast');
        toast.message = 'Request Placed! It will be approved or declined in 24-48 hours.';
        toast.duration = 2000;
        
        this.closeModal();
        document.body.appendChild(toast);
        return toast.present();
      
    }
    navigateToGear() {
        const page = document.querySelector("gg-new-request");
        const nav = page.closest("ion-nav");
        nav.push("gg-add-gear-to-request", { date:this.date, periodFilming:this.periodFilming});
        
    }

    render() {
        return (
            <Host>
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="secondary">
                            <ion-button onClick={() => this.closeModal()}>Cancel</ion-button>
                        </ion-buttons>
                        <ion-title>New Request</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content>

                    <ion-item>
                        <ion-label position="floating">Request Name</ion-label>
                        <ion-input
                            onIonChange={(e) => this.requestName(e)}
                            value={this.Requests.requestname}placeholder={this.Requests.requestname}></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Name</ion-label>
                        <ion-input
                            onIonChange={(e) => this.requestUserName(e)}
                            value={this.Requests.username} placeholder={this.Requests.username}></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label position="fixed">Date Filming</ion-label>
                        <ion-input
                            type="date"
                            onIonChange={(e) => this.requestDateFilming(e)}
                            value={this.Requests.datefilming}></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Period Filming</ion-label>
                        <ion-select
                            onIonChange={(e) => this.requestPeriodFilming(e)}
                            value={this.Requests.periodfilming}
                            okText="Okay"
                            cancelText="Dismiss">

                            <ion-select-option value="A1">A1</ion-select-option>
                            <ion-select-option value="A2">A2</ion-select-option>
                            <ion-select-option value="A3">A3</ion-select-option>
                            <ion-select-option value="A4">A4</ion-select-option>
                            <ion-select-option value="B5">B5</ion-select-option>
                            <ion-select-option value="B6">B6</ion-select-option>
                            <ion-select-option value="B7">B7</ion-select-option>
                            <ion-select-option value="B8">B8</ion-select-option>
                            <ion-select-option value="Afterschool">After School</ion-select-option>
                            <ion-select-option value="Lunch">Lunch</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Trello Card Link</ion-label>
                        <ion-input
                            type="url"
                            onIonChange={(e) => this.requestTrelloCardLink(e)}
                            value={this.Requests.trellocardlink}></ion-input>
                    </ion-item>
                    <ion-button expand="block" onClick={() => this.navigateToGear()}>Add Gear</ion-button>
                    <ion-list>
                        {this
                            .requestedGear
                            .map(gearid => <ion-item>
                                <ion-icon
                                    slot="start"
                                    name={this.gearById[gearid].type == "camera"
                                    ? "Videocam"
                                    : this.gearById[gearid].type == 'lighting'
                                        ? "sunny"
                                        : "logo-freebsd-devil"}></ion-icon>
                                <ion-label>{this.gearById[gearid].name}</ion-label>
                                <ion-badge
                                slot="end"
                                color={this.gearById[gearid].multiple == "1"
                                ? "primary"
                                : this.gearById[gearid].multiple == '2'
                                    ? "warning"
                                    : this.gearById[gearid].multiple == '3'
                                        ? "tertiary"
                                        : this.gearById[gearid].multiple == '4'
                                            ? "success"
                                            : "dark"}>{this.gearById[gearid].multiple}</ion-badge>
                            </ion-item>)
}
                    </ion-list>
                </ion-content>
                <ion-footer class="ion-padding">
                    <ion-button expand="block" type="submit" onClick={() => this.addRequest()}>
                        Submit Request
                    </ion-button>
                </ion-footer>
            </Host>
        );
    }
}
