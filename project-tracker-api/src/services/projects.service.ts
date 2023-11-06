import { Project } from "../model/projects.model";

const DB: Project[] = [
  {
    id: "1",
    name: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    status: 'pending',
    startDate: new Date(2022, 4, 6)
  },
  {
    id: "2",
    name: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    status: 'pending',
    startDate: new Date(2023, 6, 20)

  },
  {
    id: "3",
    name: 'Proyecto 3',
    description: 'Descripción del Proyecto 3',
    status: 'completed',
    startDate: new Date(2021, 3, 6),
    endDate: new Date(2021, 9, 30)
  },
  {
    id: "4",
    name: 'Proyecto 4',
    description: 'Descripción del Proyecto 4',
    status: 'pending',
    startDate: new Date(2023, 10, 15)
  },
  {
    id: "5",
    name: 'Proyecto 5',
    description: 'Descripción del Proyecto 5',
    status: 'completed',
    startDate: new Date(2023, 2, 10),
    endDate: new Date(2023, 6, 24)
  },
  {
    id: "6",
    name: 'Proyecto 6',
    description: 'Descripción del Proyecto 6',
    status: 'completed',
    startDate: new Date(2023, 2, 10),
    endDate: new Date(2023, 6, 24)
  },
  {
    id: "7",
    name: 'Proyecto 7',
    description: 'Descripción del Proyecto 7',
    status: 'completed',
    startDate: new Date(2023, 2, 10),
    endDate: new Date(2023, 6, 24)
  },
];
export const getProjects = async (): Promise<Project[]> => {
  return new Promise(res => {
    setTimeout(() => {
      res(DB);
    }, 200);
  });
}


export const completeProject = async (projectIds: string[]): Promise<Project[]> => {
  projectIds.forEach(projectId => {
    const index = DB.findIndex((p) => p.id === projectId);
    if (index !== -1) {
      DB[index] = {
        ...DB[index],
        status: 'completed',
        endDate: new Date()
      }
    }
  });


  return new Promise(res => {
    setTimeout(() => {
      res(DB);
    }, 200);
  });
}