import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

mkdirSync(join(root, "dist"), { recursive: true });
cpSync(join(root, "src/styles"), join(root, "dist/styles"), { recursive: true });

// dist/styles.css is a fully self-contained, pre-bundled stylesheet (remote
// font @import kept, local files inlined) so tools that copy it verbatim
// without resolving local @imports still get real, complete CSS.
const tokens = readFileSync(join(root, "src/styles/tokens.css"), "utf8");
const components = readFileSync(join(root, "src/styles/components.css"), "utf8");
writeFileSync(join(root, "dist/styles.css"), `${tokens}\n${components}\n`);
