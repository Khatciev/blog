import { BuildOptions } from "./types/config";
import type { Configuration as DevServerCongfiguration } from "webpack-dev-server";
export function buildDevServer(options: BuildOptions): DevServerCongfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}