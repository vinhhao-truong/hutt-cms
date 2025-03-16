import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const tailwindData = fullConfig.theme;

export default tailwindData;
