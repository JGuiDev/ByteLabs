import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css'
})
export class NewsletterFormComponent {
  newsLetterForm!: FormGroup;

  loading = signal(false)

  constructor(private service: NewsletterService){
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    this.loading.set(true)
    if(this.newsLetterForm.valid){
      this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
        next:  () => {
          this.newsLetterForm.reset()
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      })
    }
  }
}
