import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const userRole = this.authService.login(this.username, this.password);
    if (userRole) {
      // Redirection basée sur le rôle retourné par le service
      if (userRole === 'admin') {
        this.router.navigate(['/admin']);
      } else if (userRole === 'staff') {
        this.router.navigate(['/staff']);
      } else if (userRole === 'financial') {
        this.router.navigate(['/financial']);
      }
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
  }
}