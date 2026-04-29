import "server-only";

const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = "mistralai/mistral-medium-3.5-128b";

export async function generateNvidiaCompletion({
  prompt,
  temperature = 0.7,
  topP = 1,
  maxTokens = 16384,
  reasoningEffort = process.env.NVIDIA_REASONING_EFFORT,
  model = process.env.NVIDIA_MODEL ?? DEFAULT_MODEL,
} = {}) {
  if (!process.env.NVIDIA_API_KEY) {
    throw new Error("Missing NVIDIA_API_KEY environment variable.");
  }

  if (!prompt) {
    throw new Error("Prompt is required.");
  }

  const payload = {
    model,
    messages: [{ role: "user", content: prompt }],
    max_tokens: maxTokens,
    temperature,
    top_p: topP,
    stream: false,
  };

  if (reasoningEffort) {
    payload.reasoning_effort = reasoningEffort;
  }

  const response = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `NVIDIA API error (${response.status}): ${errorText || "Unknown error"}`
    );
  }

  const data = await response.json();
  const content =
    data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? "";

  if (!content) {
    throw new Error("NVIDIA API returned an empty response.");
  }

  return content.trim();
}
