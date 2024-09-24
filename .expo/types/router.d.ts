/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/MoviesScreen` | `/MoviesScreen` | `/SearchScreen` | `/_sitemap`;
      DynamicRoutes: `/MovieDetails/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/MovieDetails/[id]`;
    }
  }
}
