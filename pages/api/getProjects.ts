import { Project, Skill } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity";
import { sanityClient } from '../../sanity';


const query=groq`
    *[_type == "project"]{
      ...,
      technologies[]->              
    } 
`;      //referencing technology field
type Data={
  projects: Project[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
const projects: Project[]= await sanityClient.fetch(query);
    res.status(200).json({ projects })
  }