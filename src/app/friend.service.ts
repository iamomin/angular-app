import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { FRIENDS } from './mock-friends';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class FriendService {

  data: any;
  private friendsUrl = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions;

  constructor(
      private http: HttpClient,
      private messageService: MessageService
      ) {

        this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
      }

    getMockFriends(): Friend[] {
      return FRIENDS;
    }

    getFriends(): Observable<Friend[]> {
      this.messageService.add('FriendService: fetched friends');
      return this.getFriendsHTTP();
      // return of(FRIENDS);
    }

    getFriend(id: number): Observable<Friend> {
      // Todo: send the message _after_ fetching the friend
      this.messageService.add(`FriendService: fetched friend id=${id}`);
      // return of(FRIENDS.find(friend => friend.id === id));
      return this.getFriendHTTP(id);
    }

    private log(message: string) {
      this.messageService.add('FriendService: ' + message);
    }

    /** GET friends from the server */
    getFriendsHTTP (): Observable<Friend[]> {
      this.messageService.add('FriendService: HTTP API call');
      return this.http.get<Friend[]>(this.friendsUrl)
          .pipe(
              tap(friends => this.log(`fetched friends`)),
              catchError(this.handleError('getFriendsHTTP', []))
            );
    }

      /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      console.log('... ERROR');
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** GET friend by id. Will 404 if id not found */
    getFriendHTTP(id: number): Observable<Friend> {
      const url = `${this.friendsUrl}/${id}`;
      return this.http.get<Friend>(url).pipe(
        tap(_ => this.log(`fetched friend id=${id}`)),
        catchError(this.handleError<Friend>(`getFriend id=${id}`))
      );
    }

    /* GET friends whose name contains search term */
      searchFriends(term: string): Observable<Friend[]> {
        if (!term.trim()) {
          // if not search term, return empty friend array.
          return of([]);
        }
        return this.http.get<Friend[]>(`api/friends/?name=${term}`).pipe(
          tap(_ => this.log(`found friends matching "${term}"`)),
          catchError(this.handleError<Friend[]>('searchFriends', []))
        );
      }

    /** PUT: update the friend on the server */
    updateFriend (friend: Friend): Observable<Friend> {

      return this.http.put(this.friendsUrl, friend, this.httpOptions).pipe(
        tap(_ => this.log(`updated friend id=${friend.id}`)),
        catchError(this.handleError<any>('updateFriend'))
      );
    }

    /** POST: add a new friend to the server */
    addFriend (friend: Friend): Observable<Friend> {
      return this.http.post<Friend>(this.friendsUrl, friend, this.httpOptions).pipe(
        tap((friend: any) => this.log(`added friend w/ id=${friend.id}`)),
        catchError(this.handleError<Friend>('addFriend'))
      );
    }

    /** DELETE: delete the friend from the server */
    deleteFriend (friend: Friend | number): Observable<Friend> {
      console.log('deleting',friend);
      const id = typeof friend === 'number' ? friend : friend.id;
      const url = `${this.friendsUrl}/${id}`;

      return this.http.delete<Friend>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted firend id=${id}`)),
        catchError(this.handleError<any>('deleteFriend'))
      );
    }
}