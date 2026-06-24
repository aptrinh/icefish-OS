import { useMemo } from "react";
import { useMenu } from "contexts/menu";
import { type ContextMenuCapture } from "contexts/menu/useMenuContextState";
import { writeTextToClipboard } from "utils/functions";

const useAddressBarContextMenu = (address: string): ContextMenuCapture => {
  const { contextMenu } = useMenu();

  return useMemo(
    () =>
      contextMenu?.(() => [
        {
          action: () => writeTextToClipboard(address),
          label: "Copy address",
        },
      ]),
    [address, contextMenu]
  );
};

export default useAddressBarContextMenu;
