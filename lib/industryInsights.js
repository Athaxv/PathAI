export const buildPlaceholderInsightData = (industry) => ({
  industry,
  salaryRanges: [],
  growthRate: 0,
  demandLevel: "LOW",
  topSkills: [],
  marketOutlook: "NEUTRAL",
  KeyTrends: [],
  recommendedSkills: [],
  lastUpdated: new Date(),
  nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
});

export const buildPlaceholderInsightResponse = (industry) => ({
  ...buildPlaceholderInsightData(industry),
  isPending: true,
});

export const isInsightPending = (insight) =>
  !insight?.salaryRanges?.length || !insight?.topSkills?.length;
