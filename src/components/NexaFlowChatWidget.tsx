"use client";

import { useEffect, useRef } from "react";

const chatTargetId = "nexaflow-n8n-chat";
const chatProxyUrl = "/api/n8n-chat";

declare global {
  interface Window {
    openNexaChat?: () => void;
  }
}

export function NexaFlowChatWidget() {
  const targetRef = useRef<HTMLDivElement>(null);
  const configuredWebhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim();

  useEffect(() => {
    if (!configuredWebhookUrl) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "NexaFlow chat widget hidden: NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL is not set.",
        );
      }

      return;
    }

    const target = targetRef.current;

    if (!target) {
      return;
    }

    target.innerHTML = "";

    let chatApp: { unmount: () => void } | undefined;
    let isMounted = true;

    function getChatToggle() {
      return document.querySelector<HTMLElement>(".chat-window-toggle");
    }

    function isChatWindowOpen() {
      const chatWindow = document.querySelector<HTMLElement>(".chat-window");

      return chatWindow !== null && window.getComputedStyle(chatWindow).display !== "none";
    }

    function openNexaChat() {
      const chatToggle = getChatToggle();

      if (!chatToggle || isChatWindowOpen()) {
        return;
      }

      chatToggle.click();
    }

    function handleDemoClick(event: MouseEvent) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const targetElement = event.target;

      if (!(targetElement instanceof Element)) {
        return;
      }

      const trigger = targetElement.closest<HTMLAnchorElement>(".open-chat-demo");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      openNexaChat();
    }

    window.openNexaChat = openNexaChat;
    document.addEventListener("click", handleDemoClick);

    void import("@n8n/chat")
      .then(({ createChat }) => {
        if (!isMounted) {
          return;
        }

        chatApp = createChat({
          webhookUrl: chatProxyUrl,
          target,
          mode: "window",
          showWindowCloseButton: true,
          showWelcomeScreen: false,
          // Start a chat session immediately so the message input is visible.
          loadPreviousSession: false,
          metadata: {
            source: "nexaflow-website",
            page: window.location.href,
          },
          initialMessages: [
            "Hi! I'm Nexa, NexaFlow's assistant \u{1F44B}",
            "Ask me about our AI agents, or tell me what you'd like to automate.",
          ],
          i18n: {
            en: {
              title: "Nexa \u2014 NexaFlow Assistant",
              subtitle: "Ask about our AI agents or get a free custom build",
              footer: "",
              getStarted: "New Conversation",
              inputPlaceholder: "Ask Nexa about agents, pricing, or automation...",
              closeButtonTooltip: "Close chat",
            },
          },
        });
      })
      .catch((error: unknown) => {
        if (process.env.NODE_ENV !== "production") {
          console.warn("NexaFlow chat widget failed to load.", error);
        }
      });

    return () => {
      isMounted = false;
      document.removeEventListener("click", handleDemoClick);
      delete window.openNexaChat;
      chatApp?.unmount();
      target.innerHTML = "";
    };
  }, [configuredWebhookUrl]);

  if (!configuredWebhookUrl) {
    return null;
  }

  return <div id={chatTargetId} ref={targetRef} className="nexaflow-n8n-chat" />;
}
