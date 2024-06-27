import { connectDatabase } from "@/lib/db/database";

export function register() {
    connectDatabase();
}