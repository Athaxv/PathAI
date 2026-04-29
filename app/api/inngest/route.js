import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights, generateIndustryInsightsOnDemand } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateIndustryInsights,
    generateIndustryInsightsOnDemand,
    /* your functions will be passed here later! */
  ],
});
