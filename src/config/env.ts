import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

interface Env {
  PORT: number;
  DATABASE_URL: string;
}

const getEnvVar = (key: keyof Env, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env: Env = {
  PORT: Number(getEnvVar("PORT", "3000")),
  DATABASE_URL: getEnvVar("DATABASE_URL"),
};