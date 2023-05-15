import { projects } from '../data';
import SimpleProject from '../simpleProject/SimpleProject';

export default function SimpleProjects() {
	return (
		<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 py-4 mb-8">
			{projects.map((project) => {
				return <SimpleProject key={project.id} {...project} />;
			})}
		</div>
	);
}
