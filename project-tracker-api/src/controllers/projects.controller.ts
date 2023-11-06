import { Request, Response } from 'express';
import * as  ProjectService from '../services/projects.service';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    console.log("getProjects endpoint invoked")
    const data = await ProjectService.getProjects();
    res.status(200).json({ projects: data });
};

export const completeProject = async (req: Request, res: Response): Promise<void> => {
    console.log("completeProject endpoint invoked", req.body)
    const projectIds = req.body;
    const data = await ProjectService.completeProject(projectIds);
    res.status(201).json({ projects: data });
};


export const createProject = async (req: Request, res: Response): Promise<void> => {
    console.log("createProject endpoint invoked", req.body);
    const project = req.body;
    const data = await ProjectService.createProject(project);
    res.status(201).json({ projects: data });
};