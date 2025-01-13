import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtilitiesService } from '@utils';
import { BehaviorSubject } from 'rxjs';
import { RegisterStateService } from '../../../service/state/register.state.service';

@Component({
    selector: 'form-register',
    templateUrl: './form-register.component.html',
    styleUrls: ['./form-register.component.scss'],
    standalone: false
})
export class FormRegisterComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterStateService);
  protected formUtilities = inject(FormUtilitiesService);

  private passwordSource = new BehaviorSubject<string | null>(null);
  formRegister!: FormGroup;
  password$ = this.passwordSource.asObservable();

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      email: [''],
      username: [''],
      password: [''],
    });
  }

  onRegister() {
    if (!this.formRegister.valid) return;

    this.registerService.onRegister(this.formRegister);
  }
}
