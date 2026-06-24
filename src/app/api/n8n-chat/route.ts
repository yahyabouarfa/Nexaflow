import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const allowedMethods = "OPTIONS, GET, POST";

function getWebhookUrl() {
  const webhookUrl =
    process.env.N8N_CHAT_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;
  const trimmedWebhookUrl = webhookUrl?.trim();

  if (!trimmedWebhookUrl) {
    return null;
  }

  try {
    return new URL(trimmedWebhookUrl);
  } catch {
    return null;
  }
}

function getForwardedHeaders(request: NextRequest) {
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  const accept = request.headers.get("accept");

  if (contentType) {
    headers.set("content-type", contentType);
  }

  if (accept) {
    headers.set("accept", accept);
  }

  return headers;
}

async function proxyN8nChatRequest(request: NextRequest) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    return Response.json(
      { error: "NexaFlow chat webhook is not configured." },
      { status: 503 },
    );
  }

  if (request.method === "GET") {
    webhookUrl.search = request.nextUrl.search;
  }

  try {
    const requestBody =
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.arrayBuffer();

    const upstreamResponse = await fetch(webhookUrl, {
      method: request.method,
      headers: getForwardedHeaders(request),
      body: requestBody,
      cache: "no-store",
    });

    const responseHeaders = new Headers({
      "cache-control": "no-store",
      "content-type":
        upstreamResponse.headers.get("content-type") ?? "application/json; charset=utf-8",
    });

    return new Response(await upstreamResponse.arrayBuffer(), {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("NexaFlow chat proxy request failed.", error);

    return Response.json(
      { error: "NexaFlow chat is temporarily unavailable." },
      { status: 502 },
    );
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      allow: allowedMethods,
    },
  });
}

export const GET = proxyN8nChatRequest;
export const POST = proxyN8nChatRequest;
