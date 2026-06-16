import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkflowDetailPage } from "@/components/WorkflowDetailPage";
import { getWorkflowBySlug, workflows } from "@/lib/workflows";

type WorkflowPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workflows.map((workflow) => ({
    slug: workflow.slug,
  }));
}

export async function generateMetadata({ params }: WorkflowPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    return {
      title: "Workflow | NexaFlow Agent",
    };
  }

  return {
    title: `${workflow.title} | NexaFlow Agent`,
    description: workflow.summary,
  };
}

export default async function Page({ params }: WorkflowPageProps) {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  return <WorkflowDetailPage workflow={workflow} />;
}
