import type { Project } from '../model/types/project.interface';

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{ width: `${(project.currentFunding / project.goalFunding) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{Math.round((project.currentFunding / project.goalFunding) * 100)}%</span>
                        <span>{project.currentFunding} из {project.goalFunding} ₽</span>
                    </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                    Поддержать
                </button>
            </div>
        </div>
    )
}