import { ProjectId } from "@/views/Projects/ProjectId";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectIdPage({ params }: PageProps) {
  return (
    <ProjectId params={{
      id: params.id 
    }} />
  );
}