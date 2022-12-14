import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  // React only on graphql errors
  if (graphQLErrors && graphQLErrors.length > 0) {
    if (
      (graphQLErrors[0] as any)?.statusCode >= 400 &&
      (graphQLErrors[0] as any)?.statusCode < 500
    ) {
      // handle client side error
      console.error(`[Client side error]: ${graphQLErrors[0].message}`);
    } else {
      // handle server side error
      console.error(`[Server side error]: ${graphQLErrors[0].message}`);
    }
  }
  if (networkError) {
    // handle network error
    console.error(`[Network error]: ${networkError.message}`);
  }
});


const basic = setContext((operation, context) => ({
  headers: {
    Accept: 'charset=utf-8'
  }
}));

const authGithub = setContext((operation, context) => {
  const token = localStorage.getItem('access_token');

  if (token === null) {
    return {};
  } else {
    return {
      headers: {
        authorization: `bearer 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`
      }
    };
  }
});

export function createDefaultApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const cache = new InMemoryCache({});
  // create http
  const http = httpLink.create({
    uri: 'https://api.github.com/graphql',
  });

  return {
    connectToDevTools: !environment.production,
    assumeImmutableResults: true,
    cache,
    link: ApolloLink.from([basic, authGithub, errorLink, http]),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  };
}

export function createGithubApollo(httpLink: HttpLink)
  : Record<string, ApolloClientOptions<any>> {
  return {
    local: {
      name: 'local',
      link: httpLink.create({ uri: 'http://localhost:4000/graphql' }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createGithubApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
