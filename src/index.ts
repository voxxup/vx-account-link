import { Router, Request, Response, NextFunction } from 'express';
import session from 'express-session';
const router: Router = Router();
export class CreateRouter {
  private request: Request;
  private response: Response;
  public constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
  }

  public init(clientId: string) {
    const requestParams = {
      clientId: this.request.query.client_id,
      state: this.request.query.state,
      redirectUri: this.request.query.redirect_uri,
      tokenType: this.request.query.token,
    };

    //check if all the request params are available
    if (
      !requestParams.clientId ||
      !requestParams.state ||
      !requestParams.redirectUri ||
      !requestParams.tokenType
    ) {
      this.response.status(401).send('UnAuthorized');
    } else if (clientId && clientId !== requestParams.clientId) {
      this.response.status(401).send('UnAuthorized');
    } else {
      router.use(session({ secret: '', cookie: { maxAge: 60000 } }));
      if (this.request.session) {
        this.request.session.requestParams = requestParams;
      } else {
        this.response.status(501).send('Missing session configuration');
      }
    }
  }

  public start(token: string) {
    if (this.request.session) {
      let redirectUrl =
        this.request.session.requestParams.redirectUri +
        '#state=' +
        this.request.session.requestParams.state +
        '&access_token=' +
        token +
        '&token_type=Bearer';
      this.response.redirect(redirectUrl);
    } else {
      this.response.status(401).send('UnAuthorized');
    }
  }
}
