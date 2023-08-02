import PQueue from "p-queue";
import sass from "sass";
import fs from "node:fs";

const threadPoolSize = process.env.UV_THREADPOOL_SIZE || 4;
const workQueue = new PQueue({ concurrency: threadPoolSize - 1 });

export default {
  name: "sass",
  test: /\.(sass|scss)$/,
  process() {
    return new Promise((resolve, reject) => {
      workQueue.add(() => {
        try {
          const result = sass.compile(this.id, {
            charset: true,
            importers: [
              {
                load: (canonicalUrl) => {
                  return {
                    contents: fs.readFileSync(canonicalUrl.pathname).toString(),
                    syntax: "scss",
                    sourceMapUrl: this.id,
                  };
                },
              },
            ],
          });
          resolve({
            code: result.css,
            map: result.map?.toString(),
          });
        } catch (error) {
          reject(error);
        }
      });
    });
  },
};
