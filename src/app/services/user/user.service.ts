import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IUser } from '../../interface/iuser';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseReference } from 'angularfire2/database/interfaces';
import { Observable } from '../../../../node_modules/rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbRef: DatabaseReference;

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) {
    this.dbRef = this.db.database.ref('Users');
   }

   isLoggedIn(): boolean {
     return this.af.auth.currentUser ? true : false;
   }

   getUserInfo(): Observable<IUser> {
     return from(this.dbRef.child(this.af.auth.currentUser.uid).once('value').then(
       (x) => {
         return x.val();
       }
     ));
   }

   userExists(currentUserId: string): Observable<boolean> {
    return from(this.dbRef.child(currentUserId).once('value').then(
      (data) => {
        return data.val() !== null ? true : false;
      }
    ));
   }
}
