import { NextApiRequest, NextApiResponse } from 'next'
import { ContentGateway } from '../../infra/ContentGateway'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.json(await ContentGateway.getDiffHero())
}
