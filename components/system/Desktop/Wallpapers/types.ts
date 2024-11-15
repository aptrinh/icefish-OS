import { type StableDiffusionConfig } from "components/apps/StableDiffusion/types";
import { type Size } from "components/system/Window/RndWindow/useResizable";
import type MatrixConfig from "components/system/Desktop/Wallpapers/Matrix/config";
import { type VantaNetConfig } from "components/system/Desktop/Wallpapers/vantaNet/types";

declare global {
  interface Window {
    DEBUG_DISABLE_WALLPAPER?: boolean;
    STABLE_DIFFUSION_DELAY_IN_MIN_OVERRIDE?: number;
    WallpaperDestroy?: () => void;
  }
}

export type WallpaperConfig =
  | Partial<StableDiffusionConfig>
  | Partial<typeof MatrixConfig>
  | VantaNetConfig;

export type WallpaperFunc = (
  el: HTMLElement | null,
  config?: WallpaperConfig,
  fallback?: () => void
) => Promise<void> | void;

export type OffscreenRenderProps = {
  canvas: OffscreenCanvas;
  clockSize?: Size;
  config?: Partial<StableDiffusionConfig> | VantaNetConfig;
  devicePixelRatio: number;
};

export type WallpaperMenuItem = {
  id: string;
  name?: string;
  requiresWebGPU?: boolean;
  startsWith?: boolean;
};

export type WallpaperMessage = { message: string; type: string };
