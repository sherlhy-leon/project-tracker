import { Request, Response } from 'express';
import * as  ProjectService from '../services/projects.service';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    const data = await ProjectService.getProjects();
    res.status(200).json({ projects: data });
};