import express from 'express';
import { addInputField } from '../controllers/addInputField.js';
import { addProject } from '../controllers/addProject.js';
import { addSchema } from '../controllers/addSchema.js';
import { addSchemaData } from '../controllers/addSchemaData.js';
import { deleteInputField } from '../controllers/deleteInputField.js';
import { deleteProject } from '../controllers/deleteProject.js';
import { deleteSchemaData } from '../controllers/deleteSchemaData.js';
import { getAllProjects } from '../controllers/getAllProjects.js';
import { getAllSchemaData } from '../controllers/getAllSchemaData.js';
import { getAllSchemas } from '../controllers/getAllSchemas.js';
import { getInputFields } from '../controllers/getInputFields.js';
import { getOneProject } from '../controllers/getOneProject.js';
import { getOneSchema } from '../controllers/getOneSchema.js';
import { getSingleDataInstance } from '../controllers/getSingleDataInstance.js';
import { getUserData } from '../controllers/getUserData.js';
import { deleteSchema } from './../controllers/deleteSchema.js';

 
const router = express.Router();

router.get('user/:email',getUserData);

router.get('/:email/dashboard/projects',getAllProjects);

router.get('/:email/projects/:id',getOneProject)

router.post('/:id/projects/add',addProject);

router.delete('/:id/projects/delete/:pid',deleteProject);


router.get('/:email/projects/:pid/schemas',getAllSchemas);

router.get('/:email/projects/:pid/schemas/:sid',getOneSchema);

router.post('/:id/projects/:pid/schemas/add',addSchema);

router.delete('/:id/projects/:pid/schemas/delete/:sid',deleteSchema);


router.get('/:email/projects/:pid/schemas/:sid/fields',getInputFields);

router.post('/:id/projects/:pid/schemas/:sid/fields/add',addInputField);

router.delete('/:id/projects/:pid/schemas/:sid/fields/delete/:fid',deleteInputField);


router.get('/:email/projects/:pid/schemas/:sid/data',getAllSchemaData);

router.get('/:id/projects/:pid/schemas/:sid/data/:did',getSingleDataInstance);

router.post('/:id/projects/:pid/schemas/:sid/data/add',addSchemaData);

router.delete('/:id/projects/:pid/schemas/:sid/data/delete/:did',deleteSchemaData)