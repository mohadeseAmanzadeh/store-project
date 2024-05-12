import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({

    standalone: true,
    selector: '.accordion',
})

export class AccordionDirective implements OnInit{

    constructor(
        private el : ElementRef
    ) {}

    ngOnInit(): void {
        
    }

    @HostListener('click' , ['$event']) onClick(event: any) {
        if(event.target && event.target.closest('.header-accordion')) {
            this.toggleAccordion()
          }
    }

    toggleAccordion() {
        let contentElement: HTMLElement|null = this.el.nativeElement.querySelector('.content');
        if (contentElement !== null) {
            if (!this.el.nativeElement.classList.contains('active')) {
                this.el.nativeElement.classList.add('active');
                contentElement.style.maxHeight = contentElement.scrollHeight + 'px';    
            } else {
                contentElement.style.maxHeight = '0px';
                this.el.nativeElement.classList.remove('active');
            } 
        }
        
    }
}