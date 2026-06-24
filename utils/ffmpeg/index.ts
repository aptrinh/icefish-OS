import { basename, dirname, extname, join } from "path";
import { type FFmpeg } from "@ffmpeg/ffmpeg";
import { type FFmpegTranscodeFile } from "utils/ffmpeg/types";
import { fetchBlob } from "utils/functions";

export const getFFmpeg = async (
  printLn: (message: string) => void = console.info
): Promise<FFmpeg> => {
  const [{ FFmpeg: CreateFFmpeg }, coreBlob, wasmBlob] = await Promise.all([
    import("@ffmpeg/ffmpeg"),
    fetchBlob("/System/ffmpeg/ffmpeg-core.js"),
    fetchBlob("/System/ffmpeg/ffmpeg-core.wasm"),
  ]);
  const ffmpeg = new CreateFFmpeg();

  ffmpeg.on("log", ({ message }) => printLn(message));

  await ffmpeg.load({
    coreURL: URL.createObjectURL(coreBlob),
    wasmURL: URL.createObjectURL(wasmBlob),
  });

  return ffmpeg;
};

export const transcode = async (
  files: FFmpegTranscodeFile[],
  extension: string,
  printLn?: (message: string) => void
): Promise<FFmpegTranscodeFile[]> => {
  const ffmpeg = await getFFmpeg(printLn);
  const returnFiles: FFmpegTranscodeFile[] = [];

  await Promise.all(
    files.map(async ([fileName, fileData]) => {
      const baseName = basename(fileName);
      const newName = `${basename(fileName, extname(fileName))}.${extension}`;

      await ffmpeg.writeFile(baseName, fileData);
      await ffmpeg.exec(["-i", baseName, newName]);

      returnFiles.push([
        join(dirname(fileName), newName),
        Buffer.from((await ffmpeg.readFile(newName)) as Uint8Array),
      ]);
    })
  );

  return returnFiles;
};
