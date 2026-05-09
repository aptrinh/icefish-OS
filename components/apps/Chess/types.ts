export type Chessboard2Orientation = "white" | "black";

type Chessboard2DragStartEvent = {
  orientation: Chessboard2Orientation;
  piece: string;
  position: Record<string, string>;
  square: string;
};

type Chessboard2DropEvent = {
  orientation: Chessboard2Orientation;
  piece: string;
  source: string;
  target: string;
  x: number;
  y: number;
};

type SquareSize = "small" | "medium" | "large";

export type GameMode = "hvh" | "hvc" | "cvc";

export type Side = "w" | "b";

export type Chessboard2Config = {
  draggable?: boolean;
  mouseDraggable?: boolean;
  onDragStart?: (event: Chessboard2DragStartEvent) => boolean | void;
  onDrop?: (event: Chessboard2DropEvent) => string | void;
  orientation?: Chessboard2Orientation;
  pieceTheme?: string | ((piece: string) => string);
  position?: string;
  touchDraggable?: boolean;
};

export type Chessboard2Instance = {
  addCircle: (
    squareOrConfig:
      | string
      | {
          color?: string;
          opacity?: number;
          size?: number | SquareSize;
          square: string;
        },
    color?: string,
    size?: number | SquareSize
  ) => unknown;
  clear: (animate?: boolean) => void;
  clearCircles: () => void;
  destroy: () => void;
  fen: () => string;
  flip: () => Chessboard2Orientation;
  getOrientation: () => Chessboard2Orientation;
  orientation: (
    side?: Chessboard2Orientation | "flip"
  ) => Chessboard2Orientation;
  position: (fen: string, animate?: boolean) => void;
  resize: () => void;
  start: (animate?: boolean) => void;
};
