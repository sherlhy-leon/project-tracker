import { Project } from "src/app/models/project.model";

export const PROJECTS_MOCK: Project[] =
    [
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c01",
          name: 'Proyecto 1',
          description: 'Descripción del Proyecto 1',
          status: 'pending',
          startDate: new Date(2022, 4, 6)
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c02",
          name: 'Proyecto 2',
          description: 'Descripción del Proyecto 2',
          status: 'pending',
          startDate: new Date(2023, 6, 20)
      
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c03",
          name: 'Proyecto 3',
          description: 'Descripción del Proyecto 3',
          status: 'completed',
          startDate: new Date(2021, 3, 6),
          endDate: new Date(2021, 9, 30)
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c04",
          name: 'Proyecto 4',
          description: 'Descripción del Proyecto 4',
          status: 'pending',
          startDate: new Date(2023, 10, 15)
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c05",
          name: 'Proyecto 5',
          description: 'Descripción del Proyecto 5',
          status: 'completed',
          startDate: new Date(2023, 2, 10),
          endDate: new Date(2023, 6, 24)
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c06",
          name: 'Proyecto 6',
          description: 'Descripción del Proyecto 6',
          status: 'completed',
          startDate: new Date(2023, 2, 10),
          endDate: new Date(2023, 6, 24)
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c07",
          name: 'Proyecto 7',
          description: 'Descripción del Proyecto 7',
          status: 'completed',
          startDate: new Date(2023, 2, 10),
          endDate: new Date(2023, 6, 24)
        }
];


export const DELETED_RESP =
    [
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c02",
          name: 'Proyecto 2',
          description: 'Descripción del Proyecto 2',
          status: 'pending',
          startDate: new Date(2023, 6, 20)
      
        },
        {
          id: "195d6449-8789-450d-b81a-87b294ee4c03",
          name: 'Proyecto 3',
          description: 'Descripción del Proyecto 3',
          status: 'completed',
          startDate: new Date(2021, 3, 6),
          endDate: new Date(2021, 9, 30)
        }
];


export const COMPLETE_RESP =
    [
      {
        id: "195d6449-8789-450d-b81a-87b294ee4c06",
        name: 'Proyecto 6',
        description: 'Descripción del Proyecto 6',
        status: 'completed',
        startDate: new Date(2023, 2, 10),
        endDate: new Date(2023, 6, 24)
      },
];

export const CREATE_RESP =
    [
      {
        id: "195d6449-8789-450d-b81a-87b294ee4c07",
        name: 'Proyecto 7',
        description: 'Descripción del Proyecto 7',
        status: 'completed',
        startDate: new Date(2023, 2, 10),
        endDate: new Date(2023, 6, 24)
      }
];





