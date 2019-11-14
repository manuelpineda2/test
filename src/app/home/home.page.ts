import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild(IonContent, {read: ElementRef, static: true}) contentArea: ElementRef;
    private observer: IntersectionObserver;

    topbar = 'top-notif';
    topTitle = ['top-title', 'top-subtitle', false];

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {

    }

    handleScroll(ev) {
        // console.log(ev);
        let scrollTop;
        let goUp;
        if (ev && ev.detail && ev.detail.scrollTop) {
            scrollTop = ev.detail.scrollTop;
            goUp = scrollTop > 20;
            if (goUp) {
                this.renderer.setStyle(this.contentArea.nativeElement, 'transform', `translateY(55px)`);
                this.topbar = 'top-notif notif-visible';
                this.topTitle = ['top-title topSmall', 'top-subtitle topSubHidden', true];
            } else {
                this.renderer.setStyle(this.contentArea.nativeElement, 'transform', `translateY(250px)`);
                this.topbar = 'top-notif';
                this.topTitle = ['top-title', 'top-subtitle', false];
            }
        }
    }
}
