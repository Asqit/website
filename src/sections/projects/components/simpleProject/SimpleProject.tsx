import { FaGithubAlt, FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ISimpleProjectProps {
  title: string;
  tags: string[];
  link: string;
  id: number;
}

export default function SimpleProject(props: ISimpleProjectProps) {
  const { title, link, tags, id } = props;
  const { t } = useTranslation();

  return (
    <div className='bg-bg10 rounded-lg p-8 flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <span className='text-2xl flex items-center gap-1'>
          <FaCode />
          Project
        </span>
        <a
          href={link}
          className='link flex items-center gap-1 justify-center'
          target='_blank'
        >
          <FaGithubAlt /> source
        </a>
      </div>
      <article className='flex-grow'>
        <h2 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary0 to-primary10'>
          {title}
        </h2>
        <p>{t(`projects.projects-data.${id}`)}</p>
      </article>
      <div>
        {tags.map((tag) => (
          <code
            className='m-1 bg-bg5 text-white rounded-lg p-2 inline-block'
            key={tag}
          >
            {tag}
          </code>
        ))}
      </div>
    </div>
  );
}
