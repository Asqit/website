import { FC } from 'react';
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDirections,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiMongodb,
} from 'react-icons/si';

interface ISkill {
  id: number;
  value: string;
  Icon?: FC;
  color: string;
  backgroundColor: string;
}

export const skillsData: ISkill[] = [
  {
    id: 0,
    value: 'HTML5',
    Icon: FaHtml5,
    backgroundColor: '#e44d26',
    color: '#fff',
  },
  { id: 9, value: 'json', backgroundColor: '#DDD', color: '#222222' },
  {
    id: 1,
    value: 'CSS',
    Icon: FaCss3Alt,
    backgroundColor: '#264de4',
    color: '#fff',
  },
  { id: 8, value: 'rest-api', backgroundColor: '#DDD', color: '#222222' },

  {
    id: 2,
    value: 'Node.js',
    Icon: FaNodeJs,
    backgroundColor: '#7eba00',
    color: '#fff',
  },
  {
    id: 15,
    value: '!Bash',
    backgroundColor: '#000000',
    color: '#0F0',
  },
  {
    id: 16,
    value: 'markdown',
    backgroundColor: '#DDD',
    color: '#222222',
  },
  {
    id: 3,
    value: 'Tailwind',
    Icon: SiTailwindcss,
    backgroundColor: '#0b1120',
    color: '#38bdf8',
  },
  { id: 17, value: 'sass', backgroundColor: '#cf649a', color: '#fff' },
  {
    id: 14,
    value: 'redux-toolkit',
    Icon: SiRedux,
    backgroundColor: '#323230',
    color: '#764abd',
  },

  { id: 11, value: 'lua', backgroundColor: '#DDD', color: '#222222' },
  {
    id: 4,
    value: 'Express.js',
    Icon: FaDirections,
    backgroundColor: '#333331',
    color: '#fff',
  },
  {
    id: 5,
    value: 'TypeScript',
    Icon: SiTypescript,
    backgroundColor: '#0078c9',
    color: '#fff',
  },
  {
    id: 6,
    value: 'React.js',
    Icon: FaReact,
    backgroundColor: '#222222',
    color: '#49d7fd',
  },
  { id: 10, value: 'git', backgroundColor: '#DDD', color: '#222222' },
  {
    id: 7,
    value: 'MongoDB',
    Icon: SiMongodb,
    backgroundColor: '#1f8b37',
    color: '#fff',
  },
  {
    id: 12,
    value: 'JavaScript',
    Icon: SiJavascript,
    backgroundColor: '#ebd64d',
    color: '#323230',
  },
  { id: 13, value: 'mern-stack', backgroundColor: '#DDD', color: '#222222' },
];
