import { Component, Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Piece } from './Piece';
import { Observable, catchError, tap } from 'rxjs';

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PieceServiceComponent {
  public piece!: Piece;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getPieces(): Observable<any> {
    return this.http.get<any>(`/`, { observe: 'response' }).pipe(
      tap((_) => console.log('all pieces were successfully retrieved')),
      catchError(this.handleError)
    );
  }

  getOnePiece(id: number): Observable<any>{
    return this.http.get<any>(`/${id}`, { observe: 'response' }).pipe(
      tap((_) => console.log('the piece was successfully retrieved')),
      catchError(this.handleError)
    );
  }

  assignOwnerToPiece(pieceId: number, ownerName: string): Observable<any>{
    return this.http.get<any>(`/${pieceId}/${ownerName}`, {observe: 'response'}).pipe(
      tap((_) => console.log('the piece was successfully updated')),
      catchError(this.handleError)
    );
  }

  public handleError(err: HttpErrorResponse): any {
    return console.error(err.message);
  }
}
