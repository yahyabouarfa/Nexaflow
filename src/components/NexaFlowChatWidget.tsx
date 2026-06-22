"use client";

import { useEffect, useRef } from "react";

const chatTargetId = "nexaflow-n8n-chat";

export function NexaFlowChatWidget() {
  const targetRef = useRef<HTMLDivElement>(null);
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim();

  useEffect(() => {
    if (!webhookUrl) {
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

      const chatToggle = document.querySelector<HTMLElement>(".chat-window-toggle");

      if (!chatToggle) {
        return;
      }

      event.preventDefault();

      const chatWindow = document.querySelector<HTMLElement>(".chat-window");
      const isChatOpen =
        chatWindow !== null && window.getComputedStyle(chatWindow).display !== "none";

      if (!isChatOpen) {
        chatToggle.click();
      }
    }

    document.addEventListener("click", handleDemoClick);

    void import("@n8n/chat")
      .then(({ createChat }) => {
        if (!isMounted) {
          return;
        }

        chatApp = createChat({
          webhookUrl,
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
            "Hi! I'm the NexaFlow assistant. Ask me about AI agents, automation, pricing, or how we can help your business.",
          ],
          i18n: {
            en: {
              title: "NexaFlow Assistant",
              subtitle: "Ask about our AI agents or get a free custom build",
              footer: "",
              getStarted: "New Conversation",
              inputPlaceholder: "Ask about AI agents, pricing, automation...",
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
      chatApp?.unmount();
      target.innerHTML = "";
    };
  }, [webhookUrl]);

  if (!webhookUrl) {
    return null;
  }

  return <div id={chatTargetId} ref={targetRef} className="nexaflow-n8n-chat" />;
}
