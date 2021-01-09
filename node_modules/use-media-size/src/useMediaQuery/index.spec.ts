import { renderHook } from "@testing-library/react-hooks";
import { useMediaQuery } from "./index";

const mockMatchMedia = (shouldMatch: (query?: string) => boolean) => {
  const addListener = jest.fn();
  const removeListener = jest.fn();
  const matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: shouldMatch(query),
      media: query,
      addListener,
      addEventListener,
      removeListener,
      removeEventListener,
    };
  });
  window.matchMedia = matchMedia;
  return {
    matchMedia,
    addListener,
    removeListener,
  };
};

describe("useMediaQuery", () => {
  describe("happy day flow", () => {
    it("should return true if media matches", () => {
      const mediaQuery = "(max-width: 280px)";
      mockMatchMedia((query: string) => query === mediaQuery);
      const { result } = renderHook(() => useMediaQuery(mediaQuery));
      expect(result.current).toBeTruthy();
    });

    it("should return false if media does not match", () => {
      const mediaQuery = "(max-width: 280px)";
      mockMatchMedia((query: string) => query === mediaQuery);
      const { result } = renderHook(() => useMediaQuery("(max-width: 300px)"));
      expect(result.current).toBeFalsy();
    });
  });

  describe("event listeners", () => {
    it("registers listener on mount", () => {
      const mediaQuery = "(max-width: 280px)";
      const { addListener, removeListener } = mockMatchMedia(
        (query: string) => query === mediaQuery
      );
      renderHook(() => useMediaQuery(mediaQuery));
      expect(addListener).toBeCalledTimes(1);
      expect(removeListener).toBeCalledTimes(0);
    });

    it("unregisters listener on mount", () => {
      const mediaQuery = "(max-width: 280px)";
      const { addListener, removeListener } = mockMatchMedia(
        (query: string) => query === mediaQuery
      );
      const { unmount } = renderHook(() => useMediaQuery(mediaQuery));
      unmount();
      expect(addListener).toBeCalledTimes(1);
      expect(removeListener).toBeCalledTimes(1);
    });
  });
});
