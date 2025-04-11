import { ProjectCard } from '../ui/project-card';
import { projects } from '../model/mock/project';
// import { getFeaturedProjects } from '@/entities/project/api'

export const ProjectsSection = async () => {
//   const projects = await getFeaturedProjects()
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}