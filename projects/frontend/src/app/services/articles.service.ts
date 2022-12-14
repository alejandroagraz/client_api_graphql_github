import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import {map, Observable} from "rxjs";

const ARTICLES = gql`
  query ( $query: String!, $type : SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      edges {
        node {
          ... on Repository {
            url
            owner {
              url
              avatarUrl
              ... on Organization {
                avatarUrl
                name
                url
              }
            }
            name
            nameWithOwner
            stargazerCount
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private apollo: Apollo) { }

  getArticles(topic: string, start: string, first?: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: ARTICLES,
      variables: {
        query: `topic:${topic} stars:>=${start}`,
        type: 'REPOSITORY',
        first: first?Number(first):10,
      },
    }).valueChanges.pipe(
      map((resp) => resp.data.search.edges ?? [])
    );
  };
}
