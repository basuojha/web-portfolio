import js from 'assets/icons/js.svg';
import ts from 'assets/icons/ts.svg';
import html from 'assets/icons/html.svg';
import git from 'assets/icons/git.svg';
import figma from 'assets/icons/figma.svg';
import mongo from 'assets/icons/mongo.svg';
import jest from 'assets/icons/jest.svg';
import tailwind from 'assets/icons/tailwind.svg';
import nodejs from 'assets/icons/nodejs.svg';
import react from 'assets/icons/react.svg';
import redux from 'assets/icons/redux.svg';
import gql from 'assets/icons/gql.svg';
import kafka from 'assets/icons/kafka.svg';
import jira from 'assets/icons/jira.svg';
import express from 'assets/icons/express.svg';
import css3 from 'assets/icons/css3.svg';
import aws from 'assets/icons/aws.svg';

interface skillInfo {
  name: string;
  src: string;
}

interface skillGroup {
  name: string;
  items: string[];
}

const skillIcons: Record<string, skillInfo> = {
  js: { name: 'JavaScript', src: js },
  ts: { name: 'TypeScript', src: ts },
  html: { name: 'HTML', src: html },
  git: { name: 'Git', src: git },
  figma: { name: 'Figma', src: figma },
  mongo: { name: 'MongoDB', src: mongo },
  jest: { name: 'Jest', src: jest },
  tailwind: { name: 'Tailwind CSS', src: tailwind },
  nodejs: { name: 'Node.js', src: nodejs },
  react: { name: 'React', src: react },
  redux: { name: 'Redux', src: redux },
  gql: { name: 'GraphQL', src: gql },
  kafka: { name: 'Kafka', src: kafka },
  jira: { name: 'JIRA', src: jira },
  express: { name: 'Express.js', src: express },
  css3: { name: 'CSS3', src: css3 },
  aws: { name: 'AWS', src: aws },
};

const allSkillGroups: skillGroup[] = [
  {
    name: 'Languages',
    items: ['js', 'ts', 'html', 'css3'],
  },
  {
    name: 'Frameworks',
    items: ['react', 'redux', 'nodejs', 'express', 'tailwind'],
  },
  {
    name: 'Tools',
    items: ['git', 'figma', 'jira', 'aws'],
  },
  {
    name: 'Other Skills',
    items: ['jest', 'kafka', 'gql', 'mongo'],
  },
];

const softSkills: string[] = [
  'Technical Leadership',
  'Debugging',
  'Troubleshooting',
  'Strategic Thinking',
  'Problem-Solving',
  'Accountability',
  'Ownership',
  'Cross-Team Collaboration',
  'Effective Communication',
  'Agile & Scrum',
];

const skills = { skillIcons, allSkillGroups, softSkills };

export default skills;
