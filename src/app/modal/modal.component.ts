import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() project: any; // Project data passed from the parent
  @Output() close = new EventEmitter<void>(); // Event to notify parent to close the modal

  currentImageIndex = 0;
  currentImage: string | null = null;

  ngOnInit() {
    this.updateCurrentImage();
  }

  closeModal() {
    this.close.emit();
  }

  updateCurrentImage() {
    if (this.project?.images.length) {
      this.currentImage = this.project.images[this.currentImageIndex];
    }
  }

  prevImage() {
    if (this.project?.images.length) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
      this.updateCurrentImage();
    }
  }

  nextImage() {
    if (this.project?.images.length) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
      this.updateCurrentImage();
    }
  }
}
