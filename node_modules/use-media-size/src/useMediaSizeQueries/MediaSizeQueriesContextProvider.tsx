import * as React from "react";
import { DEFAULT_QUERY_SIZES } from "./defaultSizes";

export interface MediaSizesState {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const MediaSizeQueriesStateContext = React.createContext<
  MediaSizesState
>(DEFAULT_QUERY_SIZES);

export function MediaSizeQueriesContextProvider({
  children,
  defaults,
}: React.PropsWithChildren<{ defaults: MediaSizesState }>) {
  return (
    <MediaSizeQueriesStateContext.Provider
      value={DEFAULT_QUERY_SIZES || defaults}
    >
      {children}
    </MediaSizeQueriesStateContext.Provider>
  );
}
