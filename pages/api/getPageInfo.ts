import { PageInfo } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity";
import { sanityClient } from '../../sanity';


const query=groq`
    *[_type == "pageInfo"][0]
`;      //only fetching first record
type Data={
  pageInfo: PageInfo              //get only single value
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
const pageInfo: PageInfo= await sanityClient.fetch(query);
    res.status(200).json({ pageInfo })
  }