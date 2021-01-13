import * as React from "react";
import { DEFAULT_QUERY_SIZES } from "./defaultSizes";
import { MediaSizeQueriesStateContext } from "./MediaSizeQueriesContextProvider";

export function useMediaSizeQueries() {
  const context = React.useContext(MediaSizeQueriesStateContext);
  if (context === undefined) {
    return DEFAULT_QUERY_SIZES;
  }
  return context;
}
