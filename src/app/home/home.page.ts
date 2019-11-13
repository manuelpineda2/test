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

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
    }

    handleScroll(ev) {
        // console.log(ev);
        let trans = false;
        let scrollTop;
        let current;
        if (ev && ev.detail && ev.detail.scrollTop) {
            scrollTop = ev.detail.scrollTop;
            trans = scrollTop >= 190;
            if (scrollTop < 150) {
                current = (200 - scrollTop);
                console.log(current);
                this.renderer.setStyle(this.contentArea.nativeElement, 'transform', `translate3d(0, ${current}px,0)`);
            } else {
                console.log('Reached 200');
            }

        }
        // console.log(ev);

        // if (trans === true) {
        //     this.renderer.addClass(this.contentArea.nativeElement, 'no-transform');
        // } else {
        //     this.renderer.removeClass(this.contentArea.nativeElement, 'no-transform');
        // }
    }
}
