import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseType} from "./todolistsHttp.service";

export const baseUrl = 'https://social-network.samuraijs.com/api/1.1'
export const httpOptions = {
  withCredentials: true,
  headers: {
    "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
  }
}
export type FielErrorType = { field: string, error: string }

export type initialLoginType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

@Injectable({
  providedIn: 'root'
})

export class SamuraiServiceLogAuth {
  constructor(private http: HttpClient) {
  }

  logIn(data: initialLoginType): Observable<ResponseType<{
    userId?: number
  }>> {
    return this.http.post<ResponseType<{
      userId?: number
    }>>(`${baseUrl}/auth/login`, data, httpOptions)
  }

  logOut(): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${baseUrl}/auth/login`, httpOptions)
  }

  authMe(): Observable<ResponseType<{
    id: number,
    login: string,
    email: string
  }>> {
    return this.http.get<ResponseType<{
      id: number,
      login: string,
      email: string
    }>>(`${baseUrl}/auth/me`, httpOptions)
  }
}
