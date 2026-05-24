import { useState, useCallback, useEffect } from "react";
import { useFileSystem } from "contexts/fileSystem";
import { useSession } from "contexts/session";

export const useCursor = (): React.JSX.Element | undefined => {
  const { readFile } = useFileSystem();
  const [customCursor, setCustomCursor] = useState("");
  const { cursor } = useSession();
  const getCursor = useCallback(
    async (path: string) => {
      const [imageBuffer, { cursorToCss }] = await Promise.all([
        readFile(path),
        import("utils/imageDecoder"),
      ]);

      if (!imageBuffer?.length) return "";

      return cursorToCss(imageBuffer, path);
    },
    [readFile]
  );

  useEffect(() => {
    if (cursor) getCursor(cursor).then(setCustomCursor);
  }, [cursor, getCursor]);

  return customCursor ? <style>{customCursor}</style> : undefined;
};
