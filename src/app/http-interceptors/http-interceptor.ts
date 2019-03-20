import { ApiProviderService } from '../api-provider.service';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private service: ApiProviderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.service.loading = true;
    // Get the auth token from the service.

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', authToken)
    // });

    // send cloned request with header to the next handler.
    return next.handle(req).pipe(
        tap(event => {
          console.log('Event: ', event);
            // There may be other events besides the response.
            if (event instanceof HttpResponse) {
              this.service.loading = false;
              // console.log('Got Response');
            }
          })
    );
  }
}
