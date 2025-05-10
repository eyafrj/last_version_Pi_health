import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'staff', password: 'staff123', role: 'staff' },
    { username: 'financial', password: 'financial123', role: 'financial' }
  ];

  private currentUser: any = null;

  login(username: string, password: string): string | null {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      this.currentUser = user;
      return user.role; // Retourne le rôle de l'utilisateur
    }
    return null; // Retourne null si les identifiants sont incorrects
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}