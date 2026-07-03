import { Users, Posts, Likes, Messages, Comments } from "./models/index.js";

(async () => {
    console.log("Running migration...");
    const models = [Users, Posts, Likes, Messages, Comments];

    for (const model of models) {
        try {
            console.log("model -> ", model.name);
            await model.sync();

            if (typeof model.createDefaults === "function") {
                await model.createDefaults();
            }

        } catch (err) {
            console.error("Migration error:", err);
        }
    }

    console.log("Migration finished successfully.");
})();