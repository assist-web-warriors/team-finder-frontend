import { SkillComponent } from 'src/features';

export const Skills = () => {
  const skills = [
    {
      skill: 'Graphic Design',
      category: 'Design',
      author: 'Motco Ana',
      department: 'IT',
      more: '',
    },
    {
      skill: 'Python',
      category: 'Programming Language',
      author: 'Alex Doe',
      department: 'Security',
      more: '',
    },
    {
      skill: 'Testing',
      category: 'Security',
      author: 'Quile Smith',
      department: 'Design',
      more: '',
    },
  ];

  const categories = [
    {
      category: 'Programming Language',
      more: '',
    },
    {
      category: 'Design',
      more: '',
    },
    {
      category: 'IT',
      more: '',
    },
  ];

  return <SkillComponent data={skills} categories={categories} />;
};
