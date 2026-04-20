# TODO

Parked work, in rough priority order.

## Blog Lambda — add in-memory cache
Reduce invocations and dev.to round-trips. Sketch:

```js
let cache = { data: null, ts: 0 };
const TTL = 60 * 60 * 1000; // 1 hour

export const handler = async () => {
  if (cache.data && Date.now() - cache.ts < TTL) {
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify(cache.data) };
  }
  const res = await fetch("https://dev.to/api/articles?username=starkblaze01");
  const data = await res.json();
  cache = { data, ts: Date.now() };
  return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
};
```

Adjust to the Lambda's actual upstream URL and response shape.

## AWS cost hygiene (when back in the console)
- CloudWatch → log group for the Lambda → set retention to **7 days** (default is never-expire).
- Billing → create a **$1 budget alert** with email notification.
- IAM → confirm the Lambda's execution role has only `logs:*` — no stray S3/DynamoDB from experiments.

## Travel page
New route `/travel`. Start simple, grow later:
- **v1** — grouped list by country. India (nearly every state except NE + Rajasthan — enumerate), UAE (all 7 emirates), Japan ×2, Vietnam. A line or two per place.
- **v2** — interactive world map with pins (e.g. react-simple-maps, ~30KB).
- **v3** — per-trip pages with photos + notes; tie-in to the YouTube channel.

## Nice-to-haves
- Short hint next to the theme toggle on first visit, then dismiss — the sun/moon button is subtle enough some visitors miss it.
- Mobile pass on the Home page now that the intro has three paragraphs — check if it feels long on a phone.
